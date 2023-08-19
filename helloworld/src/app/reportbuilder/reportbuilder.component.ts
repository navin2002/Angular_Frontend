import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';//in quotes
import { NgForm } from '@angular/forms';
import { DownloadserviceService } from '../downloadservice.service';


@Component({
  selector: 'app-reportbuilder',
  templateUrl: './reportbuilder.component.html',
  styleUrls: ['./reportbuilder.component.css']
})
export class ReportbuilderComponent {

  title = 'helloworld';
  name="";
  selectClause="";//imp neccessary for {{}}
  whereClause="";
  query=""
  step=1;
  constructor(private http:HttpClient,private appService:DownloadserviceService)
  {

  }
  geturl="http://localhost:5000/backend";
  request="";
  resp={};
  columnheaders=this.selectClause.split(",");
  previous()
  {
    this.step-=1;
  }
  next()
  {
    this.step+=1;
  }

  //form:any;

  onSubmitQuery( some :NgForm)
  {
    //this.form=some
    this.step+=1;
    this.query="/select "+this.selectClause+" from public.some where "+this.whereClause;
    this.request=this.geturl+this.query;

    this.http.get(this.request).subscribe(
      (res) =>{console.log(res);this.resp=res;this.columnheaders=this.selectClause.split(",");}

    )


  }

  ondownload()
  {
  this.appService.downloadFile(this.resp, 'jsontocsv',this.columnheaders);
   }
   restart()
   {
    this.step=1;
    //this.form.reset();
   }



}

