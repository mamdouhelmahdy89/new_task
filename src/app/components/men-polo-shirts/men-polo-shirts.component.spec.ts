import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenPoloShirtsComponent } from './men-polo-shirts.component';

describe('MenPoloShirtsComponent', () => {
  let component: MenPoloShirtsComponent;
  let fixture: ComponentFixture<MenPoloShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenPoloShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenPoloShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
