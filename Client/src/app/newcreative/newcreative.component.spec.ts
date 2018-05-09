import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcreativeComponent } from './newcreative.component';

describe('NewcreativeComponent', () => {
  let component: NewcreativeComponent;
  let fixture: ComponentFixture<NewcreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
