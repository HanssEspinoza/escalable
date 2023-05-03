import { Component } from '@angular/core';

@Component({
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent {
  public colorSelect: string = 'green';
  public tamanoFuente: number = 30;

  cambiarColor(col: string): void {
    this.colorSelect = col;
  }

  agrandar(): void {
    this.tamanoFuente ++;
  }

  reducir(): void {
    this.tamanoFuente --;
  }

}
