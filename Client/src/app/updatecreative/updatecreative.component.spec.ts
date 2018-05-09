import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecreativeComponent } from './updatecreative.component';

describe('UpdatecreativeComponent', () => {
  let component: UpdatecreativeComponent;
  let fixture: ComponentFixture<UpdatecreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
