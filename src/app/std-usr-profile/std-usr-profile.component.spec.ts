import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdUsrProfileComponent } from './std-usr-profile.component';

describe('StdUsrProfileComponent', () => {
  let component: StdUsrProfileComponent;
  let fixture: ComponentFixture<StdUsrProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdUsrProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdUsrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
