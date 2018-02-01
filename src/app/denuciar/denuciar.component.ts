import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {GoogleMapsApiService} from '../services/google-maps-api.service';



@Component({
  selector: 'app-denuciar',
  templateUrl: './denuciar.component.html',
  styleUrls: ['./denuciar.component.css']
})
export class DenuciarComponent implements OnInit {
  lat = 1.678418;
  lng = 25.809007;
  directionSelect: any;
  items = [];
  typeahead = new EventEmitter<string>();

  constructor(private httpClient: HttpClient, private googleMapsApiService: GoogleMapsApiService) {}

  ngOnInit() {
      this.typeahead
          .distinctUntilChanged()
          .debounceTime(300)
          .switchMap(query => this.googleMapsApiService.buscarDirecciones(query))
          .subscribe(items => {
              this.items = items;
              console.log(this.items);
          }, (err) => {
              console.log(err);
              this.items = [];
          });
  }
}
