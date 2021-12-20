import {
  Component
} from '@angular/core';


// <!-- Parent component -->
@Component({
  selector: 'styles-component',
  templateUrl: './styles.component.html',
})
export class StyleComponent {

  name = "Pre-install style component";

  placeholderText: string = "placeholder Text";
  width: number = 150;
  height: number = 50;
  borderStyle: string = "none";

  count: number = 0;

  values = "";

  check(): void {
    console.log(`Hello ${this.count}`);
    this.count++;
  }

  onPH($event: any): void {
    this.placeholderText = $event.target.value;
    console.log("onPH", this.placeholderText);
  }
  onWidth($event: any): void {
    this.width = $event.target.value;
    console.log("width", this.width)
  }
  onHeight($event: any): void {
    this.height = $event.target.value;
    console.log("height", this.height)
  }
  onBorderStyleChange($event: any): void {
    this.borderStyle = $event.target.value;
    console.log("borderStyle", this.borderStyle)
  }

  showinfo(): void {
    console.log("click")
    console.log(`
      placeholderText: ${this.placeholderText}
      width: ${this.width}
      height: ${this.height}
      border-style: ${this.borderStyle}
     `)
  }

  // onPlaceHolder(event: any): void { 
  //   console.log("event.target", event.target)
  //   this.placeholderText = event.target.value;
  //   console.log(event.target.name, this.placeholderText)
  // }
  // onWidth(event: any) { 
  //   console.log("event.target", event.target)
  //   this.width = event.target.value;

  //   // console.log(event.target.name, this.width)
  // }
  // onHeight(event: any) { 
  //   console.log("event.target", event.target)
  //   this.height = event.target.value;
  //   console.log(event.target.name, this.height)
  // }
  // onBorderStyleChange(event: any) { 
  //   console.log("event.target", event.target)
  //   this.borderStyle = event.target.value;
  //   console.log(event.target.name, this.borderStyle)
  // }
}
