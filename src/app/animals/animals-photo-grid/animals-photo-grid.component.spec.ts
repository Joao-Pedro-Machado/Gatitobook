import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsPhotoGridComponent } from './animals-photo-grid.component';

describe('AnimalsPhotoGridComponent', () => {
  let component: AnimalsPhotoGridComponent;
  let fixture: ComponentFixture<AnimalsPhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsPhotoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsPhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
