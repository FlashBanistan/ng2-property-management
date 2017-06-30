import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name: string = "Aaron Chesley";
  private _opened: boolean = true;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  title = 'app';
}
