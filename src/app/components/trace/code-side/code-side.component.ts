import {Component, OnInit} from '@angular/core';
import {CodeHttpService} from '../../../services/code-http.service';
import {log} from 'util';
import {LineService} from '../../../services/line.service';
import {CodeModel} from '../../../models/code.model';

@Component({
  selector: 'app-code-side',
  templateUrl: './code-side.component.html',
  styleUrls: ['./code-side.component.css']
})
export class CodeSideComponent implements OnInit {
  codeModel: CodeModel;

  constructor(private codeHttpService: CodeHttpService, private lineService: LineService) {
  }

  ngOnInit(): void {
    this.codeModel = this.lineService.codeModel;
  }

}
