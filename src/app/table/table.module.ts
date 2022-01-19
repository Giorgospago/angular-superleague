import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { DaysAgoPipe } from '../pipes/days-ago.pipe';

const routes: Routes = [
  { path: '', component: TableComponent }
];

@NgModule({
  declarations: [
    TableComponent,
    DaysAgoPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
