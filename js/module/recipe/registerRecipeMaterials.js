"use strict";

import { createHtmlElement } from "../createHtmlElement";

const MATERIALLIST = document.querySelector(".registerRecipe__materials__list");

let materialNumber = 1;

const getMaterialsLength = () => {
  const materials = document.querySelectorAll(".material");
  return materials.length;
};

const getmaterialElementInfo = () => {
  return {
    elementName: "material",
    elementTag: "li",
    elementAttributes: {
      class: "material",
      id: `matarialId_${materialNumber}`,
    },
  };
};

const getmaterialNameElementInfo = () => {
  return {
    elementName: "materialName",
    elementTag: "input",
    elementAttributes: {
      class: "material__name",
      type: "text",
    },
  };
};

const getmaterialAmountElementInfo = () => {
  return {
    elementName: "materialAmount",
    elementTag: "input",
    elementAttributes: {
      class: "material__amount",
      type: "text",
    },
  };
};

const getmaterialDeleteBtnElementInfo = () => {
  return {
    elementName: "materialDeleteBtn",
    elementTag: "button",
    elementAttributes: {
      class: "material__deleteBtn",
      type: "button",
      'data-material-id': `matarialId_${materialNumber}`
    },
    eventHandles: [
      {
        eventType: "click",
        eventHandle() {
          if (getMaterialsLength() <= 1) return;
          const item = document.getElementById(this.dataset.materialId);
          item.remove();
        },
      },
    ],
  };
};

const getmaterialDeleteBtnIoniconElementInfo = () => {
  return {
    elementName: "materialDeleteBtnIonicon",
    elementTag: "ion-icon",
    elementAttributes: {
      name: "trash-outline",
    },
  };
};

const createMaterialHtmlElement = () => {
  const material = createHtmlElement(getmaterialElementInfo());
  const materialName = createHtmlElement(getmaterialNameElementInfo());
  const materialAmount = createHtmlElement(getmaterialAmountElementInfo());
  const materialDeleteBtn = createHtmlElement(getmaterialDeleteBtnElementInfo());
  const materialDeleteBtnIonicon = createHtmlElement(getmaterialDeleteBtnIoniconElementInfo());

  materialDeleteBtn.appendChild(materialDeleteBtnIonicon);

  material.appendChild(materialName);
  material.appendChild(materialAmount);
  material.appendChild(materialDeleteBtn);

  MATERIALLIST.appendChild(material);

  materialNumber++;
};

// 最初は3つの入力欄を表示
const createThreeMaterial = () => {
  for (let i = 0; i < 3; i++) {
    createMaterialHtmlElement();
  }
};

const materialAddBtnClickHandle = (materialAddBtn) => {
  materialAddBtn.addEventListener("click", createMaterialHtmlElement);
};

export { createThreeMaterial, materialAddBtnClickHandle };
