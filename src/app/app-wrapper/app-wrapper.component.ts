import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent {
  public collapsible = true;
  public collapsed = false;

  constructor() {}
}
