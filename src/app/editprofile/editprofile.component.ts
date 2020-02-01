import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import {Location} from '@angular/common';
import { User, details, Upload } from "../shared/services/user";
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage} from '@angular/fire/storage'
//import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
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
  firstName:string;
  secondName:string;
  University:string;
  mobile:string;
  Description:string;
  Details : any = new details();
  submitted: any;
  interestedAreas: any;
  uploadProgress: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  profileUrl: Observable<string>;
  constructor(public router: Router,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service  
    public ngZone: NgZone ,
    public afStorage:AngularFireStorage,
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
        this.Details = response;
        this.firstName = this.Details.firstName;
        this.secondName = this.Details.secondName;
        this.mobile = this.Details.mobile;
        this.University = this.Details.university;
        this.Description = this.Details.Description;
        this.interestedAreas = this.Details.interestedAreas;
        this.email = this.userData.email;
        localStorage.setItem('user', JSON.stringify(this.Details));
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


onClickMe = function (){
  console.log(this.profileUrl);
     this.submitted = true;
     this.firstName = ((document.getElementById("form-control-1") as HTMLInputElement).value);
     this.secondName = ((document.getElementById("form-control-2") as HTMLInputElement).value);
     this.University = ((document.getElementById("form-control-3") as HTMLInputElement).value);
     this.mobile = ((document.getElementById("form-control-9") as HTMLInputElement).value);
     this.Description = ((document.getElementById("form-control-8") as HTMLInputElement).value);
     this.interestedAreas = ((document.getElementById("form-control-10") as HTMLInputElement).value);
     this.Details.firstName = this.firstName;
     this.Details.secondName = this.secondName;
     this.Details.University = this.University;
     this.Details.mobile = this.mobile;
     this.Details.Description = this.Description;
     this.Details.interestedAreas = this.interestedAreas;
    //this.createCustomer(details);
    this.afs.collection("students").doc(this.userPrimaryData).update({
     firstName: String(this.Details.firstName),
    secondName: String(this.Details.secondName),
    mobile: String(this.Details.mobile),
    university: String(this.Details.University),
    Description:String(this.Details.Description),
    interestedAreas: Array(this.Details.interestedAreas),
    cv: String(this.profileUrl[1])
    })
    //return this.afs.doc(this.userPrimaryData).update(details);
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    this.router.navigate(['../../dashboard']);
    
}
selectedFile = null;

async upload(event){
  const path = `gs://jobbob-468e3.appspot.com`;
  this.ref = this.afStorage.ref(this.userPrimaryData);
  this.task = this.ref.put(event.target.files[0]);
  this.profileUrl = this.ref.getDownloadURL();
}

// startUpload() {

//   // The storage path
//   const path = `test/${this.userPrimaryData}`;

//   // Reference to storage bucket
//   const ref = this.afStorage.ref(path);

//   // The main task
//   this.task = this.afStorage.upload(path, this.file);

//   // Progress monitoring
//   this.percentage = this.task.percentageChanges();

//   this.snapshot   = this.task.snapshotChanges().pipe(
//     tap(console.log),
//     // The file's download URL
//     finalize( async() =>  {
//       this.downloadURL = await ref.getDownloadURL().toPromise();

//       this.db.collection('files').add( { downloadURL: this.downloadURL, path });
//     }),
//   );
// }




}
