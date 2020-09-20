import {Injectable} from '@angular/core';
import {CodeLineModel} from '../models/codeLine.model';
import {CodeModel} from '../models/code.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  codeModel: CodeModel;
  omniStatements: any;

  constructor() {
    this.codeModel = {codeLines: [], traceList: []};
    this.omniStatements = {};
  }

  generateOmniStatements() {
    this.codeModel.codeLines.forEach(codeLine => {
      if (codeLine.statement) {
        this.omniStatements[codeLine.statement] = codeLine;
        this.omniStatements[codeLine.statement].activeLine = new Subject<any>();
      }
    });
  }

  setTraceToStatement() {
    this.codeModel.traceList.forEach(traceDtoModel => {
      if (this.omniStatements[traceDtoModel.statement]) {
        this.omniStatements[traceDtoModel.statement].order = traceDtoModel.orderNumber;
      }
    });
  }
}
