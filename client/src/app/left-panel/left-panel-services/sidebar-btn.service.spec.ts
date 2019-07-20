import { TestBed } from '@angular/core/testing';

import { SidebarBtnService } from './sidebar-btn.service';

describe('SidebarBtnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarBtnService = TestBed.get(SidebarBtnService);
    expect(service).toBeTruthy();
  });
});
