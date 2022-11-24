import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOptionClickEffect]'
})
export class OptionClickEffectDirective {
  @Input() correctChoice: Boolean;

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }

  @HostListener("click") answer() {
    if (this.correctChoice === true) {
      this.renderer.setStyle(this.elementReference.nativeElement, "background", "green");
    } else {
      this.renderer.setStyle(this.elementReference.nativeElement, "background", "red");
    }
  }
}
