import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Lasagna', 'Probably the best Pasta from Italy', 'https://images8.alphacoders.com/735/thumb-1920-735101.jpg'),
    new Recipe('Bolognese', 'Add carrots and tomato sauce', 'https://images4.alphacoders.com/100/thumb-1920-1009039.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
