import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
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
    getrecipes(){
        return this.recipes.slice();
    }
}