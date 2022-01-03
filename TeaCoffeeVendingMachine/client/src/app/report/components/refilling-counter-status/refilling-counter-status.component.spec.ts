import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillingCounterStatusComponent } from './refilling-counter-status.component';

describe('RefillingCounterStatusComponent', () => {
  let component: RefillingCounterStatusComponent;
  let fixture: ComponentFixture<RefillingCounterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillingCounterStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillingCounterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
