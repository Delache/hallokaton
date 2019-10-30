import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersNameFormsComponent } from './players-name-forms.component';

describe('PlayersNameFormsComponent', () => {
  let component: PlayersNameFormsComponent;
  let fixture: ComponentFixture<PlayersNameFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersNameFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersNameFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
