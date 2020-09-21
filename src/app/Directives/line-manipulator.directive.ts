import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {CodeLineModel} from '../models/codeLine.model';
import {SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[appLineManipulator]'
})
export class LineManipulatorDirective implements OnInit {
  @Input() codeLine: CodeLineModel;
  @HostBinding('style.backgroundColor') backgroundColor: SafeStyle;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    if (this.codeLine.activeLine) {
      this.codeLine.activeLine.subscribe(value => {
        if (value === 'makeActive') {
          this.elRef.nativeElement.scrollIntoView({ block: 'center', inline: 'center'});
          this.backgroundColor = this.codeLine.lineBackgroundColor;
        } else if (value === 'deActivate') {
          this.backgroundColor = this.codeLine.lineBackgroundColor;
        }
      });
    }
  }

}
