import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "./login";
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'login-container',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public loginModel: Login = new Login(); 

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    onSubmit() {
        this.authService.getTokenFromServer(this.loginModel)
            .subscribe(
                (res) => {
                    // console.log('Response: ', res);
                    this.router.navigate(['/connect'])
                },
                (err) => {
                    // console.log('Error: ', err);
                }
            )
    }
}