import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledLaunchesComponent } from './scheduled-launches.component';

describe('ScheduledLaunchesComponent', () => {
  let component: ScheduledLaunchesComponent;
  let fixture: ComponentFixture<ScheduledLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledLaunchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
