import { Component } from '@angular/core';

import { HttpService } from './_services/http.srv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent {
  public segmentsConfig = [ 
    {color: '#EF5350', name: 'REFERENCE AREA', quantity: 9.084, quantity_tag: 'Population', address1: 'Calle Mar Adriático, 12, 28221', address2: 'Majadahonda, Madrid, Spain'},
    {color: '#FFA726', name: 'COMPARED AREA 1', quantity: 1.523, quantity_tag: 'Population', address1: 'Calle de la Virgen de los Peligros, 20-22', address2: '28410 Manzares el Real, Madrid Spain'},
    {color: '#26A69A', name: 'COMPARED AREA 2', quantity: 5.759, quantity_tag: 'Population', address1: 'Calle Volver a Empezar, 4, 28018', address2: 'Madrid, Madrid, Spain'}
  ];

  private areas: Array<object> = [];
  private colours: Array<string> = ['#EF5350', '#FFA726', '#26A69A'];

  constructor(private http: HttpService) {
    this.getAreasInformation();
  }

  private existsAndIsArrayAndHaveLength(data: any): boolean {
    return data 
      && Array.isArray(data) 
      && data.length > 0; 
  }
 
  public legendChartConfig(): Array<object> {
    const config = [];
    if(this.existsAndIsArrayAndHaveLength(this.areas)) {
      let key = 0;
      for(const item of this.areas) {
        config.push({
          color: item['variables']['is_reference'] 
            ? this.colours[0] 
            : this.colours[key],
          name: item['variables']['is_reference'] 
            ? 'REFERENCE AREA'
            : 'COMPARED AREA ' + key
        });
        key++;
      }
    }
    return config;
  }

  public chartConfig(): object {
    return {};
  }

  public getSegmentsConfig(): Array<object> {
    if(this.existsAndIsArrayAndHaveLength(this.areas)) {
      let key = 0;
      const config = [];

      for(const item of this.areas) {
        config.push(Object.assign({
          address: item['address'],
          population: item['variables']['population'],
          population_tag: 'population'
        }, this.legendChartConfig()[key++]))
      }
      return config;
    }
  }

  private getAreasInformation(): void {
    this.http.get('/api/areas')
    .subscribe( 
      (success) => this.manageSuccessAreasInfo(success), 
      (error) => this.manageErrorAreasInfo(error), 
    );
  }

  private manageSuccessAreasInfo(response: Response | any): void{
    console.log(response);
    this.existsAndIsArrayAndHaveLength(response)
        ? this.areas = response
        : this.manageErrorAreasInfo(response);
  }

  private manageErrorAreasInfo(response: Response): void{
    console.log(response); 
  }
}
