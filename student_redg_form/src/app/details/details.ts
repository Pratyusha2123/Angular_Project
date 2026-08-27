import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class DetailsComponent {
  userData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.userData = navigation?.extras.state?.['data'];
  }
}
