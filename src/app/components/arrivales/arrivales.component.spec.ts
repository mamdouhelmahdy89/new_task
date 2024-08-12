import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalesComponent } from './arrivales.component';

describe('ArrivalesComponent', () => {
  let component: ArrivalesComponent;
  let fixture: ComponentFixture<ArrivalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
