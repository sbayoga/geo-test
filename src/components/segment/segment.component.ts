import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  @Input('setup') private setup;

  constructor() { }

  ngOnInit() {
  }

  private isValidSetup(): boolean {
    return this.setup
      && Array.isArray(this.setup)
      && this.setup.length > 0;
  }

  public getConfig(): Array<object> {
    return this.isValidSetup() 
      ? this.setup 
      : [];
  }

  public getName(item): string { 
    return item.name || 'Untitled'; 
  }

  public getPopulation(item): number { 
    return item.population || 0; 
  }

  public getPopulationTag(item): string { 
    return item.population_tag || '';
  }

  public getAddress(item): string { 
    return item.address || ''; 
  }

  public getStyleSheet(item): string { 
    return item.color || '#009688';
  }

}
