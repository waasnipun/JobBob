import { Component, OnInit,Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
// import { FirebaseService } from '../services/firebase.service';
///fixx loc
import {Location} from '@angular/common';
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
  searchValue: string = "";
  items: Array<any>;
  int_filtered_items: Array<any>;
  name_filtered_items: Array<any>;
  interest:string="";

  constructor(
    public router: Router,
    private db: AngularFirestore,
    private _location: Location
  ) { }

  ngOnInit() {

    this.getData();
    // this.db.collection('company').valueChanges()
    // .subscribe(student =>{
    //   // this.dictionary = val[0];
    //   this.students = student;
      
    // });
    // console log
    // this.db.collection('company' ).valueChanges()
    // .subscribe(val => console.log(val)); 

  }
  getUsers(){
    return this.db.collection('company').snapshotChanges();
  }

  getData(){
    // this.getUsers()
    this.db.collection('company').valueChanges()
    .subscribe(result => {
      this.students = result;
      this.int_filtered_items = result;
      this.name_filtered_items = result;
      
    })
  }

  searchUsers(searchValue){
    console.log('searchvalue');
    return this.db.collection('company',ref => ref.where('companyName', '>=', searchValue)
      .where('companyName', '<=', searchValue + '\uf8ff'))
      .valueChanges()
  }

  searchByName(){
    console.log('searchname');
    let value = this.searchValue.toLowerCase();
    this.searchUsers(value)
    .subscribe(result => {
      this.name_filtered_items = result;
      console.log(result);
      console.log('searchbynamedone');
      this.items = this.combineLists(result, this.int_filtered_items);///no combine yet
    })

  }
  //////
  searchUsersi(searchValue){
    console.log('searchinttvalue');
    return this.db.collection('company',ref => ref.where('Op', '>=', searchValue)
      .where('Op', '<=', searchValue + '\uf8ff'))
      .valueChanges()
  }

  searchByInt(){
    console.log('searchint');
    let value = this.interest.toLowerCase();
    this.searchUsersi(value)
    .subscribe(result => {
      this.int_filtered_items = result;
      console.log(result);
      console.log('searchbyidone');
      this.items = this.combineLists(result, this.name_filtered_items);///no combine yet
    })

  }

  /////

  combineLists(a, b){
    console.log('combine');
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.companyName == x.companyName){
          result.push(x2);
        }
      });
    });
    console.log('finisfilter');
    console.log(result);
    this.students=result;
    return result;

    
  }
  btnBackUser= function () {
    this._location.back();
  };
 
}
