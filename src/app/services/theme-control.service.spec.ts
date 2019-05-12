import { TestBed, inject } from '@angular/core/testing';

import { ThemeControlService } from './theme-control.service';

describe('ThemeControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeControlService]
    });
  });

  it('should be created', inject([ThemeControlService], (service: ThemeControlService) => {
    expect(service).toBeTruthy();
  }));
});
