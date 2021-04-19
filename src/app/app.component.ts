import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPipes';
  name = "santosh";
  sirname = "KOLEKAR";
  msg = "hello from mit";
  hobbie ="dance";
  birthday = new Date(1993,3,6)
}
