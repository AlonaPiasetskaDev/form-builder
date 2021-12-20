import {
  CdkPortalOutlet
} from '@angular/cdk/portal';
import {
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

let font_weight: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900]

class Style {
  placeholderText: string = '';
  width: number = 0;
  height: number = 0;
  borderStyle: string = "";
  fontSizeInput: number = 0;
  fontWeightSelect: number = font_weight[0];

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
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  name = "app"

  @ViewChild('virtualContainer', { read: ViewContainerRef, static: false })
  virtualContainer: ViewContainerRef;

  @ViewChild('virtualContainer', { read: CdkPortalOutlet, static: false })
  virtualPortalOutlet: CdkPortalOutlet;
  placeholder_text: string = '';
  form_width: number = 0;
  form_height: number = 0;
  border_style: string = '';
  font_sizeInput: number = 0;
  font_weightSelect: number = 0;


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
  // placeholder_text, form_width, form_height, border_style, font_sizeInput, font_weightSelect
  addStyle(placeholder_text: string, form_width: number, form_height: number, border_style: string, font_sizeInput: number, font_weightSelect: number): void {
    if (placeholder_text == null || placeholder_text.trim() == "" || form_width == null) return;
    this.styles.push(new Style(placeholder_text, form_width, form_height, border_style, font_sizeInput, font_weightSelect));
  }
}


// <div class="container">
//     <div class="page-header">
//       <h1> Form styles pre-install </h1>
//     </div>
//     <div class="panel">
//       <div class="form-inline">
//         <ul class="form-styles">
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-8">
//                 <label>Placeholder text <input class="form-control" [(ngModel)]="placeholder_text" placeholder = "Input placeholder..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-6">
//                 <label>Width <input type="number" class="form-control" [(ngModel)]="form_width" placeholder="Input width..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-6">
//                 <label>Height <input type="number" class="form-control" [(ngModel)]="form_height" placeholder="Input height..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item"> 
//             <div class="form-group">
//               <div class="col-md-6">
//                 <label>Border style <input type="text" class="form-control" [(ngModel)]="border_style" placeholder="Input border style..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-6">
//                 <label>Font-size input <input type="number" class="form-control" [(ngModel)]="font_sizeInput" placeholder="Input font-size input..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-6">
//                 <label>Font-weight select <input type="number" class="form-control" [(ngModel)]="font_weightSelect" placeholder="Input font-weight select..." /></label>
//               </div>
//             </div>
//           </li>
//           <li class="form-styles-item">
//             <div class="form-group">
//               <div class="col-md-offset-2 col-md-8">
//                 <button class="btn btn-default" (click)="
//                   addStyle(placeholder_text, form_width, form_height, border_style, font_sizeInput, font_weightSelect)"
//                   >Add style</button>
//               </div>
//             </div>
//           </li>
//         </ul>  
//     </div>
//     <table class="table table-striped">
//         <thead>
//             <tr>
//             <th>Placeholder text</th>
//             <th>Width</th>
//             <th>Height</th>
//             <th>Border style</th>
//             <th>Font-size input</th>
//             <th>Font-weight select</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr *ngFor="let style of styles">
//                 <td>{{style.placeholderText}}</td>
//                 <td>{{style.width}}</td>
//                 <td>{{style.height}}</td>
//                 <td>{{style.borderStyle}}</td>
//                 <td>{{style.fontSizeInput}}</td>
//                 <td>{{style.fontWeightSelect}}</td>
//             </tr>
//         </tbody>
//     </table>
//   </div>
// </div>
