import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaFllowerComponent } from './insta-fllower.component';

describe('InstaFllowerComponent', () => {
  let component: InstaFllowerComponent;
  let fixture: ComponentFixture<InstaFllowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaFllowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaFllowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
