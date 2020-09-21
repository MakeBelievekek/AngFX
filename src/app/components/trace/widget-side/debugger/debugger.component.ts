import {Component, OnInit} from '@angular/core';
import {BkpModel, BkpModelClass} from '../../../../models/bkp.model';
import {MultiplePgmModel} from '../../../../models/multiplePgm.model';
import {DebuggerModel} from '../../../../models/debugger.model';
import {DebuggerHttpService} from '../../../../services/debugger-http.service';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.css']
})
export class DebuggerComponent implements OnInit {
  debuggerModelList: Array<DebuggerModel> = [];
  multiPgmDebugger: MultiplePgmModel;
  constructor(private debuggerHttpService: DebuggerHttpService) {
  }

  ngOnInit(): void {
    this.multiPgmDebugger = {debuggerModelList: [], batch: false};
  }

  getData() {
    this.multiPgmDebugger.debuggerModelList = this.debuggerModelList;
    console.log('debuggerModel: ', this.multiPgmDebugger);
    this.debuggerHttpService.postDebug(this.multiPgmDebugger).subscribe();
  }

  handleBkp(command: string, debuggerModelNumber?: number, debuggerModelListNumber?: number): void {
    console.log('modelNumber: ', debuggerModelNumber);
    console.log('listNumber: ', debuggerModelListNumber);
    if (command === 'add') {
      this.debuggerModelList[debuggerModelNumber].bkpList.push(new BkpModelClass());
      console.log(this.debuggerModelList[debuggerModelNumber]);
    }
    if (command === 'rmv') {
      console.log(debuggerModelListNumber);
      this.debuggerModelList[debuggerModelNumber].bkpList.splice(debuggerModelListNumber, 1);
    }

  }

  handlePgm(command: string, modelNumber?: number): void {
    if (command === 'add') {
      this.debuggerModelList.push({program: '', bkpList: [new BkpModelClass()]});
    }
    if (command === 'rmv') {
      this.debuggerModelList.splice(modelNumber, 1);
    }
  }

}

//
