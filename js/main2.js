/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_registerRecipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/registerRecipe */ \"./js/module/registerRecipe.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  const header = document.querySelector(\".header\");\r\n  const siteExpl = document.querySelector(\".siteExpl\");\r\n  const logo = document.querySelector(\".logo\");\r\n  const insectFilterBtn = document.querySelector(\".insectFilterBtn\");\r\n  const navBtns = document.querySelector(\".navBtns\");\r\n  const navBtns__btn = document.querySelectorAll(\".navBtns__btn\");\r\n  const navBtns__btn__text = document.querySelectorAll(\".navBtns__btn__text\");\r\n  const main = document.querySelector(\".main\");\r\n  const headerElemnts = [header, siteExpl, logo, insectFilterBtn, navBtns, ...navBtns__btn, ...navBtns__btn__text, main];\r\n\r\n  // トップページでのみスクロール処理用クラスを操作\r\n  const indexPaths = [\"/bugbug/\", \"/bugbug/index.html\"];\r\n  if (indexPaths.includes(location.pathname)) {\r\n    for (let el of headerElemnts) {\r\n      el.classList.remove(\"js-headerScrollOn\");\r\n    }\r\n  }\r\n\r\n  // ログイン・アカウント作成ページはナビボタンを非表示\r\n  const headerHiddenPaths = [\"/bugbug/signup.html\", \"/bugbug/login.html\"];\r\n  if (headerHiddenPaths.includes(location.pathname)) {\r\n    navBtns.style.display = \"none\";\r\n    insectFilterBtn.style.display = \"none\";\r\n  }\r\n\r\n  /* スクロール時ヘッダー処理 */\r\n  const scrollHeaderHandle = () => {\r\n    // トップページでのみスクロール処理\r\n    if (!indexPaths.includes(location.pathname)) return;\r\n    if (set_position > document.documentElement.scrollTop) {\r\n      for (let el of headerElemnts) {\r\n        el.classList.remove(\"js-headerScrollOn\");\r\n      }\r\n    } else {\r\n      if (!header.classList.contains(\"js-headerScrollOn\")) {\r\n        for (let el of headerElemnts) {\r\n          el.classList.add(\"js-headerScrollOn\");\r\n        }\r\n      }\r\n    }\r\n  };\r\n\r\n  let set_position = 10;\r\n  window.addEventListener(\"scroll\", scrollHeaderHandle);\r\n\r\n  /* 虫フィルターボタンクリック処理 */\r\n  const insectFilter = document.querySelector(\".insectFilterBtn__input\");\r\n  const recipeImgArray = document.querySelectorAll(\".recomRecipe__list__item__img\");\r\n  let recipeImgArrayLength = recipeImgArray.length;\r\n  if (recipeImgArrayLength > 0) {\r\n    for (let i = 0; i < recipeImgArrayLength; i++) {\r\n      recipeImgArray[i].originImg = recipeImgArray[i].firstElementChild.src;\r\n    }\r\n  }\r\n  let filterStarte = false;\r\n  insectFilter.addEventListener(\"click\", () => {\r\n    filterStarte = !filterStarte;\r\n    for (let i = 0, size = recipeImgArray.length; i < size; i++) {\r\n      if (filterStarte) {\r\n        recipeImgArray[i].firstElementChild.src = \"../img/filter.png\";\r\n      } else {\r\n        recipeImgArray[i].firstElementChild.src = recipeImgArray[i].originImg;\r\n      }\r\n    }\r\n  });\r\n\r\n  /* ダイアログメソッド */\r\n  const addClassHidden = (el) => {\r\n    el.classList.add(\"hidden\");\r\n  };\r\n  const removeClassHidden = (el) => {\r\n    el.classList.remove(\"hidden\");\r\n  };\r\n\r\n  /* 検索フォームJS処理 */\r\n  const searchFormCover = document.querySelector(\".search__form__cover\");\r\n  const searchFormClose = document.querySelector(\".search__form__close\");\r\n  const searchForm = document.querySelector(\".search__form\");\r\n  const nav_searchRecipe = document.querySelector(\".navBtns__btn--searchRecipe\");\r\n\r\n  nav_searchRecipe.addEventListener(\"click\", () => {\r\n    removeClassHidden(searchFormCover);\r\n    removeClassHidden(searchForm);\r\n  });\r\n  searchFormCover.addEventListener(\"click\", () => {\r\n    addClassHidden(searchFormCover);\r\n    addClassHidden(searchForm);\r\n  });\r\n  searchFormClose.addEventListener(\"click\", () => {\r\n    addClassHidden(searchFormCover);\r\n    addClassHidden(searchForm);\r\n  });\r\n\r\n  /* 登録時確認ダイアログ */\r\n  const confirmPaths = [\"/sinup/form\", \"/sinup\"];\r\n  if (confirmPaths.includes(location.pathname)) {\r\n    const confirmCover = document.querySelector(\".confirm__cover\");\r\n    const confirmClose = document.querySelector(\".confirm__btns__btn--no\");\r\n    const confirmDiv = document.querySelector(\".confirm\");\r\n    const confirmOpen = document.querySelector(\".confirm__open\");\r\n\r\n    confirmOpen.addEventListener(\"click\", () => {\r\n      removeClassHidden(confirmCover);\r\n      removeClassHidden(confirmDiv);\r\n    });\r\n    confirmClose.addEventListener(\"click\", () => {\r\n      addClassHidden(confirmCover);\r\n      addClassHidden(confirmDiv);\r\n    });\r\n  }\r\n\r\n  /* お気に入りボタンクリック処理(仮) */\r\n  const hearts = document.querySelectorAll(\".heartBtn\");\r\n  for (let el of hearts) {\r\n    el.addEventListener(\"click\", () => {\r\n      const ionicon = el.firstElementChild;\r\n      const heartNum = el.lastElementChild;\r\n      if (ionicon.name === \"heart\") {\r\n        ionicon.name = \"heart-outline\";\r\n        heartNum.textContent--;\r\n      } else {\r\n        ionicon.name = \"heart\";\r\n        heartNum.textContent++;\r\n      }\r\n    });\r\n  }\r\n});\r\n\r\n\r\n(0,_module_registerRecipe__WEBPACK_IMPORTED_MODULE_0__.registerRecipeImagePreviewSet)();\r\n(0,_module_registerRecipe__WEBPACK_IMPORTED_MODULE_0__.registerRecipeMaterialSet)();\r\n(0,_module_registerRecipe__WEBPACK_IMPORTED_MODULE_0__.registerRecipeHowtoSet)();\n\n//# sourceURL=webpack://bugbug/./js/index.js?");

/***/ }),

/***/ "./js/module/createHtmlElement.js":
/*!****************************************!*\
  !*** ./js/module/createHtmlElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n\r\n\r\nconst createHtmlElement = (elementInfo) => {\r\n  const element = document.createElement(elementInfo.elementTag);\r\n  \r\n  for (let [attribute, value] of Object.entries(elementInfo.elementAttributes)) {\r\n    element.setAttribute(attribute, value);\r\n  }\r\n\r\n  if (elementInfo.eventHandles != undefined) {\r\n    for (let eventInfo of elementInfo.eventHandles) {\r\n      element.addEventListener(eventInfo.eventType, eventInfo.eventHandle);\r\n    }\r\n  }\r\n\r\n  return element;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/createHtmlElement.js?");

/***/ }),

/***/ "./js/module/imagePreview.js":
/*!***********************************!*\
  !*** ./js/module/imagePreview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageInputHandle\": () => (/* binding */ imageInputHandle)\n/* harmony export */ });\nconst imageInputHandle = (imageInput, imageInputLabelText, imagePreview) => {\r\n  imageInput.addEventListener('change', () => {\r\n    const [file] = event.target.files;\r\n    if (file) {\r\n      imagePreview.setAttribute(\"src\", URL.createObjectURL(file));\r\n      imageInputLabelText.textContent = \"画像を変更\";\r\n    }\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/imagePreview.js?");

/***/ }),

/***/ "./js/module/recipe/registerRecipeHowto.js":
/*!*************************************************!*\
  !*** ./js/module/recipe/registerRecipeHowto.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"howtoAddBtnClickHandle\": () => (/* binding */ howtoAddBtnClickHandle),\n/* harmony export */   \"insertTwoHowto\": () => (/* binding */ insertTwoHowto)\n/* harmony export */ });\n/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createHtmlElement */ \"./js/module/createHtmlElement.js\");\n/* harmony import */ var _imagePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imagePreview */ \"./js/module/imagePreview.js\");\n\r\n\r\n\r\n\r\n\r\nconst howtoList = document.querySelector(\".registerRecipe__howto__list\");\r\n\r\nlet howtoNumber = 1;\r\n\r\nconst getHowtosLength = () => {\r\n  const howtos = document.querySelectorAll(\".howto\");\r\n  return howtos.length;\r\n};\r\n\r\n/* El => Elementの略 */\r\n\r\nconst getHowtoElInfo = () => {\r\n  return {\r\n    elementName: \"howto\",\r\n    elementTag: \"div\",\r\n    elementAttributes: {\r\n      class: \"howto\",\r\n      id: `howtoId_${howtoNumber}`,\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoActionElInfo = () => {\r\n  return {\r\n    elementName: \"howto_action\",\r\n    elementTag: \"div\",\r\n    elementAttributes: {\r\n      class: \"howto__action\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoNumElInfo = () => {\r\n  return {\r\n    elementName: \"howto_num\",\r\n    elementTag: \"span\",\r\n    elementAttributes: {\r\n      class: \"howto__num\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoDeleteBtnElInfo = () => {\r\n  return {\r\n    elementName: \"howtoDeleteBtn\",\r\n    elementTag: \"button\",\r\n    elementAttributes: {\r\n      class: \"howto__deleteBtn\",\r\n      type: \"button\",\r\n      \"data-howto-id\": `howtoId_${howtoNumber}`,\r\n    },\r\n    eventHandles: [\r\n      {\r\n        eventType: \"click\",\r\n        eventHandle() {\r\n          if (getHowtosLength() <= 1) return;\r\n          const item = document.getElementById(this.dataset.howtoId);\r\n          item.remove();\r\n          const howtos = document.querySelectorAll(\".howto\");\r\n          for(let [index, el] of howtos.entries()) {\r\n            const howtoNum = el.firstElementChild.firstElementChild;\r\n            howtoNum.textContent = index + 1;\r\n          }\r\n        },\r\n      },\r\n    ],\r\n  };\r\n};\r\n\r\nconst getHowtoDeleteBtnIoniconElInfo = () => {\r\n  return {\r\n    elementName: \"howtoDeleteBtnIonicon\",\r\n    elementTag: \"ion-icon\",\r\n    elementAttributes: {\r\n      name: \"trash-outline\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoItemElInfo = () => {\r\n  return {\r\n    elementName: \"howtoItem\",\r\n    elementTag: \"div\",\r\n    elementAttributes: {\r\n      class: \"howto__item\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoImageInputLabelElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImageInputLabel\",\r\n    elementTag: \"label\",\r\n    elementAttributes: {\r\n      class: \"howto__image__input__label\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoImageInputLabelTextElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImageInputLabelText\",\r\n    elementTag: \"span\",\r\n    elementAttributes: {\r\n      class: \"howto__image__input__label__text\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoImageInputElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImageInput\",\r\n    elementTag: \"input\",\r\n    elementAttributes: {\r\n      class: \"howto__image__input\",\r\n      type: \"file\",\r\n      accept: \"image/jpeg,image/png\",\r\n    },\r\n    eventHandles: [\r\n      {\r\n        eventType: \"change\",\r\n        eventHandle() {\r\n          const howtoImage = this.parentNode.nextSibling;\r\n          howtoImage.style.height = \"100px\";\r\n          const howtoImageDeleteBtn = howtoImage.lastChild;\r\n          howtoImageDeleteBtn.classList.remove('hidden');\r\n        }\r\n      }\r\n    ]\r\n  };\r\n};\r\n\r\nconst getHowtoImageElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImage\",\r\n    elementTag: \"div\",\r\n    elementAttributes: {\r\n      class: \"howto__image\",\r\n      style: \"height: 40px\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoImagePreviewElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImagePreview\",\r\n    elementTag: \"img\",\r\n    elementAttributes: {\r\n      class: \"howto__image__preview\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoImageDeleteBtnElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImageDeleteBtn\",\r\n    elementTag: \"button\",\r\n    elementAttributes: {\r\n      class: \"howto__image__deleteBtn hidden\",\r\n      type: \"button\",\r\n    },\r\n    eventHandles: [\r\n      {\r\n        eventType: \"click\",\r\n        eventHandle() {\r\n          const howtoImage = this.parentNode;\r\n          const howtoImagePreview = this.previousSibling;\r\n          howtoImagePreview.src = \"\";\r\n          const howtoImageInputLabelText = howtoImage.previousSibling.firstChild;\r\n          howtoImageInputLabelText.textContent = \"画像を選択\";\r\n          howtoImage.style.height = \"40px\";\r\n          const howtoImageInput = howtoImageInputLabelText.nextSibling;\r\n          howtoImageInput.value = \"\";\r\n          this.classList.add('hidden');\r\n        }\r\n      }\r\n    ]\r\n  };\r\n};\r\n\r\nconst getHowtoImageDeleteBtnIoniconElInfo = () => {\r\n  return {\r\n    elementName: \"howtoImageDeleteBtnIonicon\",\r\n    elementTag: \"ion-icon\",\r\n    elementAttributes: {\r\n      name: \"trash-outline\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getHowtoTextElInfo = () => {\r\n  return {\r\n    elementName: \"howtoText\",\r\n    elementTag: \"textarea\",\r\n    elementAttributes: {\r\n      class: 'howto__text',\r\n      placeholder: \"作り方を入力\"\r\n    },\r\n  };\r\n};\r\n\r\nconst createHowtoActionEl = () => {\r\n  const howtoAction = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoActionElInfo());\r\n\r\n  const howtoNum = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoNumElInfo());\r\n  howtoNum.textContent = getHowtosLength() + 1;\r\n  howtoAction.appendChild(howtoNum);\r\n\r\n  const howtoDeleteBtn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoDeleteBtnElInfo());\r\n  const howtoDeleteBtnIonicon = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoDeleteBtnIoniconElInfo());\r\n  howtoDeleteBtn.appendChild(howtoDeleteBtnIonicon);\r\n  howtoAction.appendChild(howtoDeleteBtn);\r\n\r\n  return howtoAction;\r\n};\r\n\r\nconst createHowtoItemEl = () => {\r\n  const howtoItem = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoItemElInfo());\r\n\r\n  const howtoImageInputLabel = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageInputLabelElInfo());\r\n  const howtoImageInputLabelText = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageInputLabelTextElInfo());\r\n  howtoImageInputLabelText.textContent = \"画像を選択\";\r\n  howtoImageInputLabel.appendChild(howtoImageInputLabelText);\r\n  const howtoImageInput = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageInputElInfo());\r\n  howtoImageInputLabel.appendChild(howtoImageInput);\r\n\r\n  const howtoImage = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageElInfo());\r\n  const howtoImagePreview = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImagePreviewElInfo());\r\n  const howtoImageDeleteBtn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageDeleteBtnElInfo());\r\n  const howtoImageDeleteBtnIonicon = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoImageDeleteBtnIoniconElInfo());\r\n  howtoImageDeleteBtn.appendChild(howtoImageDeleteBtnIonicon);\r\n\r\n  howtoImage.appendChild(howtoImagePreview);\r\n  howtoImage.appendChild(howtoImageDeleteBtn);\r\n\r\n  (0,_imagePreview__WEBPACK_IMPORTED_MODULE_1__.imageInputHandle)(howtoImageInput, howtoImageInputLabelText, howtoImagePreview);\r\n\r\n  howtoItem.appendChild(howtoImageInputLabel);\r\n  howtoItem.appendChild(howtoImage);\r\n\r\n  const howtoText = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoTextElInfo());\r\n\r\n  howtoItem.appendChild(howtoText);\r\n\r\n  return howtoItem;\r\n};\r\n\r\nconst insertHowto = () => {\r\n  const howto = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getHowtoElInfo());\r\n  const howtoAction = createHowtoActionEl();\r\n  const howtoItem = createHowtoItemEl();\r\n  howto.appendChild(howtoAction);\r\n  howto.appendChild(howtoItem);\r\n\r\n  howtoList.appendChild(howto);\r\n\r\n  howtoNumber++;\r\n};\r\n\r\n// 最初は2つの入力欄を表示\r\nconst insertTwoHowto = () => {\r\n  for (let i = 0; i < 2; i++) {\r\n    insertHowto();\r\n  }\r\n};\r\n\r\nconst howtoAddBtnClickHandle = (materialAddBtn) => {\r\n  materialAddBtn.addEventListener(\"click\", insertHowto);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/recipe/registerRecipeHowto.js?");

/***/ }),

/***/ "./js/module/recipe/registerRecipeImage.js":
/*!*************************************************!*\
  !*** ./js/module/recipe/registerRecipeImage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recipeImagePreview\": () => (/* binding */ recipeImagePreview)\n/* harmony export */ });\n/* harmony import */ var _imagePreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imagePreview */ \"./js/module/imagePreview.js\");\n\r\n\r\n\r\n\r\nconst recipeImagePreview = () => {\r\n  const recipeImageInput = document.querySelector(\".registerRecipe__image__input\");\r\n  const recipeImageInputLabelText = document.querySelector(\".registerRecipe__image__input__label__text\");\r\n  const recipeImagePreview = document.querySelector(\".registerRecipe__image__preview\");\r\n  (0,_imagePreview__WEBPACK_IMPORTED_MODULE_0__.imageInputHandle)(recipeImageInput, recipeImageInputLabelText, recipeImagePreview);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/recipe/registerRecipeImage.js?");

/***/ }),

/***/ "./js/module/recipe/registerRecipeMaterials.js":
/*!*****************************************************!*\
  !*** ./js/module/recipe/registerRecipeMaterials.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createThreeMaterial\": () => (/* binding */ createThreeMaterial),\n/* harmony export */   \"materialAddBtnClickHandle\": () => (/* binding */ materialAddBtnClickHandle)\n/* harmony export */ });\n/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createHtmlElement */ \"./js/module/createHtmlElement.js\");\n\r\n\r\n\r\n\r\nconst MATERIALLIST = document.querySelector(\".registerRecipe__materials__list\");\r\n\r\nlet materialNumber = 1;\r\n\r\nconst getMaterialsLength = () => {\r\n  const materials = document.querySelectorAll(\".material\");\r\n  return materials.length;\r\n};\r\n\r\nconst getmaterialElementInfo = () => {\r\n  return {\r\n    elementName: \"material\",\r\n    elementTag: \"li\",\r\n    elementAttributes: {\r\n      class: \"material\",\r\n      id: `matarialId_${materialNumber}`,\r\n    },\r\n  };\r\n};\r\n\r\nconst getmaterialNameElementInfo = () => {\r\n  return {\r\n    elementName: \"materialName\",\r\n    elementTag: \"input\",\r\n    elementAttributes: {\r\n      class: \"material__name\",\r\n      type: \"text\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getmaterialAmountElementInfo = () => {\r\n  return {\r\n    elementName: \"materialAmount\",\r\n    elementTag: \"input\",\r\n    elementAttributes: {\r\n      class: \"material__amount\",\r\n      type: \"text\",\r\n    },\r\n  };\r\n};\r\n\r\nconst getmaterialDeleteBtnElementInfo = () => {\r\n  return {\r\n    elementName: \"materialDeleteBtn\",\r\n    elementTag: \"button\",\r\n    elementAttributes: {\r\n      class: \"material__deleteBtn\",\r\n      type: \"button\",\r\n      'data-material-id': `matarialId_${materialNumber}`\r\n    },\r\n    eventHandles: [\r\n      {\r\n        eventType: \"click\",\r\n        eventHandle() {\r\n          if (getMaterialsLength() <= 1) return;\r\n          const item = document.getElementById(this.dataset.materialId);\r\n          item.remove();\r\n        },\r\n      },\r\n    ],\r\n  };\r\n};\r\n\r\nconst getmaterialDeleteBtnIoniconElementInfo = () => {\r\n  return {\r\n    elementName: \"materialDeleteBtnIonicon\",\r\n    elementTag: \"ion-icon\",\r\n    elementAttributes: {\r\n      name: \"trash-outline\",\r\n    },\r\n  };\r\n};\r\n\r\nconst createMaterialHtmlElement = () => {\r\n  const material = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getmaterialElementInfo());\r\n  const materialName = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getmaterialNameElementInfo());\r\n  const materialAmount = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getmaterialAmountElementInfo());\r\n  const materialDeleteBtn = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getmaterialDeleteBtnElementInfo());\r\n  const materialDeleteBtnIonicon = (0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(getmaterialDeleteBtnIoniconElementInfo());\r\n\r\n  materialDeleteBtn.appendChild(materialDeleteBtnIonicon);\r\n\r\n  material.appendChild(materialName);\r\n  material.appendChild(materialAmount);\r\n  material.appendChild(materialDeleteBtn);\r\n\r\n  MATERIALLIST.appendChild(material);\r\n\r\n  materialNumber++;\r\n};\r\n\r\n// 最初は3つの入力欄を表示\r\nconst createThreeMaterial = () => {\r\n  for (let i = 0; i < 3; i++) {\r\n    createMaterialHtmlElement();\r\n  }\r\n};\r\n\r\nconst materialAddBtnClickHandle = (materialAddBtn) => {\r\n  materialAddBtn.addEventListener(\"click\", createMaterialHtmlElement);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/recipe/registerRecipeMaterials.js?");

/***/ }),

/***/ "./js/module/registerRecipe.js":
/*!*************************************!*\
  !*** ./js/module/registerRecipe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerRecipeHowtoSet\": () => (/* binding */ registerRecipeHowtoSet),\n/* harmony export */   \"registerRecipeImagePreviewSet\": () => (/* binding */ registerRecipeImagePreviewSet),\n/* harmony export */   \"registerRecipeMaterialSet\": () => (/* binding */ registerRecipeMaterialSet)\n/* harmony export */ });\n/* harmony import */ var _recipe_registerRecipeImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe/registerRecipeImage */ \"./js/module/recipe/registerRecipeImage.js\");\n/* harmony import */ var _recipe_registerRecipeMaterials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe/registerRecipeMaterials */ \"./js/module/recipe/registerRecipeMaterials.js\");\n/* harmony import */ var _recipe_registerRecipeHowto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe/registerRecipeHowto */ \"./js/module/recipe/registerRecipeHowto.js\");\n\r\n\r\n\r\n\r\n\r\n/* レシピ登録 : レシピ画像 => プレビュー */\r\nconst registerRecipeImagePreviewSet = () => {\r\n  (0,_recipe_registerRecipeImage__WEBPACK_IMPORTED_MODULE_0__.recipeImagePreview)();\r\n};\r\n\r\n/* レシピ登録 : 材料 => 追加・削除 */\r\nconst registerRecipeMaterialSet = () => {\r\n  (0,_recipe_registerRecipeMaterials__WEBPACK_IMPORTED_MODULE_1__.createThreeMaterial)();\r\n  const materialAddBtn = document.querySelector(\".material__addBtn\");\r\n  (0,_recipe_registerRecipeMaterials__WEBPACK_IMPORTED_MODULE_1__.materialAddBtnClickHandle)(materialAddBtn);\r\n};\r\n\r\n/* レシピ登録 : 作り方 => 追加・削除 */\r\nconst registerRecipeHowtoSet = () => {\r\n  (0,_recipe_registerRecipeHowto__WEBPACK_IMPORTED_MODULE_2__.insertTwoHowto)();\r\n  const howtoAddBtn = document.querySelector(\".howto__addBtn\");\r\n  (0,_recipe_registerRecipeHowto__WEBPACK_IMPORTED_MODULE_2__.howtoAddBtnClickHandle)(howtoAddBtn);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bugbug/./js/module/registerRecipe.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;