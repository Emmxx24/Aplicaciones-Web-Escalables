import { Component, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Content } from '../content/content';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css',
})
export class CountryCard {
  country = input<Country>({
      name: 'Afghanistan',
      capital: 'Kabul',
      region: 'Asia',
      population: 40218234,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'
    });
}
