import {
  Component
} from '@angular/core';


@Component({
  selector: 'form-component',
  template: `<div class="styles">
  <p>Block: {{name}}</p>
  </div>`,
  styles: [`.styles {color: blue; height: 400px;}`]
})

export class FormComponent {
  name = "form component"
  // placeholderText: string = '';
  // width: number = 0;
  // height: number = 0;
  // borderStyle: string = "";
  // fontSizeInput: number = 0;
  // fontWeightSelect: number = 0;



  // fieldStyle: FieldStyle[] = [{
  //   placeholderText: 'First field',
  //   width: 0,
  //   height: 0,
  //   required: false,
  //   borderStyle: "",
  //   fontSizeInput: 0,
  //   fontWeightSelect: 0,
  // },
  // ];
  // addField(
  //   placeholderText: string,
  //   width: number,
  //   height: number,
  //   borderStyle: string,
  //   fontSizeInput: number,
  //   fontWeightSelect: number)
  //   : void {
  //   if (placeholderText == null || placeholderText.trim() == "" || width == null) return;
  //   this.fieldStyle.push(new FieldStyle(placeholderText, width, height, borderStyle, fontSizeInput, fontWeightSelect));
  // }
}
