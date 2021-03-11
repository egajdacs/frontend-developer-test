import { Component, OnInit } from '@angular/core';
import { DataService } from './_services/data.service';
import { faHome, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  country: string;
  lastUpdatedBy: string;
  lastUpdated: string;
  body: string;

  notifications: any;

  home = faHome;
  sync = faSync;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getItem().subscribe(data => {
      console.log(data);
      this.title = data.title;
      this.country = data.country;
      this.lastUpdated = data.lastUpdated;
      this.lastUpdatedBy = data.lastUpdatedBy;
      this.body = data.body;
    });

    this.dataService.getNotifications().subscribe(nots => {
      console.log(nots);
      this.notifications = nots;
    })
  }
}
