import {
  Component
} from '@angular/core';


// <!-- Parent component -->
@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  name = "Layout";

  values = "";

  // (): void {
  //   console.log(`Hello ${this.count}`);
  //   this.count++;
  // }

  // showinfo(): void {
  //   console.log("click")
  //   console.log(`
  //     placeholderText: ${this.placeholderText}
  //     width: ${this.width}
  //     height: ${this.height}
  //     border-style: ${this.borderStyle}
  //    `)
  // }
}
