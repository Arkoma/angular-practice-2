import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addMultipleIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients;
  }
}
