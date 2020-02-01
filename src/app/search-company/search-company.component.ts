import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import {Location} from '@angular/common';
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
  constructor(private db: AngularFirestore,public router: Router,private _location: Location){
    
  }
  btnClick= function () {
    this.router.navigate(['../../StdUsrProfile']);
    };
  
  ngOnInit() {

    this.db.collection('students').valueChanges()
    .subscribe(student =>{
      // this.dictionary = val[0];
      this.students = student;
      
    });

    this.db.collection('students' ).valueChanges()
    .subscribe(val => console.log(val)); 
  } 
    
  

}