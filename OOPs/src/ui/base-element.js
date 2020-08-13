import $, { get } from "jquery";

export class BaseElement {
  constructor() {
    this.element = null; //jquery object
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJs();
  }
  createElement() {
    let s = getElementString();
    this.element = $(s);
  }
  getElementString() {
    throw "Please Override getElementString() in BaseElement";
  }

  enableJs() {
    componentHandler.upgradeElement(this.element[0]);
  }
}
