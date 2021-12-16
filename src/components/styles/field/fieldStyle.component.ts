import {
  Component
} from '@angular/core';

import {
  Component
} from '@angular/core';

// class FormStyle {

//   width: number;
//   height: number;
//   background: string;

//   constructor(
//     width: number, 
//     height: number, 
//     background: string) {

//     this.width = width;
//     this.height = height;
//     this.background = background;
//   }
// }

class FieldStyle {
  placeholderText: string;
  width: number;
  height: number;
  required: boolean;
  borderStyle: string;
  fontSizeInput: number;
  fontWeightSelect: number;

  // purchase: string;
  // done: boolean;
  // price: number;

  constructor(
    placeholderText: string,
    width: number,
    height: number,
    borderStyle: string,
    fontSizeInput: number,
    fontWeightSelect: number,
  ) {

    this.placeholderText = placeholderText;
    this.width = width;
    this.height = height;
    this.required = false;
    this.borderStyle = borderStyle;
    this.fontSizeInput = fontSizeInput;
    this.fontWeightSelect = fontWeightSelect;


    // this.purchase = purchase;
    // this.price = price;
    // this.done = false;
  }
}
@Component({
  selector: 'styles',
  template: `<div class="page-header">
  <h1> Список покупок </h1>
</div>
<div class="panel">
  <div class="form-inline">
      <div class="form-group">
          <div class="col-md-8">
              <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
          </div>
      </div>
      <div class="form-group">
          <div class="col-md-6">
              <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
          </div>
      </div>
      <div class="form-group">
          <div class="col-md-offset-2 col-md-8">
              <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
          </div>
      </div>
  </div>
  <table class="table table-striped">
      <thead>
          <tr>
              <th>Предмет</th>
              <th>Цена</th>
              <th>Куплено</th>
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let item of items">
              <td>{{item.purchase}}</td>
              <td>{{item.price}}</td>
              <td><input type="checkbox" [(ngModel)]="item.done" /></td>
          </tr>
      </tbody>
  </table>
</div>`
})

export class StyleComponent {
  placeholderText: string = '';
  width: number = 0;
  height: number = 0;
  borderStyle: string = "";
  fontSizeInput: number = 0;
  fontWeightSelect: number = 0;



  fieldStyle: FieldStyle[] = [{
    placeholderText: 'First field',
    width: 0,
    height: 0,
    required: false,
    borderStyle: "",
    fontSizeInput: 0,
    fontWeightSelect: 0,
  },
  ];
  addField(
    placeholderText: string,
    width: number,
    height: number,
    borderStyle: string,
    fontSizeInput: number,
    fontWeightSelect: number)
    : void {
    if (placeholderText == null || placeholderText.trim() == "" || width == null) return;
    this.fieldStyle.push(new FieldStyle(placeholderText, width, height, borderStyle, fontSizeInput, fontWeightSelect));
  }
}
// ++++++++++++++++++++++++++++++++++++

class FieldStyle {
  placeholderText: string;
  width: number;
  height: number;
  required: boolean;
  borderStyle: string;
  fontSizeInput: number;
  fontWeightSelect: number;

  constructor(
    placeholderText: string,
    width: number,
    height: number,
    borderStyle: string,
    fontSizeInput: number,
    fontWeightSelect: number,
  ) {

    this.placeholderText = placeholderText;
    this.width = width;
    this.height = height;
    this.required = false;
    this.borderStyle = borderStyle;
    this.fontSizeInput = fontSizeInput;
    this.fontWeightSelect = fontWeightSelect;
  }
}
@Component({
  selector: 'field-styles',
  template: `<div class="field-styles">
  <h1> Field styles </h1>
</div>
`
})
