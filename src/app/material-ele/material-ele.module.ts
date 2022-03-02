import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

const list = [MatButtonModule, MatIconModule, MatListModule, DragDropModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...list],
  exports: [...list],
})
export class MaterialEleModule {}
