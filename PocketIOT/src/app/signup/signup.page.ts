import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainApiService } from '../services/main-api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../signup/signup.page.scss'],
})
export class SignupPage implements OnInit {
  formRegis: FormGroup;
  form = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    cpassword: null,
    type: 'user' 
   
    
  };


  constructor(private formBuilder: FormBuilder, private mainApiService: MainApiService) {
    this.formRegis = this.initUserFormGroup();
  }



  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.form);
    if (this.form.firstName && this.form.email && this.form.email && this.form.password && (this.form.password === this.form.cpassword)) {
      console.log(this.form);
      this.mainApiService.signupByEmail(this.form);
    } else {
      alert('form ไม่ครบ');
    }
  }

  initUserFormGroup(): FormGroup {
    const formControls = {
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      cpassword: [null, Validators.required],
      type: ['user', Validators.required],
    };
    return this.formBuilder.group(formControls, {
      validator: this.checkIfMatchingPasswords('password', 'cpassword')
    });
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

}
