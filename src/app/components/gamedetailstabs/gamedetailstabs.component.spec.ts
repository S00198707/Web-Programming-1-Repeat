import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedetailstabsComponent } from './gamedetailstabs.component';

describe('GamedetailstabsComponent', () => {
  let component: GamedetailstabsComponent;
  let fixture: ComponentFixture<GamedetailstabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedetailstabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedetailstabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
