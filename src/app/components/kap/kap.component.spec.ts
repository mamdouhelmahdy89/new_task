import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapComponent } from './kap.component';

describe('KapComponent', () => {
  let component: KapComponent;
  let fixture: ComponentFixture<KapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
