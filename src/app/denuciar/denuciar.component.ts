import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {GoogleMapsApiService} from '../services/google-maps-api.service';
import { MouseEvent } from '@agm/core';



@Component({
  selector: 'app-denuciar',
  templateUrl: './denuciar.component.html',
  styleUrls: ['./denuciar.component.css']
})
export class DenuciarComponent implements OnInit {
  lat = 1.678418;
  lng = 25.809007;
  latMarker: number;
  lngMarker: number;
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
  mapClicked($event: MouseEvent) {
      this.latMarker = $event.coords.lat;
      this.lngMarker = $event.coords.lng;
      console.log(`lat: ${this.latMarker} lng: ${this.lngMarker}`);
  }
  buscarDireccion() {
      this.lat = this.directionSelect.geometry.location.lat;
      this.lng = this.directionSelect.geometry.location.lng;
      this.latMarker = this.directionSelect.geometry.location.lat;
      this.lngMarker = this.directionSelect.geometry.location.lng;
  }
}
