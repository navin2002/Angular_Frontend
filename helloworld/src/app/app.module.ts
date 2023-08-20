import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { SomethingelseComponent } from './somethingelse/somethingelse.component';
import { ReportbuilderComponent } from './reportbuilder/reportbuilder.component';
import { DownloadserviceService } from './downloadservice.service';
const routes: Routes = [
  { path: "reportbuilder", component: ReportbuilderComponent },
  { path: "somethingelse", component: SomethingelseComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    SomethingelseComponent,
    ReportbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers:[DownloadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
