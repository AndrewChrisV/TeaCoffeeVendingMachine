import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportAllDaysComponent } from './sales-report-all-days.component';

describe('AllDaysSalesReportComponent', () => {
  let component: SalesReportAllDaysComponent;
  let fixture: ComponentFixture<SalesReportAllDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesReportAllDaysComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportAllDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
