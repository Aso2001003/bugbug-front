"use strict";

const createHtmlElement = (elementInfo) => {
  const element = document.createElement(elementInfo.elementTag);
  
  for (let [attribute, value] of Object.entries(elementInfo.elementAttributes)) {
    element.setAttribute(attribute, value);
  }

  if (elementInfo.eventHandles != undefined) {
    for (let eventInfo of elementInfo.eventHandles) {
      element.addEventListener(eventInfo.eventType, eventInfo.eventHandle);
    }
  }

  return element;
};

export { createHtmlElement };
