import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowModalComponent } from './follow-modal.component';

describe('FollowModalComponent', () => {
  let component: FollowModalComponent;
  let fixture: ComponentFixture<FollowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
