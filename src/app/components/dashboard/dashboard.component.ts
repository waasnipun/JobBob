import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;
  userPrimaryData: User["uid"];
  dullVar: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public afs: AngularFirestore,
  ) { 
    this.afAuth.authState.subscribe(user => {
        this.userPrimaryData = user.uid;
    })        
  }
  ngOnInit() {    
      this.getData();    
   }
  btnClick= function () {
    this.router.navigate(['../../editprofile']);
    };
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
