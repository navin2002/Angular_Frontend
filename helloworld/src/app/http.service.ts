import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  get(url)
  {
    return this.http.get<any>(url)
  }
  getwithreturn(url,type)
  {
    return this.http.get(url,type)
  }
  post(url,obj)
  {
      return this.http.post<any>(url,obj)
  }

}
