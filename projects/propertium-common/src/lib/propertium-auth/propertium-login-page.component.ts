import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials } from './login-credentials.interface';

@Component({
  selector: 'propertium-login-page',
  templateUrl: './propertium-login-page.component.html',
  styleUrls: ['./propertium-login-page.component.scss'],
})
export class PropertiumLoginPageComponent implements OnInit {
  @Input() backgroundUrl: string;
  @Input() logoUrl: string;
  @Input() loginTitle: string;
  @Output() login = new EventEmitter<LoginCredentials>();
  loginForm: FormGroup;
  passwordInputType = 'password';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  onSubmit(): void {
    this.login.emit(this.loginForm.value);
  }

  togglePasswordInputType() {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }

  private initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
