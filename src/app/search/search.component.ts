import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { FormControl } from '@angular/forms'; //auto complete
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'ng-autocompletesearch';///autoc
  myControl = new FormControl();                //ac
  options: string[] = ['One', 'Two', 'Three'];  //ac
  filteredOptions: Observable<string[]>;

  constructor(private _location: Location) { }

  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
 
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  btnBackUser= function () {
    this._location.back();
  };




}

