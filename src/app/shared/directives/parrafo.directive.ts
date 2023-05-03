import { Directive, Input, inject, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[libParrafo]',
  standalone: true
})
export class ParrafoDirective implements OnInit, OnChanges {

  @Input('libParrafo') colorResaltado!: string;
  @Input('tamano') tam: number = 0;

  private elemento = inject(ElementRef);

  ngOnInit(): void {
    this.actualizar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizar();
  }

  actualizar() {
    if (this.colorResaltado != null)
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    else
      this.elemento.nativeElement.style.backgroundColor = 'yellow';

    if (this.tam > 0)
      this.elemento.nativeElement.style.fontSize = `${this.tam}px`;
  }


}
