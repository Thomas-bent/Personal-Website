import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';

  menuOpen: boolean;

  GenerateLi() {
  }

  constructor() {
    this.menuOpen = false;
  }

  burgerClick() {
    this.menuOpen = !this.menuOpen;
  }

}
