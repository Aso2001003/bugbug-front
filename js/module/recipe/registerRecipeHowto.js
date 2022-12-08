"use strict";

import { createHtmlElement } from "../createHtmlElement";
import { imageInputHandle } from "../imagePreview";

const howtoList = document.querySelector(".registerRecipe__howto__list");

let howtoNumber = 1;

const getHowtosLength = () => {
  const howtos = document.querySelectorAll(".howto");
  return howtos.length;
};

/* El => Elementの略 */

const getHowtoElInfo = () => {
  return {
    elementName: "howto",
    elementTag: "div",
    elementAttributes: {
      class: "howto",
      id: `howtoId_${howtoNumber}`,
    },
  };
};

const getHowtoActionElInfo = () => {
  return {
    elementName: "howto_action",
    elementTag: "div",
    elementAttributes: {
      class: "howto__action",
    },
  };
};

const getHowtoNumElInfo = () => {
  return {
    elementName: "howto_num",
    elementTag: "span",
    elementAttributes: {
      class: "howto__num",
    },
  };
};

const getHowtoDeleteBtnElInfo = () => {
  return {
    elementName: "howtoDeleteBtn",
    elementTag: "button",
    elementAttributes: {
      class: "howto__deleteBtn",
      type: "button",
      "data-howto-id": `howtoId_${howtoNumber}`,
    },
    eventHandles: [
      {
        eventType: "click",
        eventHandle() {
          if (getHowtosLength() <= 1) return;
          const item = document.getElementById(this.dataset.howtoId);
          item.remove();
          const howtos = document.querySelectorAll(".howto");
          for(let [index, el] of howtos.entries()) {
            const howtoNum = el.firstElementChild.firstElementChild;
            howtoNum.textContent = index + 1;
          }
        },
      },
    ],
  };
};

const getHowtoDeleteBtnIoniconElInfo = () => {
  return {
    elementName: "howtoDeleteBtnIonicon",
    elementTag: "ion-icon",
    elementAttributes: {
      name: "trash-outline",
    },
  };
};

const getHowtoItemElInfo = () => {
  return {
    elementName: "howtoItem",
    elementTag: "div",
    elementAttributes: {
      class: "howto__item",
    },
  };
};

const getHowtoImageInputLabelElInfo = () => {
  return {
    elementName: "howtoImageInputLabel",
    elementTag: "label",
    elementAttributes: {
      class: "howto__image__input__label",
    },
  };
};

const getHowtoImageInputLabelTextElInfo = () => {
  return {
    elementName: "howtoImageInputLabelText",
    elementTag: "span",
    elementAttributes: {
      class: "howto__image__input__label__text",
    },
  };
};

const getHowtoImageInputElInfo = () => {
  return {
    elementName: "howtoImageInput",
    elementTag: "input",
    elementAttributes: {
      class: "howto__image__input",
      type: "file",
      accept: "image/jpeg,image/png",
    },
    eventHandles: [
      {
        eventType: "change",
        eventHandle() {
          const howtoImage = this.parentNode.nextSibling;
          howtoImage.style.height = "100px";
          const howtoImageDeleteBtn = howtoImage.lastChild;
          howtoImageDeleteBtn.classList.remove('hidden');
        }
      }
    ]
  };
};

const getHowtoImageElInfo = () => {
  return {
    elementName: "howtoImage",
    elementTag: "div",
    elementAttributes: {
      class: "howto__image",
      style: "height: 40px",
    },
  };
};

const getHowtoImagePreviewElInfo = () => {
  return {
    elementName: "howtoImagePreview",
    elementTag: "img",
    elementAttributes: {
      class: "howto__image__preview",
    },
  };
};

const getHowtoImageDeleteBtnElInfo = () => {
  return {
    elementName: "howtoImageDeleteBtn",
    elementTag: "button",
    elementAttributes: {
      class: "howto__image__deleteBtn hidden",
      type: "button",
    },
    eventHandles: [
      {
        eventType: "click",
        eventHandle() {
          const howtoImage = this.parentNode;
          const howtoImagePreview = this.previousSibling;
          howtoImagePreview.src = "";
          const howtoImageInputLabelText = howtoImage.previousSibling.firstChild;
          howtoImageInputLabelText.textContent = "画像を選択";
          howtoImage.style.height = "40px";
          const howtoImageInput = howtoImageInputLabelText.nextSibling;
          howtoImageInput.value = "";
          this.classList.add('hidden');
        }
      }
    ]
  };
};

const getHowtoImageDeleteBtnIoniconElInfo = () => {
  return {
    elementName: "howtoImageDeleteBtnIonicon",
    elementTag: "ion-icon",
    elementAttributes: {
      name: "trash-outline",
    },
  };
};

const getHowtoTextElInfo = () => {
  return {
    elementName: "howtoText",
    elementTag: "textarea",
    elementAttributes: {
      class: 'howto__text',
      placeholder: "作り方を入力"
    },
  };
};

const createHowtoActionEl = () => {
  const howtoAction = createHtmlElement(getHowtoActionElInfo());

  const howtoNum = createHtmlElement(getHowtoNumElInfo());
  howtoNum.textContent = getHowtosLength() + 1;
  howtoAction.appendChild(howtoNum);

  const howtoDeleteBtn = createHtmlElement(getHowtoDeleteBtnElInfo());
  const howtoDeleteBtnIonicon = createHtmlElement(getHowtoDeleteBtnIoniconElInfo());
  howtoDeleteBtn.appendChild(howtoDeleteBtnIonicon);
  howtoAction.appendChild(howtoDeleteBtn);

  return howtoAction;
};

const createHowtoItemEl = () => {
  const howtoItem = createHtmlElement(getHowtoItemElInfo());

  const howtoImageInputLabel = createHtmlElement(getHowtoImageInputLabelElInfo());
  const howtoImageInputLabelText = createHtmlElement(getHowtoImageInputLabelTextElInfo());
  howtoImageInputLabelText.textContent = "画像を選択";
  howtoImageInputLabel.appendChild(howtoImageInputLabelText);
  const howtoImageInput = createHtmlElement(getHowtoImageInputElInfo());
  howtoImageInputLabel.appendChild(howtoImageInput);

  const howtoImage = createHtmlElement(getHowtoImageElInfo());
  const howtoImagePreview = createHtmlElement(getHowtoImagePreviewElInfo());
  const howtoImageDeleteBtn = createHtmlElement(getHowtoImageDeleteBtnElInfo());
  const howtoImageDeleteBtnIonicon = createHtmlElement(getHowtoImageDeleteBtnIoniconElInfo());
  howtoImageDeleteBtn.appendChild(howtoImageDeleteBtnIonicon);

  howtoImage.appendChild(howtoImagePreview);
  howtoImage.appendChild(howtoImageDeleteBtn);

  imageInputHandle(howtoImageInput, howtoImageInputLabelText, howtoImagePreview);

  howtoItem.appendChild(howtoImageInputLabel);
  howtoItem.appendChild(howtoImage);

  const howtoText = createHtmlElement(getHowtoTextElInfo());

  howtoItem.appendChild(howtoText);

  return howtoItem;
};

const insertHowto = () => {
  const howto = createHtmlElement(getHowtoElInfo());
  const howtoAction = createHowtoActionEl();
  const howtoItem = createHowtoItemEl();
  howto.appendChild(howtoAction);
  howto.appendChild(howtoItem);

  howtoList.appendChild(howto);

  howtoNumber++;
};

// 最初は2つの入力欄を表示
const insertTwoHowto = () => {
  for (let i = 0; i < 2; i++) {
    insertHowto();
  }
};

const howtoAddBtnClickHandle = (materialAddBtn) => {
  materialAddBtn.addEventListener("click", insertHowto);
};

export { insertTwoHowto, howtoAddBtnClickHandle };
