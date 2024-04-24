import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchDashboardComponent } from './workbench-dashboard.component';

describe('WorkbenchDashboardComponent', () => {
  let component: WorkbenchDashboardComponent;
  let fixture: ComponentFixture<WorkbenchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkbenchDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkbenchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
