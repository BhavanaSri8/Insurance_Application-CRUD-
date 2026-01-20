import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAdd } from './insurance-add';

describe('InsuranceAdd', () => {
  let component: InsuranceAdd;
  let fixture: ComponentFixture<InsuranceAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
