
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { FormControl } from '@angular/forms'; //auto complete
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
 
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;
 
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(50),
        tap(() => {
          this.errorMsg = "";
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get(" http://www.omdbapi.com/?i=tt3896198&apikey=194c9dcf" + value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredMovies = [];
        } else {
          this.errorMsg = "";
          this.filteredMovies = data['Search'];
        }
 
        console.log(this.filteredMovies);
      });
    }

  btnBackUser= function () {
    this._location.back();
  };


}

