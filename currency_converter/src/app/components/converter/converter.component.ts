import { Component } from '@angular/core';

import { ConverterService } from '../../services/converter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {

  constructor (private converterservice: ConverterService) {}

}
