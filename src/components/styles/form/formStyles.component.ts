import {
  Component
} from '@angular/core';

class FormStyle {

  width: number;
  height: number;
  background: string;

  constructor(
    width: number, 
    height: number, 
    background: string) {

    this.width = width;
    this.height = height;
    this.background = background;
  }
}
@Component({
  selector: 'form-styles',
  template: `<div class="form-styles">
  <h1> Form styles </h1>
</div>
`
})

export class FormStyle {
  text: string = '';
  price: number = 0;

  items: Item[] = [{
      purchase: "Razer kraken",
      done: true,
      price: 35
    },
    {
      purchase: "Razer blade",
      done: false,
      price: 40
    },
    {
      purchase: "Razer core",
      done: false,
      price: 750
    },
    {
      purchase: "Razer headset",
      done: false,
      price: 50
    },
  ];
  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
  }
}
