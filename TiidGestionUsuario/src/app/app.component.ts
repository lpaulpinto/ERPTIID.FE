import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
  // templateUrl: './app.component.html'
})

export class AppComponent  implements OnInit {
  
  constructor(private router: Router){}

  ngOnInit(){}

}
