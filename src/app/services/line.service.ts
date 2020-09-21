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
  omniOrders: any;
  activeLine: CodeLineModel;

  constructor() {
    this.codeModel = {codeLines: [], traceList: []};
    this.omniStatements = {};
    this.omniOrders = {};
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
    this.codeModel.traceList.forEach(traceDtoModel => {
      this.omniOrders[traceDtoModel.orderNumber] = traceDtoModel;
    });
    console.log(this.omniOrders);
  }

  makeActiveLine(num: number, command: string): void {
    let lineToManipulate;
    if (command === 'statement') {
      lineToManipulate = this.omniStatements[num];
    }

    if (command === 'order') {
      lineToManipulate = this.omniStatements[this?.omniOrders[num]?.statement];
    }

    if (lineToManipulate) {
      lineToManipulate.lineBackgroundColor = 'yellowgreen';
      lineToManipulate.activeLine.next('makeActive');

      if (this.activeLine && this.activeLine !== lineToManipulate) {
        this.activeLine.lineBackgroundColor = 'black';
        this.activeLine.activeLine.next('deActivate');
      }

      this.activeLine = lineToManipulate;
    }
  }

}
