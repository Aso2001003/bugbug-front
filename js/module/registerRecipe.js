"use strict";
import { recipeImagePreview } from "./recipe/registerRecipeImage";
import { createThreeMaterial, materialAddBtnClickHandle } from "./recipe/registerRecipeMaterials";
import { insertTwoHowto, howtoAddBtnClickHandle } from "./recipe/registerRecipeHowto";

/* レシピ登録 : レシピ画像 => プレビュー */
const registerRecipeImagePreviewSet = () => {
  recipeImagePreview();
};

/* レシピ登録 : 材料 => 追加・削除 */
const registerRecipeMaterialSet = () => {
  createThreeMaterial();
  const materialAddBtn = document.querySelector(".material__addBtn");
  materialAddBtnClickHandle(materialAddBtn);
};

/* レシピ登録 : 作り方 => 追加・削除 */
const registerRecipeHowtoSet = () => {
  insertTwoHowto();
  const howtoAddBtn = document.querySelector(".howto__addBtn");
  howtoAddBtnClickHandle(howtoAddBtn);
};

export { registerRecipeImagePreviewSet, registerRecipeMaterialSet, registerRecipeHowtoSet };
