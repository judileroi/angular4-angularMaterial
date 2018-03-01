import { Router } from '@angular/router';
import { CategorieService } from './../categorie/categorie.service';
import { Categorie } from './../models/Categorie';
import { Observable } from 'rxjs/Rx';
import { Produit } from './../models/Produit';
import { ProduitService } from './produit.service';
import { Component, OnInit, Input,ViewChild,Inject } from '@angular/core';
import 'rxjs/add/operator/filter';
import {MatSort,MatDialogRef,MatTableDataSource} from '@angular/material';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.1.html',
  styleUrls: ['./produit.component.css']})

export class ProduitComponent implements OnInit {
  private produits: Array <Produit>;
  private categories: Array <Categorie>
  private selectProduit:Produit ;
  private value =""
  @Input() prod:Produit

  displayedColumns = ['id', 'name', 'description','qte', 'dueDate','action'];
  dataSource:MatTableDataSource <Produit>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private produitService: ProduitService,private categService:CategorieService, private router:Router) {

    this.initComboCateg();
    this.initTable();


   }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }


  ngOnInit() {

    this.reset()
    this.initAfterCloseDialog()
  }

  /** Initialize the table products */
  initTable(){

        this.produitService.getProduits().subscribe((produits)=>{

         this.dataSource = new MatTableDataSource<Produit>(produits)
         this.dataSource.sort=this.sort 
         
        })

  }

  /** Initialize combobox Categ */

  initComboCateg(){


        this.categService.getCategories().subscribe((categs) => {
            this.categories = categs
        });
  }

  delete(prod:Produit){
    this.produitService.deleteProduit(prod).subscribe((response)=>{
      this.initTable()
      
    });

  }  

  detail(prod:Produit){

    this.produitService.getProduit(prod).subscribe((prod)=>{

      this.selectProduit = prod
    })

  }

  create(produit){

    this.produitService.saveProduit(produit).subscribe((res)=>{

        this.produitService.getProduits().subscribe((produits)=>{

          this.produits = produits
        })
    },(error)=>{ console.log('Error'+error)}, ()=>{})
 

  }

  update(produit){

    this.produitService.updateProduit(produit).subscribe((res)=>{
        this.initTable()
    },(error)=>{ console.log('Error'+error)}, ()=>{})
 

  }

  doSubmit(produit:Produit){
    if(this.selectProduit){
        this.update(produit)
    }
     else{
        this.create(produit)
        this.reset()
     } 

     //this.closeDialog()
    

     }

    reset(){
    this.selectProduit ={"name":"","price":0,"description":"","ref":"","qte":0,"dueDate":1515851622,"id":"","categorie":null} ;

      }
  
    closeDialog(){

         $('#myModal').modal('toggle');
     }
  
    /** Initialize after close Dialog */
    initAfterCloseDialog(){

        $('#myModal').on('hidden.bs.modal', function (e) {

             this.initTable();

        })
    }

}


