import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { SomethingelseComponent } from './somethingelse/somethingelse.component';
import { ReportbuilderComponent } from './reportbuilder/reportbuilder.component';
import { DownloadserviceService } from './downloadservice.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageService } from './image.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import {TokenInterceptorService} from './token-interceptor.service'
import {authGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: SomethingelseComponent },
  { path: "reportbuilder", component: ReportbuilderComponent,canActivate: [authGuard] },
  { path: "dashboardinsights", component: DashboardComponent ,canActivate: [authGuard]},
  { path: "login", component: LoginComponent },
  {path :"register",component:RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SomethingelseComponent,
    ReportbuilderComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers:[DownloadserviceService,ImageService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
