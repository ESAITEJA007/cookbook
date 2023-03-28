import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.Color') fontsize: string;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
    this.fontsize = 'white';
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','transparent');
  }

}
