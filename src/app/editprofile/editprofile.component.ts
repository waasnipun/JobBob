import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import {Location} from '@angular/common';
import { User, details } from "../shared/services/user";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  userData : any;
  userdetails: details;
  userPrimaryData: any;
  email: any;
  displayName: any;
  photoURL: any;
  emailVerified: any;
  firstNameIN:any;
  constructor(public router: Router,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service  
    public ngZone: NgZone  ,
    private _location: Location) { 
      this.afAuth.authState.subscribe(user => {
        this.userPrimaryData = user.uid;
        this.getData();
     }) 
    }

  ngOnInit() {
    
    
  }
  btnBackUser= function () {
    this._location.back();
  };
  getData(){
    this.afs.collection('students').doc(this.userPrimaryData).valueChanges().subscribe((response) => {
      if (response) {
        this.userData = response;
        this.email = this.userData.email;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  
  // this.displayName = this.userData.displayName;
  // this.photoURL = this.userData.photoURL;
  // this.emailVerified = this.userData.emailVerified;
 // this.updatePolicy();
  }

onClickMe= function () {    
  // this.userdetails.firstName = ((document.getElementById("form-control-1") as HTMLInputElement).value);
  // this.userdetails.secondName = ((document.getElementById("form-control-2") as HTMLInputElement).value);
  // this.userdetails.university = ((document.getElementById("form-control-3") as HTMLInputElement).value);
  // this.userdetails.mobile = ((document.getElementById("form-control-9") as HTMLInputElement).value);
  // var   retypePassword= ((document.getElementById("form-control-5") as HTMLInputElement).value);
  // var   email= ((document.getElementById("form-control-6") as HTMLInputElement).value);
  // var   companyType= ((document.getElementById("form-control-9") as HTMLInputElement).value);
  this.updatePolicy();
};
updatePolicy(){
    this.afs.collection("students").doc(this.userPrimaryData).update({
      firstName: "nipuna",
      secondName: "Wfsaas",
      university:"Uom",
      mobile:"0766782269",
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

  // this.tempID = this.userData.uid;
  // //delete policy.uid;
  // this.firestore.doc('students/' + this.tempID).update(policy);
}


}
