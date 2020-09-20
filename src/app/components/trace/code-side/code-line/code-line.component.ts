import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {LineService} from '../../../../services/line.service';
import {SafeStyle} from '@angular/platform-browser';
import {CodeLineModel} from '../../../../models/codeLine.model';
import {CodeModel} from '../../../../models/code.model';

@Component({
  selector: 'app-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.css']
})
export class CodeLineComponent implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: SafeStyle;
  @Input() setBackgroundColor: string;
  @Input() codeLine: CodeLineModel;
  @Input() codeModel: CodeModel;

  constructor(private lineService: LineService) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.setBackgroundColor;
    this.codeLine = this.lineService.lineModel;
  }

}
