import { TestBed, inject } from '@angular/core/testing';

import { BlogAdminService } from './blog-admin.service';

describe('BlogAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogAdminService]
    });
  });

  it('should be created', inject([BlogAdminService], (service: BlogAdminService) => {
    expect(service).toBeTruthy();
  }));
});
