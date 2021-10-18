import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import HeatmapModule from 'highcharts/modules/heatmap';
HeatmapModule(Highcharts);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinegraphComponent } from './linegraph/linegraph.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BargraphComponent } from './bargraph/bargraph.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import * as Highcharts from 'highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LinegraphComponent,
    PiechartComponent,
    BargraphComponent,
    HeatMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
