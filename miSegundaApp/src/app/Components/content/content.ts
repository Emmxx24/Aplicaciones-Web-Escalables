import { Component, inject, OnInit, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryCard } from '../country-card/country-card';
import { Controls } from '../controls/controls';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-content',
  imports: [CountryCard, Controls],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
  // public country = signal<Country>({
  //   name: 'Argentina',
  //   capital: 'Buenos Aires',
  //   region: 'Americas',
  //   population: 45000000,
  //   flag: 'https://flagcdn.com/w320/ar.png',
  // });

  countryService = inject(CountryService);

  countries = this.countryService.countries;

  orderByName(): void {
    this.countryService.orderByName();
  }

  orderByPopulation(): void {
    this.countryService.orderByPopulation();
  }

  ngOnInit(): void {
    this.countryService.fetchCountries();
  }
}
