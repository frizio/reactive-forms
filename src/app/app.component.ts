import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registrationForm = new FormGroup({
    username: new FormControl('frizio'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiData() {
    console.log("Loading API Data...");
    /*
    this.registrationForm.setValue({
      username: 'friziooo',
      password: 'pass',
      confirmPassword: 'pass',
      address: {
        city: 'Palermo',
        state: 'Italy',
        postalCode: '90100'
      }
    });
    */
    this.registrationForm.patchValue({
      username: 'friziooo',
      password: 'pass',
      confirmPassword: 'pass'
    });
  }

}
