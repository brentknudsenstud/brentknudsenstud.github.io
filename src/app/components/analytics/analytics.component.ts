import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  tabledata = [{tableid: "1", tablename: "Customer Success"},
  {tableid: "2", tablename: "Sales"}, 
  {tableid: "3", tablename: "Finance"}]
  constructor() { }

  ngOnInit(): void {
  }

}
