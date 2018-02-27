import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapsResponseAPI} from '../interfaces/responseAPI.interface';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleMapsApiService {
    constructor(private httpClient: HttpClient) {}
    public buscarDirecciones(query) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${environment.firebase.apiKey}`;
        console.log(url);
        return this.httpClient.get<MapsResponseAPI>(url)
            .map(response => response.results);
    }
    public buscarDireccionGeoCode(lat, lng) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.firebase.apiKey}`;
        console.log(url);
        return this.httpClient.get<MapsResponseAPI>(url)
            .map(response => response.results);
    }
}
