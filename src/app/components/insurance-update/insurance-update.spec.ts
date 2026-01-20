import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceUpdate } from './insurance-update';

describe('InsuranceUpdate', () => {
  let component: InsuranceUpdate;
  let fixture: ComponentFixture<InsuranceUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
