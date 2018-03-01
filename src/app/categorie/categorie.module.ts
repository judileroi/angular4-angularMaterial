import { FormsModule } from '@angular/forms';
import { CategorieService } from './categorie.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie.component';
import {MatNativeDateModule, MatDatepickerModule,MatTableModule,MatCheckboxModule,MatIconModule,MatSelectModule,MatMenuModule,MatSortModule, MatInputModule,MatButtonModule,MatDialogModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [CategorieComponent],
  providers: [CategorieService]
})
export class CategorieModule { }
