import { Component, OnInit,Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

import { Router } from "@angular/router";
import { AngularFirestore  } from '@angular/fire/firestore';


@Component({
  selector: 'app-newsearch',
  templateUrl: './newsearch.component.html',
  styleUrls: ['./newsearch.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class NewsearchComponent implements OnInit {
  students : any[];//these are samres
  dictionary: {  } ;///
  ageValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(
    public router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit() {

    this.db.collection('company').valueChanges()
    .subscribe(student =>{
      // this.dictionary = val[0];
      this.students = student;
      
    });
    // console log
    // this.db.collection('company' ).valueChanges()
    // .subscribe(val => console.log(val)); 

  }
  

  btnBackUser= function () {
    this.router.navigate(['../../newsearch']);
    };
}
