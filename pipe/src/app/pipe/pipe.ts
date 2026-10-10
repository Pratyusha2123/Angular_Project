import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MergeNamePipe } from '../merge-name-pipe';
import { SortPipe } from '../sort-pipe';
import { MathPipe } from '../math-pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MergeNamePipe,
    SortPipe,
    MathPipe
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class PipeComponent {
firstName = '';
  lastName = '';
  submitted = false;

 submit() {
    this.submitted = true;
  }

  numberInput = '';
  numbers: number[] = [];

  sortNumbers() {
    this.numbers = this.numberInput
      .split(',')
      .map(x => Number(x.trim()));
  }

num1 = 0;
  num2 = 0;

}