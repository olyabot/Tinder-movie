import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { CityService } from './city.service';
import { Cities, Cinemas } from './city';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  cities: Cities[];
  cinemas: Cinemas[];
  
  selectedCity: Cities = new Cities('','');
  selectedCinema = this.cinemas;

  payLoad = '';

  cityControl = new FormControl('', [Validators.required]);
  cinemaControl = new FormControl('', [Validators.required]);

  constructor(private CityService: CityService) { }

  ngOnInit() {
    this.cities = this.CityService.getCities();
    this.changeCity(this.selectedCity.city);
  }

  changeCity(city) {
    this.cinemas = this.CityService.getCinemas().filter((item) => item.city == city);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(`city=${this.selectedCity}&cinema=${this.selectedCinema}`);
  }
}

