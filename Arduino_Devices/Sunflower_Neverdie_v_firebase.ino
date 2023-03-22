


#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include "DHT.h"
#include <Adafruit_Sensor.h>

#include <Wire.h> //กำหนดPinของ LCD
#include <LiquidCrystal_I2C.h> //LCD
LiquidCrystal_I2C lcd(0x27, 16, 2);

//Firebase Setup//
#define FIREBASE_HOST "pocket-iot-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "1WstirL40sMzKhKK1p1Csz9o1ncQDYbLyu4QFQs0"
FirebaseData firebaseData;


//Home Wifi Setup//
#define WIFI_SSID "DreaMxickZ"
#define WIFI_PASSWORD "0869516082"

//DHT//
#define DHTPIN D5 
#define DHTTYPE DHT11 
DHT dht(DHTPIN, DHTTYPE);

//soil//


//pump//
#define Pump  D0

//set//
float h ; 
float t ;
float f ; 
float hif ;
float hic ; 

const int AirValue = 620; //แทนที่ค่านี้ด้วย Value_1
const int WaterValue = 310; //แทนที่ค่านี้ด้วย Value_2
int soilMoistureValue = 0; //กำหนดตัวแปร soilMoistureValue
int soilmoisturepercent=0-100; //กำหนดตัวแปร soilmoisturepercent

void setup() {
  Initialization();
  WiFiConnection();
  dht.begin();
  ledsetup();
  pinMode(Pump , OUTPUT);
  digitalWrite(Pump,LOW);
}


void Initialization(){
  
  Serial.begin(115200); 
 }

void WiFiConnection(){
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
}

void ledsetup() {


  lcd.begin();
  lcd.backlight();
  lcd.setCursor(0, 0); // กำหนดให้ เคอร์เซอร์ อยู่ตัวอักษรตำแหน่งที่0 แถวที่ 1 เตรียมพิมพ์ข้อความ
  lcd.print("Sunflower "); //พิมพ์ข้อความ "LCD1602 I2c Test"
  lcd.setCursor(2, 1); // กำหนดให้ เคอร์เซอร์ อยู่ตัวอักษรกำแหน่งที3 แถวที่ 2 เตรียมพิมพ์ข้อความ
  lcd.print("Loading"); //พิมพ์ข้อความ "myarduino.net"
  lcd.blink();
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Ready "); 
  lcd.setCursor(2, 1);
  lcd.print("Status on "); 
  lcd.blink();
  delay(2000);
  lcd.clear();
}
void loop() {
  delay(2000);
  dhtsensor();
  delay(3000);
  soilsen();
  delay(1000);
  pumpstatus();
  delay(2000);
  looplcd();

}

void dhtsensor() {

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }


 
 Firebase.setInt(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/tempc",t);
 Firebase.setInt(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/tempf",f);
 Firebase.setInt(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/hump",h);

 Serial.println("เซ็นเซอร์อุณหภูมิ : ส่งข้อมูล ขึ้นคลาว์แล้ว");
  lcd.setCursor(0, 0);
  lcd.print("Hum:     ");
  lcd.setCursor(4, 0);
  lcd.print(h);
  lcd.setCursor(9, 0);
  lcd.print("%");
  lcd.setCursor(0, 1);
  lcd.print("Tem:     ");
  lcd.setCursor(4, 1);
  lcd.print(t);
  lcd.setCursor(9, 1);
  lcd.print("C");
  delay(2000);
  lcd.clear();

 
  
}

void soilsen() {
  
soilMoistureValue = analogRead(A0); //put Sensor insert into soil

 Firebase.setInt(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/soilmoisturevalue",soilMoistureValue);
Serial.println("เซ็นเซอรSoil : ส่งข้อมูล ขึ้นคลาว์แล้ว");
  lcd.setCursor(0, 0);
  lcd.print("Soil:     ");
  lcd.setCursor(5, 0);
  lcd.print(soilMoistureValue);
  delay(2000);
  lcd.clear();
}

void looplcd() {
 
  
}

void pumpstatus() {
  if( soilMoistureValue < 500 ) {
 
 Firebase.setBool(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/pump",true);

 
 }
 else{
 
  Firebase.setBool(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/pump",false);
 
 }

 if (Firebase.get(firebaseData,"/gateways/B66jkrVCjCCtADfhmM2C/pump")) {
  {
    if(firebaseData.dataType() = "bool"){
      bool rl1 = firebaseData.boolData(); 
      if(rl1==false) {
        digitalWrite(Pump,LOW);
         Serial.print("Relay1 off");
      }
       else if(rl1==true) {
        digitalWrite(Pump,HIGH);
        Serial.print("Relay1 on");
      }
    }
  }
  }

 Serial.println("ปั้มทำงานแล้ว");
}
