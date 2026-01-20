import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-insurance-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-get.html',
  styleUrls: ['./insurance-get.css']
})
export class InsuranceGetComponent implements OnInit {

  insurances: Insurance[] = [];

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit() {
    this.insuranceService.getAll().subscribe({
      next: (data) => {
        console.log('API DATA:', data);   // 👈 YOU SHOULD SEE DATA
        this.insurances = data;
      },
      error: (err) => console.error(err)
    });
  }
}

