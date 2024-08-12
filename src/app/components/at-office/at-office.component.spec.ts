import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOfficeComponent } from './at-office.component';

describe('AtOfficeComponent', () => {
  let component: AtOfficeComponent;
  let fixture: ComponentFixture<AtOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
