import { Component } from "@angular/core";
import { Login } from "./login";

@Component({
    selector: 'login-container',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public loginModel: Login = new Login(); 

    constructor() { }

    onSubmit() {
        console.log(this.loginModel);
    }
}