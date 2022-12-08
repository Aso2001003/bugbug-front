"use strict";

import { imageInputHandle  } from "../imagePreview";

const recipeImagePreview = () => {
  const recipeImageInput = document.querySelector(".registerRecipe__image__input");
  const recipeImageInputLabelText = document.querySelector(".registerRecipe__image__input__label__text");
  const recipeImagePreview = document.querySelector(".registerRecipe__image__preview");
  imageInputHandle(recipeImageInput, recipeImageInputLabelText, recipeImagePreview);
}

export { recipeImagePreview };
