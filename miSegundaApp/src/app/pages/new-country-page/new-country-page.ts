import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-new-country-page',
  imports: [ReactiveFormsModule],
  templateUrl: './new-country-page.html',
  styleUrl: './new-country-page.css',
})
export class NewCountryPage {
  regions: Country['region'][] = [
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
    'Africa'
  ];

  countryService = inject(CountryService);
  
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    capital: new FormControl('', [Validators.required]),
    region: new FormControl('Americas', [Validators.required]),
    population: new FormControl('', [Validators.required]),
    flag: new FormControl('', [Validators.required])
  })

  submit(): void{
    const {name, capital, region, population, flag} = this.form.value;

    if(this.form.valid){
      const newCountry : Country = {
        name,
        capital,
        region,
        population,
        flag
      }
      this.countryService.addCountry(newCountry);
      this.form.reset();
      alert("se guardo bien xd");
    }
  }
}
