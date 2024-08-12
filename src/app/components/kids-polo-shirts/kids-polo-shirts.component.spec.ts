import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsPoloShirtsComponent } from './kids-polo-shirts.component';

describe('KidsPoloShirtsComponent', () => {
  let component: KidsPoloShirtsComponent;
  let fixture: ComponentFixture<KidsPoloShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsPoloShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsPoloShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
