import { Component } from '@angular/core';
import { PipeComponent } from './pipe/pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
