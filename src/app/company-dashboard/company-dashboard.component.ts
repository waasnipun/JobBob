import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { User, company } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  Details:any = new company();
  userPrimaryData: User["uid"];
  dullVar: any;
  companyName:any;
  Address:string;
  mobile:string;
  Op:string;
  Description:string;
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
  this.router.navigate(['../../editprofilecompany']);
  };
btnSearch = function(){
    this.router.navigate(['../../search']);
  };

getData(){
  this.afs.collection('company').doc(this.userPrimaryData).valueChanges().subscribe((response) => {
    if (response) {
      this.Details = response;
      this.companyName = this.Details.companyName;
      this.Address = this.Details.Address;
      this.mobile = this.Details.mobile;
      this.Op = this.Details.Op;
      this.Description = this.Details.Description;
      localStorage.setItem('user', JSON.stringify(this.Details));
      JSON.parse(localStorage.getItem('user'));
    } else {
      localStorage.setItem('user', null);
      JSON.parse(localStorage.getItem('user'));
    }
  })
}

}
