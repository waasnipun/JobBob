import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/auth';
import {Location} from '@angular/common';


@Component({
  selector: 'app-std-usr-profile',
  templateUrl: './std-usr-profile.component.html',
  styleUrls: ['./std-usr-profile.component.css']
})
export class StdUsrProfileComponent implements OnInit {

  userData: any;
  userPrimaryData: User["uid"];
  dullVar: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public afs: AngularFirestore,
    private _location: Location

    
  ) { 
    this.afAuth.authState.subscribe(user => {
        this.userPrimaryData = user.uid;
    })        
  }
  ngOnInit() {    
      this.getData();    
   }
   btnBackUser= function () {
    this._location.back();
  };
  // btnClick= function () {
  //   this.router.navigate(['../../editprofile']);
  //   };
  btnSearch = function(){
      this.router.navigate(['../../search']);
    };
    

  getData(){
    this.afs.collection('students').doc(this.userPrimaryData).valueChanges().subscribe((response) => {
      if (response) {
        this.userData = response;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

}
