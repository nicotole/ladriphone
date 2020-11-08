import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadriphoneProductsComponent } from './ladriphone-products.component';

describe('LadriphoneProductsComponent', () => {
  let component: LadriphoneProductsComponent;
  let fixture: ComponentFixture<LadriphoneProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadriphoneProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadriphoneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
