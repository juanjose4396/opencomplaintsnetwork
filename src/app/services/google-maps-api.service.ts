import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapsResponseAPI} from '../interfaces/responseAPI.interface';

@Injectable()
export class GoogleMapsApiService {
    constructor(private httpClient: HttpClient) {}
    public buscarDirecciones(query) {

        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyAYqegnMjrvXCsvZFWqALye-Wn1r-wMMws`;
        console.log(url);
        return this.httpClient.get<MapsResponseAPI>(url)
            .map(response => response.results);
    }
}
