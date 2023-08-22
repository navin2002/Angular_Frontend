import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';//in quotes
import { NgForm } from '@angular/forms';
import { DownloadserviceService } from '../downloadservice.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpService } from '../http.service';

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
  constructor(private http:HttpService,private appService:DownloadserviceService)
  {

  }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings  = {};
  ngOnInit()
  {
    this.dropdownList = [
      { item_id: 1, item_text: 'id' },
      { item_id: 2, item_text: 'name' },
      { item_id: 3, item_text: 'age' },
      { item_id: 4, item_text: 'dept' },
    ];
    this.selectedItems = [
      //{ item_id: 1, item_text: 'id' },
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
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

  form:any;

  onSubmitQuery( some :NgForm)
  {
    this.form=some
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
    this.form.reset();
   }

   onItemSelect(item: any) {
    this.selectedItems.push(item)

  }
  onItemDeSelect(item: any) {
   // this.selectedItems = this.selectedItems.filter(item => {return item !== this.selectedItems;});
   this.selectedItems = this.selectedItems.filter(x=> {return x.item_id !== item.item_id;});
  }
  clause()
  {
    this.selectClause="";
    for (var x of this.selectedItems)
    {
      this.selectClause+=x["item_text"]+",";
    }
    this.selectClause=this.selectClause.substring(0, this.selectClause.length - 1);
    this.selectedItems=[];//imp
    this.next();
  }




}

