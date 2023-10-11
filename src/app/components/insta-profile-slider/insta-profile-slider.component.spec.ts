import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaProfileSliderComponent } from './insta-profile-slider.component';

describe('InstaProfileSliderComponent', () => {
  let component: InstaProfileSliderComponent;
  let fixture: ComponentFixture<InstaProfileSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaProfileSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaProfileSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
