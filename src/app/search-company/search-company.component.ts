import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})

@Injectable({
    providedIn: 'root'
})

export class SearchCompanyComponent implements OnInit {
  students : any[];
  dictionary: {  } ;
  constructor(private db: AngularFirestore){
    
  }

  ngOnInit() {

    this.db.collection('students').valueChanges()
    .subscribe(val =>{
      // this.dictionary = val[0];
      this.students = val;
      
    });

    this.db.collection('students' ).valueChanges()
    .subscribe(val => console.log(val)); 
  } 
    
  

}