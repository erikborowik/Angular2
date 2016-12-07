import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer,
    OnInit
} from '@angular/core';

//selector usa selectores css
// Ex.: .(dot) class no html class="myHighlight2"
// [ ] atributo myHighlight2="value"
@Directive({
    selector: '.myHighlight2'
})
export class HighlightDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    @Input('background') backGroundColor: string;
    @Input('color') textColor: string;

    ngOnInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.backGroundColor);
        //this.renderer.setElementStyle(this.el.nativeElement, 'color', this.textColor);
    }
}