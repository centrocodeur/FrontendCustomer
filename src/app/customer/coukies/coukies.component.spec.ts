import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoukiesComponent } from './coukies.component';

describe('CoukiesComponent', () => {
  let component: CoukiesComponent;
  let fixture: ComponentFixture<CoukiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoukiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoukiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
