import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { ChartModule } from 'angular-highcharts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CompareValidaterDirective } from './compare-validater.directive';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    CompareValidaterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    ChartModule,
    NgScrollbarModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
