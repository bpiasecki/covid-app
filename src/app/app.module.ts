import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MapComponent } from './map/map.component';
import { DataBackendService } from './services/data-backend.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    MapComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    SimplebarAngularModule,
    NgxSpinnerModule,
    NgScrollbarModule,
    NgxChartsModule
  ],
  providers: [DataService, DataBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
