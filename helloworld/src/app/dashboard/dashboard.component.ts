import { Component,ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';//in quotes
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import { HttpService } from '../http.service';

/*
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //@ViewChild("chart") chart: ChartComponent;


  column:String="";//column to be grouped-yaxis
  groupby="";//x axis
  aggregate="";//aggregate function
  url=""
  isimageloading=true;
  imageToShow: any;
  /*
  public chartOptions= {
    labels:["IT","MAths","Finance"],
    series: [10,20,30],
    chart: {
      //height: 350,
       type: 'donut'
    },
    title: {
      text: "Pie Chart"
    }

  };
  */
  constructor(private httpClient:HttpService,private imageService:ImageService)
  {


  }
  /*
  public updateSeries() {
    this.chartOptions.series = [23, 44, 1];
  }
  */
  fetchImage(form:NgForm)
  {
    this.url="http://localhost:3000/getimage/"+this.groupby+"/"+this.aggregate+"("+this.column+")";
    this.isimageloading = false;
    //this.getImageFromService(this.url);

  }

  getImageFromService(yourImageUrl) {
    this.isimageloading = true;

    this.imageService.getImage(yourImageUrl).subscribe(
      {
        next: (data)=>{this.createImageFromBlob(data);
        this.isimageloading = false;}
        ,
        error:(err)=>{
          this.isimageloading = false;
      console.log(err);
        }
      }
    )



}



createImageFromBlob(image) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}



	onGroupSelect(value:string): void {
		this.groupby = value;
	}
  onColumnSelect(value:string): void {
		this.column = value;
	}
  onAggregateSelect(value:string): void {
		this.aggregate = value;
	}



}
