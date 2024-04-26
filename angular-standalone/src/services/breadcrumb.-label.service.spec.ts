import { TestBed } from '@angular/core/testing';

import { BreadcrumbLabelService } from './breadcrumb-label.service';

describe('BreadcrumbService', () => {
  let service: BreadcrumbLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
