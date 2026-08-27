import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  fullName = "pratyusha Dhal";
  email = "";
  phone = "";
  age = "";
  gender = "Female";
  address = "Bhubaneswar, Odisha";

  constructor(private router: Router) {}

  submitForm() {
    const formData = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      age: this.age,
      gender: this.gender,
      address: this.address
    };

    // Navigation state ke sath naye page par data bhejna
    this.router.navigate(['/details'], { state: { data: formData } });
  }
}
