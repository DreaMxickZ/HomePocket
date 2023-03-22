#include <WiFi.h> 
//#include "DHT.h"
#include <FirebaseESP32.h>

//Firebase Setup//
#define FIREBASE_HOST "Your Firebase Host"
#define FIREBASE_AUTH "Your Firebase Auth"
FirebaseData firebaseData;

//Notebook Wifi Setup//
//#define WIFI_SSID "Your SSID"
//#define WIFI_PASSWORD "Your Password"

//Hotspot Wifi Setup//
//#define WIFI_SSID "Your SSID"
//#define WIFI_PASSWORD "Your Password"

//Home Wifi Setup//
#define WIFI_SSID "Your SSID"
#define WIFI_PASSWORD "Your Password"


//DHT Setup//
#define DHTTYPE DHT11
#define DHTPIN 25
//DHT dht(DHTPIN, DHTTYPE); 

//Relay Pin //

const int relay1 =27 ;
const int relay2 = 25 ;





void setup(){
  
  Initialization();
  WiFiConnection();
  //dht.begin();
  realtimesetup();
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
 
 }

//int counter = 0;
//float counter2 = 0.5;

 
void Initialization(){
  
  Serial.begin(115200); 
 }

void realtimesetup() {
  Firebase.setString(firebaseData, "/Relay/Status","ON");
  if(Firebase.getString(firebaseData, "/Relay/Status")) {
    if(firebaseData.dataType() =="string"){
      Serial.print("Device Status= ");
      Serial.println(firebaseData.stringData());
    }
  Firebase.setBool(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/sw1",false);
  Firebase.setBool(firebaseData, "/gateways/B66jkrVCjCCtADfhmM2C/sw2",false);

}
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


void loop(){
checkrelayfirebase();
delay(1000);
}


void checkrelayfirebase() {
     
  if (Firebase.get(firebaseData,"/gateways/B66jkrVCjCCtADfhmM2C/sw1")) {
  {
    if(firebaseData.dataType() = "bool"){
      bool rl1 = firebaseData.boolData(); 
      if(rl1==true) {
        digitalWrite(relay1,LOW);
         Serial.print("Relay1 on");
      }
       else if(rl1==false) {
        digitalWrite(relay1,HIGH);
        Serial.print("Relay1 off");
      }
    }
  }
  }
   Serial.print("   ");
   if (Firebase.get(firebaseData,"/gateways/B66jkrVCjCCtADfhmM2C/sw2")) {
  {
    if(firebaseData.dataType() = "bool"){
      bool rl2 = firebaseData.boolData(); 
      if(rl2==true) {
        digitalWrite(relay2,LOW);
         Serial.print("Relay2 on");
      }
       else if(rl2==false) {
        digitalWrite(relay2,HIGH);
        Serial.print("Relay2 off");
      }
    }
  }
  }
 Serial.print("\n ");
  
}
