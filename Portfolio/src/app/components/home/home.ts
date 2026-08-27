import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Check this import

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <-- Check this in imports array
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}