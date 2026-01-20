import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-insurance-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insurance-delete.html',
  styleUrls: ['./insurance-delete.css']
})
export class InsuranceDeleteComponent {

  id!: string;
  message = '';
  isError = false;

  constructor(private insuranceService: InsuranceService) {}
deletePolicy() {
  if (!this.id || this.id.trim() === '') {
    alert('Please enter a Policy ID');
    return;
  }

  this.insuranceService.getById(this.id).subscribe({
    next: () => {
      this.insuranceService.delete(this.id).subscribe(() => {
        alert('Insurance policy deleted successfully');  // ✅ POPUP
        this.id = '';
      });
    },
    error: () => {
      alert('Policy ID not found. Please check and try again.');
    }
  });
}
}