import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

// const Exporting = require('highcharts/modules/exporting');
// Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent implements OnInit {

  public options: any = {
    chart: {
       type: 'bar'
    },
    accessibility: {
        description: '',
    },
    title: {
       text: 'Historic World Population by Region'
    },
    // subtitle: {
    //     text: 'Sources: Dummy data'
    // },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'medium'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'billion'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        },
        series: {
          stacking: 'normal'
      }
    },
    
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            '#FFFFFF',
        shadow: false
    },
    
    series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2],
        // stack: 'even'
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6],
        // stack: 'odd'
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31],
        // stack: 'even'
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40],
        // stack: 'odd'
    }, {
        name: 'Year 2020',
        data: [1416, 1101, 4486, 750, 45],
        // stack: 'even'
    }]
  }

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container', this.options);
  }

}
