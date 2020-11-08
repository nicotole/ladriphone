import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadriphoneAboutComponent } from './ladriphone-about.component';

describe('LadriphoneAboutComponent', () => {
  let component: LadriphoneAboutComponent;
  let fixture: ComponentFixture<LadriphoneAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadriphoneAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadriphoneAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
