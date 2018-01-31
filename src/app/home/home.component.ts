import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 1.678418;
  lng: number = 25.809007;

  constructor() {
  }

  ngOnInit() {
        // ...
  }
}
