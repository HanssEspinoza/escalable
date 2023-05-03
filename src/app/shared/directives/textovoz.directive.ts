import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[textovoz]',
  standalone: true
})
export class TextovozDirective {

  private elemento = inject(ElementRef);

  @HostListener('mouseenter')
  entradaMouse() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.elemento.nativeElement.textContent));
  }

  @HostListener('mouseleave')
  salidaMouse(){
    speechSynthesis.cancel();
  }

}
