import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../shopping-list/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredientChangeSubscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSubscription = this.shoppingListService
      .ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => this.ingredients = ingredients
      )
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }

}
