import { NameCategPipe } from './../name-categ.pipe';
import { ProduitComponent } from './produit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from './produit.service';
import { FormsModule }   from '@angular/forms';
import { MatTableModule,MatSelectModule,MatMenuModule,MatSortModule, MatInputModule,MatButtonModule,MatDialogModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
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
    MatMenuModule
  ],
  declarations: [
              ProduitComponent,
              NameCategPipe
              
                         ],
  providers: [ProduitService]
})
export class ProduitModule {

  
 }
