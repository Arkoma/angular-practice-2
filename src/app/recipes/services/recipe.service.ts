import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from '../../models/recipe.model'
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mac n Cheese',
      'Easy mac and cheese for two',
      'https://upload.wikimedia.org/wikipedia/commons/8/8f/Macaroni_and_cheese_%282%29_%28cropped%29.jpg',
      [
        new Ingredient ('12 ounce package of macaroni', 1),
        new Ingredient ('egg', 1),
        new Ingredient ('cups of milk', 2),
        new Ingredient ('tablespoons of butter, melted', 2),
        new Ingredient ('cups shredded Cheddar Cheese', 3),
      ]
      ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('eye of newt', 1),
      ]
      ),
  ];
  constructor(private shoppingService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addMultipleIngredientsToList(ingredients);
  }
}
