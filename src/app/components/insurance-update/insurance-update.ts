import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-insurance-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insurance-update.html',
  styleUrls: ['./insurance-update.css']
})
export class InsuranceUpdateComponent {

  id!: string;

  insurance: Insurance = {
    policyName: '',
    policyType: '',
    policyHolder: '',
    email: '',
    phone: '',
    premium: 0,
    duration: 0,
    coverageAmount: 0,
    nomineeName: '',
    address: ''
  };

  constructor(private insuranceService: InsuranceService) {}

  // STEP 1: Load existing policy
  loadPolicy() {
    if (!this.id) {
      alert('Enter Policy ID first');
      return;
    }

    this.insuranceService.getById(this.id).subscribe({
      next: (data) => {
        this.insurance = data;
      },
      error: () => alert('Policy not found')
    });
  }

  // STEP 2: Update policy
  updatePolicy() {
    if (!this.id) {
      alert('Please load a policy first');
      return;
    }

    this.insuranceService.update(this.id, this.insurance).subscribe({
      next: () => alert('Insurance Updated Successfully'),
      error: () => alert('Update Failed')
    });
  }
}
