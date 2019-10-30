import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw1';
  inputValue = '';
  show = false;
  login = false;
  reg = false;

  house = [
    {
      city: 'lviv',
      id: 1},
    {
      city: 'Ternopil',
      id: 2},
    {
      city: 'ASGARD!!!',
      id: 3}
  ];

  inp(ev) {
    this.inputValue = ev.target.value;
  }

  btn() {
    this.show = !this.show;
  }
  loginInp() {
    this.login = !this.login;
    this.reg = false;
  }
  register() {
    this.reg = !this.reg;
    this.login = false;
  }
}
