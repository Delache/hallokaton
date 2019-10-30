import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterChoiceComponent } from './monster-choice.component';

describe('MonsterChoiceComponent', () => {
  let component: MonsterChoiceComponent;
  let fixture: ComponentFixture<MonsterChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
