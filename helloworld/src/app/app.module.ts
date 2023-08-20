import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { SomethingelseComponent } from './somethingelse/somethingelse.component';
import { ReportbuilderComponent } from './reportbuilder/reportbuilder.component';
import { DownloadserviceService } from './downloadservice.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageService } from './image.service';

const routes: Routes = [
  { path: "reportbuilder", component: ReportbuilderComponent },
  { path: "dashboardinsights", component: DashboardComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    SomethingelseComponent,
    ReportbuilderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers:[DownloadserviceService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
