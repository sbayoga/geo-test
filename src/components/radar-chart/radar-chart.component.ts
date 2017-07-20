import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  @Input('legend') private legend;
  @Input('chart') private chart;
  constructor() { }

  ngOnInit() {
  }

  private hasValidLegendItemsConfig(): boolean {
    return this.legend 
      && Array.isArray(this.legend)
      && this.legend.length > 0;
  }

  private getLegendsItems(): Array<object>{
    return this.hasValidLegendItemsConfig() 
      ? this.legend
      : [];
  }
}
