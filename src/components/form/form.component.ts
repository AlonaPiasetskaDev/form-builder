import {
  Component, Input, Output, EventEmitter
} from '@angular/core';

//   Child component
@Component({
  selector: 'form-component',
  templateUrl: './form.component.html'
})

export class FormComponent {

  name = "form component";
  @Input() placeholderText: string = "";
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() borderStyle: string = "";
}
