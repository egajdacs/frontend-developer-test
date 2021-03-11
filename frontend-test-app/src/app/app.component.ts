import { Component, OnInit } from '@angular/core';
import { DataService } from './_services/data.service';
import { faHome, faSync, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';

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
  success = faCheckCircle;
  error = faTimesCircle;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getItem().subscribe(data => {
      this.title = data.title;
      this.country = data.country;
      this.lastUpdated = formatDate(data.lastUpdated, 'medium', 'en-GB' );
      this.lastUpdatedBy = data.lastUpdatedBy;
      this.body = data.body;
    });

    this.dataService.getNotifications().subscribe(nots => {
      this.notifications = nots;
    })
  }
}
