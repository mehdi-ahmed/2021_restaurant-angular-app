import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Lasagna',
      'Probably the best Pasta from Italy',
      'https://images8.alphacoders.com/735/thumb-1920-735101.jpg',
      [
        new Ingredient('Meat', 100),
        new Ingredient('Pasta', 7),
        new Ingredient('Cheese', 200)
      ]),
    new Recipe('Bolognese',
      'Add carrots and tomato sauce',
      'https://images4.alphacoders.com/100/thumb-1920-1009039.jpg',
      [
        new Ingredient('Meat', 100),
        new Ingredient('Pasta', 7),
        new Ingredient('Tomato', 300),
        new Ingredient('Carrots', 400)
      ])
  ];

  // new Array, copy of the original one
  getRecipes() {
    return this.recipes.slice();
  }

  getSelectedRecipe() {
    return this.recipeSelected;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index]; // return a copy with slice
  }

}
