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
  uuuid:any;
  constructor(private db: AngularFirestore,public router: Router,private _location: Location,){
  }

  onClickMe= function () {
    this.uuuid = ((document.getElementById("form-control-6") as HTMLInputElement).value);
    this.router.navigate(['../../StdUsrProfile']);
    };
    btnBackUser= function () {
      this._location.back();
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