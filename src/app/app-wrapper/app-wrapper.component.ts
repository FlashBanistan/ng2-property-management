import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'app/authentication/authentication.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
})
export class AppWrapperComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  drawerMode: string;
  navLinks = [
    { title: 'Dashboard', url: '/connect/home', icon: 'dashboard' },
    { title: 'Payments', url: '/connect/payments', icon: 'payment' },
    { title: 'Maintenance', url: '/connect/maintenance', icon: 'engineering' },
    { title: 'Documents', url: '/connect/documents', icon: 'snippet_folder' },
    { title: 'Property', url: '/connect/property', icon: 'apartment' },
    { title: 'Account', url: '/connect/account', icon: 'account_box' },
    { title: 'Help', url: '/connect/help', icon: 'help_center' },
  ];
  ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(private authService: AuthenticationService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.manageScreenSize();
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  logout() {
    this.authService.logout();
  }

  private manageScreenSize() {
    /* Subscribe to screen size. */
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
          this.drawerMode = 'over';
        } else {
          this.isMobile = false;
          this.drawerMode = 'side';
        }
      });
  }
}
