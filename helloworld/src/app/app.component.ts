import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';//in quotes


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
  constructor(private http:HttpClient)
  {

  }
  geturl="http://localhost:5000/backend";
  request="";
  resp={};


  onSubmitQuery( some :{ cols :string , rows:string })
  {

    this.query="/select "+this.selectClause+" from table where "+this.whereClause;
    this.request=this.geturl+this.query;

    this.http.get(this.request).subscribe(
      (res) =>{console.log(res);this.resp=res}
    )

  }

}
