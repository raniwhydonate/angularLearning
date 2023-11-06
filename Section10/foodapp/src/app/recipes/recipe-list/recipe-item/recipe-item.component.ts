import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipes;
  //@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
    //this.recipeSelected.emit();
  }
}
