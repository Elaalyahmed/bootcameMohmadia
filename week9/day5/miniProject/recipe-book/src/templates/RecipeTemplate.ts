// src/templates/RecipeTemplate.ts
import { RecipeCollection } from '../model/RecipeCollection';
import { RecipeItem } from '../model/RecipeItem';

export class RecipeTemplate {
  private recipeCollection: RecipeCollection;
  private recipeContainer: HTMLElement;

  constructor(recipeCollection: RecipeCollection, containerId: string = 'recipeContainer') {
    this.recipeCollection = recipeCollection;
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with ID ${containerId} not found`);
    }
    this.recipeContainer = container;
  }

  renderRecipes(): void {
    this.recipeContainer.innerHTML = '';
    const recipes = this.recipeCollection.getRecipes();

    recipes.forEach(recipe => {
      const recipeCard = this.createRecipeCard(recipe);
      this.recipeContainer.appendChild(recipeCard);
    });
  }

  private createRecipeCard(recipe: RecipeItem): HTMLElement {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.dataset.id = recipe.id;

    const title = document.createElement('h3');
    title.textContent = recipe.title;
    recipeCard.appendChild(title);

    const favoriteButton = document.createElement('button');
    favoriteButton.className = 'favorite-button';
    favoriteButton.innerHTML = recipe.isFavorite ? '★' : '☆';
    favoriteButton.addEventListener('click', () => {
      this.recipeCollection.toggleFavorite(recipe.id);
      this.renderRecipes();
    });
    recipeCard.appendChild(favoriteButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      this.recipeCollection.removeRecipe(recipe.id);
      this.renderRecipes();
    });
    recipeCard.appendChild(deleteButton);

    const toggleDetails = document.createElement('button');
    toggleDetails.className = 'toggle-details';
    toggleDetails.textContent = 'Show Details';
    recipeCard.appendChild(toggleDetails);

    const details = document.createElement('div');
    details.className = 'recipe-details';
    details.style.display = 'none';

    const ingredientsTitle = document.createElement('h4');
    ingredientsTitle.textContent = 'Ingredients:';
    details.appendChild(ingredientsTitle);

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    details.appendChild(ingredientsList);

    const instructionsTitle = document.createElement('h4');
    instructionsTitle.textContent = 'Instructions:';
    details.appendChild(instructionsTitle);

    const instructions = document.createElement('p');
    instructions.textContent = recipe.instructions;
    details.appendChild(instructions);

    recipeCard.appendChild(details);

    toggleDetails.addEventListener('click', () => {
      if (details.style.display === 'none') {
        details.style.display = 'block';
        toggleDetails.textContent = 'Hide Details';
      } else {
        details.style.display = 'none';
        toggleDetails.textContent = 'Show Details';
      }
    });

    return recipeCard;
  }
}