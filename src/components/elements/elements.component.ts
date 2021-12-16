import {
  Component
} from '@angular/core';


@Component({
  selector: 'elements-component',
  template: `<div class="styles">
  <p>Block: {{name}}</p>
  </div>`,
  styles: [`.styles {color: orange; height: 400px;}`]
})

export class ElementsComponent {
  name = "Drag section elements component"
}
