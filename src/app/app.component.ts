import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highChart';
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Average Temprature"
    },
    xAxis: {
      title: {
        text: 'Tokyo'
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Temprature"
      }
    },
    series: [{
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9],
      type: 'line'
    },
    {
      data: [8.0, 5.9, 7.5, 5.5, 21.2, 41.5, 20.2, 4.4, 1.3, 6.0, 11.4, 14.9],
      type: 'line'
    }
  ]
  }
}
