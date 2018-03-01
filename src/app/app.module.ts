import { CategorieModule } from './categorie/categorie.module';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ProduitModule } from './produit/produit.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule,MatSelectModule,MatMenuModule,MatSortModule, MatInputModule,MatButtonModule,MatDialogModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

const routes : Routes = [

{path: 'produit', component:ProduitComponent},
{path: 'categorie', component:CategorieComponent}


]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ProduitModule,
    CategorieModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
