// src/main.ts
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeItem } from './model/RecipeItem';
import { RecipeTemplate } from './templates/RecipeTemplate';

document.addEventListener('DOMContentLoaded', () => {
  const recipeCollection = new RecipeCollection();
  const recipeTemplate = new RecipeTemplate(recipeCollection);

  // Initialize the UI
  recipeTemplate.renderRecipes();

  // Handle form submission
  const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
    const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
    const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

    const ingredients = ingredientsInput.value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const newRecipe = new RecipeItem(
      titleInput.value,
      ingredients,
      instructionsInput.value
    );

    recipeCollection.addRecipe(newRecipe);
    recipeTemplate.renderRecipes();

    // Reset the form
    form.reset();
  });

  // Handle clear all recipes button
  const clearButton = document.getElementById('clearRecipesButton');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete all recipes?')) {
        recipeCollection.clearRecipes();
        recipeTemplate.renderRecipes();
      }
    });
  }
});