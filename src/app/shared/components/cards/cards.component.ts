import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

}
