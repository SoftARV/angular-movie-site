import { TestBed, async, inject } from '@angular/core/testing';

import { MovieGuard } from './movie.guard';

describe('MovieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieGuard]
    });
  });

  it('should ...', inject([MovieGuard], (guard: MovieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
