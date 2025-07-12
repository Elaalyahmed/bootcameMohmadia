// src/model/RecipeCollection.ts
import { RecipeItem } from './RecipeItem';

// Define an interface for the recipe data structure
interface RecipeData {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
}

export class RecipeCollection {
  private recipes: RecipeItem[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.toggleFavorite();
      this.saveToLocalStorage();
    }
  }

  getRecipes(): RecipeItem[] {
    return [...this.recipes];
  }

  clearRecipes(): void {
    this.recipes = [];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  private loadFromLocalStorage(): void {
    const recipesJson = localStorage.getItem('recipes');
    if (recipesJson) {
      const recipesData: RecipeData[] = JSON.parse(recipesJson);
      this.recipes = recipesData.map(recipeData => {
        const recipe = new RecipeItem(
          recipeData.title,
          recipeData.ingredients,
          recipeData.instructions,
          recipeData.isFavorite
        );
        recipe.id = recipeData.id; // Preserve the original ID
        return recipe;
      });
    }
  }
}