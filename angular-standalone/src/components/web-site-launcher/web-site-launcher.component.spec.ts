import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteLauncherComponent } from './web-site-launcher.component';

describe('WebSiteLauncherComponent', () => {
  let component: WebSiteLauncherComponent;
  let fixture: ComponentFixture<WebSiteLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSiteLauncherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebSiteLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
