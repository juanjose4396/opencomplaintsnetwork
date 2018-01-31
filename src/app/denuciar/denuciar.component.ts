import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ResponseAPI} from '../interfaces/responseAPI.interface';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-denuciar',
  templateUrl: './denuciar.component.html',
  styleUrls: ['./denuciar.component.css']
})
export class DenuciarComponent implements OnInit {
  urlBase = 'https://maps.googleapis.com/maps/api/geocode/json';
  lat = 1.678418;
  lng = 25.809007;
  model: any = {};
  private searchField: FormControl;
  // results$: Observable<any>;
  constructor(private httpClient: HttpClient) {
    this.searchField = new FormControl();
    this.model.direccion = '';
  }

  ngOnInit() {
   /** this.results$ = this.searchField.valueChanges
        .debounceTime(500)
        .switchMap( query => this.httpClient.get<ResponseAPI>( `${this.urlBase}?address=${query}`))
        .map(response => response.results);**/
  }

}
