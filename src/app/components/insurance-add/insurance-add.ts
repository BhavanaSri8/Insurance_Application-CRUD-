import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-insurance-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insurance-add.html',
  styleUrls: ['./insurance-add.css']
})
export class InsuranceAddComponent {

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

  submitForm() {
    this.insuranceService.add(this.insurance).subscribe(() => {
      alert('Insurance Policy Submitted Successfully');
      this.insurance = {
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
    });
  }
}
