import { TestBed } from '@angular/core/testing';

import { AnimalListResolver } from './animal-list.resolver';

describe('AnimalListResolver', () => {
  let resolver: AnimalListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnimalListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
