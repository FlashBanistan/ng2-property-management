import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PropertiumLoginPageComponent } from './propertium-login-page.component';

@NgModule({
  declarations: [PropertiumLoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [PropertiumLoginPageComponent],
})
export class PropertiumLoginPageModule {}
