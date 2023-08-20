import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';//in quotes

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }
  getImage(imageUrl: string): Observable<any> {
    return this.httpClient.get(imageUrl, { responseType: 'blob',observe: 'response' });
  }
}
