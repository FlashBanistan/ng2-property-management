import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LoginCredentials } from './login-credentials.interface';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginCredentials: LoginCredentials = { email: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    this.authService.getTokenFromServer(this.loginCredentials).subscribe(
      (res) => {
        this.router.navigate(['/connect']);
      },
      (err) => {}
    );
  }
}
