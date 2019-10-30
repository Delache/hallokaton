import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonstersComponent } from './list-monsters.component';

describe('ListMonstersComponent', () => {
  let component: ListMonstersComponent;
  let fixture: ComponentFixture<ListMonstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMonstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
