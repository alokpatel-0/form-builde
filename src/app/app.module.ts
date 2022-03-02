import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableViewComponent } from './dragDrop/table-view/table-view.component';
import { FormBuilderComponent } from './dragDrop/form-builder/form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialEleModule } from './material-ele/material-ele.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableViewComponent, FormBuilderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialEleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
