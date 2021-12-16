// StyleComponent

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StyleComponent } from './styles.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [StyleComponent],
  bootstrap: [StyleComponent]
})

export class StyleComponent { }

