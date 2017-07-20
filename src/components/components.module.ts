import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SegmentComponent } from './segment/segment.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    SegmentComponent,
    RadarChartComponent
  ],
  exports: [
    SegmentComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
