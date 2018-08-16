import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template: `
  <div>
    <h1>{{title}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
