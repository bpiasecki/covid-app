import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListModule } from './countries-list/countries-list.module';
import { MapModule } from './map/map.module';
import { DataBackendService } from './services/data-backend.service';
import { DataService } from './services/data.service';
import { TopojsonService } from './services/topojson.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    CountriesListModule,
    MapModule
  ],
  providers: [DataService, DataBackendService, TopojsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
