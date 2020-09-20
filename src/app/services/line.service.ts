import {Injectable} from '@angular/core';
import {CodeLineModel} from '../models/codeLine.model';
import {CodeModel} from '../models/code.model';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  lineModel: CodeLineModel;
  codeModel: CodeModel;

  constructor() {
    this.lineModel = {
      lineNumber: 100,
      code: '1234567890123456789012345678901234567890',
      order: 100,
      statement: 100,
      lineBackgroundColor: 'undefined'
    };
  }
}
