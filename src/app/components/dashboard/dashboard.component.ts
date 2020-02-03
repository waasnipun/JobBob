import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;
  userPrimaryData: User["uid"];
  dullVar: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public afStorage:AngularFireStorage,
    public afs: AngularFirestore,
  ) { 
    this.afAuth.authState.subscribe(user => {
        this.userPrimaryData = user.uid;
    })        
  }
  ngOnInit() {    
      this.getData(); 
      this.upload();   
   }
  btnClick= function () {
    this.router.navigate(['../../editprofile']);
    };
  btnSearch = function(){
      this.router.navigate(['../../newsearch']);
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
  profileUrl: Observable<string>;
  upload(){
    const path = `gs://jobbob-468e3.appspot.com`;
    this.ref = this.afStorage.ref(this.userPrimaryData);
    this.profileUrl = this.ref.getDownloadURL();
  }
}
