import { Component, ViewChild } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';

  constructor(private router: Router) {

  }
}
