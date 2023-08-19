import { Component } from '@angular/core';


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
  onSubmitQuery( some :{ cols :string , rows:string })
  {
    console.warn("done");
  }

}
