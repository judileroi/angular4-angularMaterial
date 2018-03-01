import { Categorie } from './../models/Categorie';
import { CategorieService } from './categorie.service';
import { Component, OnInit, Input,ViewChild,Inject } from '@angular/core';
import 'rxjs/add/operator/filter';
import {MatSort,MatDialogRef,MatTableDataSource} from '@angular/material';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.1.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  private categories : Categorie [];
  private selectCategorie : Categorie;

  displayedColumns = ['id', 'name', 'description', 'dueDate','published','action'];
  dataSource:MatTableDataSource <Categorie>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private categService:CategorieService) {

       this.initTable();
   }

  ngOnInit() {
    this.reset()

 

  }

  /** Initialize the table categorie */
  initTable(){

        this.categService.getCategories().subscribe((categories)=>{

         this.dataSource = new MatTableDataSource<Categorie>(categories)
         this.dataSource.sort=this.sort 
         
        })

  }

  /** Soummission du Formulaire */

  doSubmit(categorie:Categorie){
    if(this.selectCategorie)
     this.update(categorie)
     else 
     this.create(categorie)  
     this.reset()
    } 
    

  delete(prod:Categorie){

    this.categService.deleteCategorie(prod).subscribe((response)=>{
            this.initTable()
      
    });

  }  

  detail(prod:Categorie){

    this.categService.getCategorie(prod).subscribe((prod)=>{

      this.selectCategorie = prod
    })

  }

  create(Categorie){

    this.categService.saveCategorie(Categorie).subscribe((res)=>{

        this.categService.getCategories().subscribe((Categories)=>{

          this.categories = Categories
        })
    },(error)=>{ console.log('Error')}, ()=>{})
 

  }

  update(Categorie){

    this.categService.updateCategorie(Categorie).subscribe((res)=>{

        this.categService.getCategories().subscribe((Categories)=>{

          this.categories = Categories
        })
    },(error)=>{ console.log('Error')}, ()=>{})
 

  }

    /** Close the dialog Box */
    closeDialog(){

         $('#myModal').modal('toggle');
     }
  
    /** Initialize after close Dialog */
    initAfterCloseDialog(){

        $('#myModal').on('hidden.bs.modal', function (e) {

             this.initTable();

        })
    }
  /** Reset the form  */
    reset(){
    this.selectCategorie ={"name":"","description":"","published":false,"dueDate":new Date(),"id":""} ;
    this.initTable()
    }
}
