import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPlayerComponent } from './nav-bar-player.component';

describe('NavBarPlayerComponent', () => {
  let component: NavBarPlayerComponent;
  let fixture: ComponentFixture<NavBarPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
