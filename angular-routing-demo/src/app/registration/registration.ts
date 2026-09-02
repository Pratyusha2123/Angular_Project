import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  student = {
    name: '',
    regNo: '',
    photo: '',
    department: '',
    bloodGroup: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: ''
  };

  constructor(private router: Router) {}

  onPhotoSelected(event: Event) {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      const file = input.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.student.photo = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  submitForm() {

    if (
      this.student.name &&
      this.student.regNo &&
      this.student.photo &&
      this.student.department &&
      this.student.bloodGroup &&
      this.student.email &&
      this.student.phone &&
      this.student.dob &&
      this.student.gender &&
      this.student.address
    ) {

      this.router.navigate(['/student-details'], {
        state: {
          student: this.student
        }
      });

    } else {

      alert('Please fill all the details.');

    }
  }
}