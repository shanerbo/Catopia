import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPhotoModalComponent } from './cat-photo-modal.component';

describe('CatPhotoModalComponent', () => {
  let component: CatPhotoModalComponent;
  let fixture: ComponentFixture<CatPhotoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatPhotoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPhotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
