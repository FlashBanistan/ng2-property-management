import { Component } from '@angular/core';
import { AuthenticationService } from 'app/authentication/authentication.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
})
export class AppWrapperComponent {
  collapsible = true;
  opened = true;
  navLinks = [
    { title: 'Home', url: '/connect/home', icon: 'home' },
    { title: 'Payments', url: '/connect/payments', icon: 'payment' },
    { title: 'Maintenance', url: '/connect/maintenance', icon: 'engineering' },
    { title: 'Documents', url: '/connect/documents', icon: 'snippet_folder' },
    { title: 'Property', url: '/connect/property', icon: 'apartment' },
    { title: 'Account', url: '/connect/account', icon: 'account_box' },
    { title: 'Help', url: '/connect/help', icon: 'help_center' },
  ];

  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }
}
