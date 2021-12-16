import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StyleComponent } from '../components/styles/styles.component';
import { FormComponent } from '../components/form/form.component';
import { ElementsComponent } from '../components/elements/elements.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StyleComponent, FormComponent, ElementsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
