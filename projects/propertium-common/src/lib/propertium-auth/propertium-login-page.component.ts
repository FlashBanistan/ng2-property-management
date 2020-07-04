import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials } from './login-credentials.interface';

@Component({
  selector: 'propertium-login-page',
  templateUrl: './propertium-login-page.component.html',
  styleUrls: ['./propertium-login-page.component.scss'],
})
export class PropertiumLoginPageComponent implements OnInit {
  loginForm: FormGroup;

  @Input() backgroundUrl: string;
  @Output() login = new EventEmitter<LoginCredentials>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  onSubmit(): void {
    this.login.emit(this.loginForm.value);
  }

  private initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
}
