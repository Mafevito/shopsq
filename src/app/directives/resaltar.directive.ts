import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit {
  constructor(private elRef:ElementRef, private renderer: Renderer2) {}

  @Input('resaltar') plan : string = '';
  ngOnInit(){
    if(this.plan === 'pagado') {
       this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
       this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');

    }
  }
}


// ElementRef, permite crear una referencia de Html pero podemos manipular en ts, es un modulo de angular.
// renderer, manipular tambien html pero más dirijo asl css.
// setStyle, tiene 3 atributos,(elemento nativo, atributo css, valor)
