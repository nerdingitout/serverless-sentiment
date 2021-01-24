import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http:HttpClient
  ) { }
  apiCall(){
    //return this.http.post('http://sentiment-default.masa-cluster-new-162e406f043e20da9b0ef0731954a894-0000.eu-de.containers.appdomain.cloud/api/post_sentiment')
  }
}
