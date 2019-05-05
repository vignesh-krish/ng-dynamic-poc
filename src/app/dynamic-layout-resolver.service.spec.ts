import { TestBed } from '@angular/core/testing';

import { DynamicLayoutResolverService } from './dynamic-layout-resolver.service';

describe('DynamicLayoutResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicLayoutResolverService = TestBed.get(DynamicLayoutResolverService);
    expect(service).toBeTruthy();
  });
});
