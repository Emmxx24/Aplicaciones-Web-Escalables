import { inject, Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private _countries = signal<Country[]>([]);

  public countries = this._countries.asReadonly();

constructor(){
  this.fetchCountries();
}

  fetchCountries(): void {
    this.http.get<Country[]>('http://localhost:8081/api/countries').subscribe({
      next: (response: Country[]) => {
        this._countries.set(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  orderByName(): void {
    this._countries.update((_countries) =>
      [..._countries].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }

  orderByPopulation(): void {
    this._countries.update((_countries) =>
      [..._countries].sort((a, b) => b.population - a.population),
    );
  }

  addCountry(country: Country): void {
    this._countries.update((countries) => [...countries, country]);
  }
}
