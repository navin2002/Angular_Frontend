import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
//import { HttpClient } from '@angular/common/http';//in quotes

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpService) { }
  getImage(imageUrl: string): Observable<any> {
    return this.httpClient.getwithreturn(imageUrl,{ responseType: 'blob',observe: 'response' })
   // return this.httpClient.get(imageUrl, { responseType: 'blob',observe: 'response' });
  }
}
