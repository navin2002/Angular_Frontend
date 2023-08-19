import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';//in quotes
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'helloworld';
  name="";
  selectClause="";//imp neccessary for {{}}
  whereClause="";
  query=""
  constructor(private http:HttpClient,private appService:AppService)
  {

  }
  geturl="http://localhost:5000/backend";
  request="";
  resp={};
  columnheaders=this.selectClause.split(",");



  onSubmitQuery( some :{ cols :string , rows:string })
  {

    this.query="/select "+this.selectClause+" from public.some where "+this.whereClause;
    this.request=this.geturl+this.query;

    this.http.get(this.request).subscribe(
      (res) =>{console.log(res);this.resp=res;this.columnheaders=this.selectClause.split(",");
      this.appService.downloadFile(res, 'jsontocsv',this.columnheaders);}
    )


  }


}
