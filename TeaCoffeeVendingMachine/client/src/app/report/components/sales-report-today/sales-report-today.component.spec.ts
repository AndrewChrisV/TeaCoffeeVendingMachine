import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportTodayComponent } from './sales-report-today.component';

describe('SalesReportTodayComponent', () => {
  let component: SalesReportTodayComponent;
  let fixture: ComponentFixture<SalesReportTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesReportTodayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
