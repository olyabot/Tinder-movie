import { Injectable } from '@angular/core';

import { CITIES, CINEMAS } from './list-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities() {
    return CITIES;
  }

  getCinemas() {
   return CINEMAS;
  }
}
