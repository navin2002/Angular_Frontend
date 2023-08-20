import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//in quotes
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  column:String="";//column to be grouped-yaxis
  groupby="";//x axis
  aggregate="";//aggregate function
  url=""
  isimageloading=true;
  imageToShow: any;
  constructor(private httpClient:HttpClient,private imageService:ImageService)
  {

  }
  fetchImage(form:NgForm)
  {
    this.url="http://localhost:3000/getimage/"+this.groupby+"/"+this.aggregate+"("+this.column+")";
    this.getImageFromService(this.url);

  }

  getImageFromService(yourImageUrl) {
    this.isimageloading = true;

    this.imageService.getImage(yourImageUrl).subscribe(data => {
      this.createImageFromBlob(data);
      this.isimageloading = false;
    }, error => {
      this.isimageloading = false;
      console.log(error);
    });

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
