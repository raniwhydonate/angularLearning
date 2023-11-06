import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  //@Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] 
  // = [
  //   new Recipes(
  //     'A Test Receipe',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
  //   ),
  //   new Recipes(
  //     'A Test Receipe1',
  //     'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
  //   ),
  //   new Recipes(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',),
  //   new Recipes('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',)
    
  // ];

  constructor(private recipeServiece:RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeServiece.getRecipes();
  }

  // onRecipeSelected(recipe: Recipes) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
