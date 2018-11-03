import { TestBed, inject } from '@angular/core/testing';

import { JsonImportService } from './json-import.service';

describe('JsonImportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonImportService]
    });
  });

  it('should be created', inject([JsonImportService], (service: JsonImportService) => {
    expect(service).toBeTruthy();
  }));
});
