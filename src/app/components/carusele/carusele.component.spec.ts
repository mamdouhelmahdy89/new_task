import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruseleComponent } from './carusele.component';

describe('CaruseleComponent', () => {
  let component: CaruseleComponent;
  let fixture: ComponentFixture<CaruseleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruseleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaruseleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
