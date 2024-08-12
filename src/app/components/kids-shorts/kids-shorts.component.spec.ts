import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsShortsComponent } from './kids-shorts.component';

describe('KidsShortsComponent', () => {
  let component: KidsShortsComponent;
  let fixture: ComponentFixture<KidsShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsShortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
