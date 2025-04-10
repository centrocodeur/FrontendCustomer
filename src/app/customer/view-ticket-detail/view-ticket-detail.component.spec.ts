import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketDetailComponent } from './view-ticket-detail.component';

describe('ViewTicketDetailComponent', () => {
  let component: ViewTicketDetailComponent;
  let fixture: ComponentFixture<ViewTicketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTicketDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
