import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetwaerComponent } from './streetwaer.component';

describe('StreetwaerComponent', () => {
  let component: StreetwaerComponent;
  let fixture: ComponentFixture<StreetwaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetwaerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetwaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
