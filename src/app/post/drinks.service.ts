import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Drink {
  idDrink?: string,
  strDrink: string,
  strAlcoholic: string,
  strInstructions: string,
  strDrinkThumb: string
}

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  }

  getDrinksById(id: number) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
