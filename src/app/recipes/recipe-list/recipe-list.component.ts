import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Idli',
      'Breakfast',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg'
    ),
    new Recipe(
      'Dosa',
      'Breakfast',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe.jpg.webp'
    ),
  ];
}
