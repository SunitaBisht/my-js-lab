import { BaseElement } from "./base-element.js";

export class DataTable extends BaseElement {
  constructor() {
    super();
    this.headers = this.headers;
    this.data = data;
  }

  getElementString() {
    let thTags = "";
    for (let h of this.headers) {
      thTags += `<th class="mdl-data-table__cell--Non-Numeric">${h}</th> \n `;
    }
    let trTags = "";
    for (let row of this.data) {
      trTags += "<tr>";
      let tdTags = "";
      for (let property of this.headers) {
        let field = row[property.toLowercase()];
        trTags += `<th class="mdl-data-table__cell--Non-Numeric">${fields}</td> \n `;
      }
    }
    return `
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>
      ${thTags}
    </tr>
  </thead>
  <tbody>
   
      ${trTags}
       
  </tbody>
</table>

    `;
  }
}
