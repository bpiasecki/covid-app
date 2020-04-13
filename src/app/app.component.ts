import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  //deaths, recovered and cases palette
  colorScheme = {
    domain: ['#992e24', '#83b582', '#ff6337']
  };

  constructor(private dataService: DataService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.subscriptions.add(this.dataService.$dataLoaded.subscribe(() => {
      this.spinner.hide();
    }));
  }

  ngOnInit(): void {
    this.dataService.init();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
