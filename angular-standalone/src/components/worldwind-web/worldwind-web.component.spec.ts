import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldwindWebComponent } from './worldwind-web.component';

describe('WorldwindWebComponent', () => {
  let component: WorldwindWebComponent;
  let fixture: ComponentFixture<WorldwindWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldwindWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldwindWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
