import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http:HttpClient) { }

  private API_AUTOS = 'http://localhost:3000/autos'

  getAutos():Observable <any>{
    return this.http.get(this.API_AUTOS)
  }

}
