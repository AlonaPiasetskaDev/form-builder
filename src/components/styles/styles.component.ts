import {
  Component
} from '@angular/core';

class Style {
  placeholderText: string = '';
  width: number = 0;
  height: number = 0;
  borderStyle: string = "";
  fontSizeInput: number = 0;
  fontWeightSelect: number = 0;

  constructor(placeholderText: string, width: number, height: number, borderStyle: string, fontSizeInput: number, fontWeightSelect: number) {
    this.placeholderText = "";
    this.width = 0;
    this.height = 0;
    this.borderStyle = "";
    this.fontSizeInput = 0;
    this.fontWeightSelect = 0;
  }
}

@Component({
  selector: 'styles-component',
  template: `<div class="styles">
  <p>Block: {{name}}</p>
  <div class="container">
    <div class="page-header">
      <p> Form styles pre-install </p>
    </div>
    <div class="panel">
      <div class="form-inline">
        <ul class="form-styles">
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-8">
                <label>Placeholder text <input class="form-control" [(ngModel)]="placeholderText" placeholder = "Input placeholder..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-6">
                <label>Width <input type="number" class="form-control" [(ngModel)]="width" placeholder="Input width..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-6">
                <label>Height <input type="number" class="form-control" [(ngModel)]="height" placeholder="Input height..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item"> 
            <div class="form-group">
              <div class="col-md-6">
                <label>Border style <input type="text" class="form-control" [(ngModel)]="borderStyle" placeholder="Input border style..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-6">
                <label>Font-size input <input type="number" class="form-control" [(ngModel)]="fontSizeInput" placeholder="Input font-size input..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-6">
                <label>Font-weight select <input type="number" class="form-control" [(ngModel)]="fontWeightSelect" placeholder="Input font-weight select..." /></label>
              </div>
            </div>
          </li>
          <li class="form-styles-item">
            <div class="form-group">
              <div class="col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="
                  addStyle(placeholderText, width, height, borderStyle, fontSizeInput, fontWeightSelect)"
                  >Add style</button>
              </div>
            </div>
          </li>
        </ul>  
    </div>
  </div>`,
  styles: [`.styles {color: yellow; height: 400px;}`]
})

export class StyleComponent {
  name = "style component";
  placeholderText = "";
  width = 0;
  height = 0;
  borderStyle = "";
  fontSizeInput = 0;
  fontWeightSelect = 0;

  styles: Style[] = [
    {
      placeholderText: "Razer kraken",
      width: 400,
      height: 400,
      borderStyle: "dashed",
      fontSizeInput: 10,
      fontWeightSelect: 10
    }
  ];
  addStyle(placeholderText: string, width: number, height: number, borderStyle: string, fontSizeInput: number, fontWeightSelect: number): void {
    if (placeholderText == null || placeholderText.trim() == "" || width == null) return;
    this.styles.push(new Style(placeholderText, width, height, borderStyle, fontSizeInput, fontWeightSelect));
  }
}
