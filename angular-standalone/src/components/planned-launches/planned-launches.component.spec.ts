import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedLaunchesComponent } from './planned-launches.component';

describe('PlannedLaunchesComponent', () => {
  let component: PlannedLaunchesComponent;
  let fixture: ComponentFixture<PlannedLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedLaunchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
