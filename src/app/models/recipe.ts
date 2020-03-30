import {Ingredient} from './ingredient';

export interface Recipe {
  title: string;
  ingredients: Array<Ingredient>;
  instructions?: string;
}
