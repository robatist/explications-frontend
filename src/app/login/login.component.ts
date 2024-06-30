import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExplicationService } from '../services/explication-service.service';
import { AuthService } from '../services/auth.service';
import { AuthenticationRequest } from '../authRequest';
import { AuthenticationResponse } from '../authResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private explicationService: ExplicationService, private authService: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';

  result!: AuthenticationResponse;

  bodyRequest: AuthenticationRequest = {
    email: '',
    password: ''
  }

  onSubmit() {
    console.log("Username:", this.username, "Password:", this.password);

    this.bodyRequest.email = this.username;
    this.bodyRequest.password = this.password;

    this.explicationService.authenticate(this.bodyRequest).subscribe(
      {
        next: data => {
          this.result = data;
          
          console.log(this.result);

          this.authService.storeToken(this.result.access_token);
        },
        error: e => console.log(e)
      }
    );
  }
}
