import { Directive, OnInit, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[resaltado]',
  standalone: true
})
export class ResaltadoDirective implements OnInit {

  private elemento = inject(ElementRef);

  ngOnInit(): void {
    this.elemento.nativeElement.style.backgroundColor = 'yellow';
  }

}
