import { Component, inject, OnInit } from '@angular/core';

import { LetrasService } from '@modules/letras/services';

@Component({
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss']
})
export class LetrasComponent implements OnInit{
  public vector: number[] = [];

  private letrasService = inject(LetrasService);

  ngOnInit(): void {
    this.getVector();
  }

  getVector(): void  {
    this.vector = this.letrasService.getVector();
  }
}
