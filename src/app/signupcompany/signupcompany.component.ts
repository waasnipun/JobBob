import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-signupcompany',
  templateUrl: './signupcompany.component.html',
  styleUrls: ['./signupcompany.component.css']
})
export class SignupcompanyComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
