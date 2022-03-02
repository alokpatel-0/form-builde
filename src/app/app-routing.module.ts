import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './dragDrop/form-builder/form-builder.component';
import { TableViewComponent } from './dragDrop/table-view/table-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'form-list', pathMatch: 'full' },
  { path: 'form-list', component: TableViewComponent, pathMatch: 'full' },
  {
    path: 'form-builder/create',
    component: FormBuilderComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
