import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDelete } from './insurance-delete';

describe('InsuranceDelete', () => {
  let component: InsuranceDelete;
  let fixture: ComponentFixture<InsuranceDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
