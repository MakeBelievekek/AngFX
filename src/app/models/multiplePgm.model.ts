import {DebuggerModel} from './debugger.model';

export interface MultiplePgmModel {
  debuggerModelList: Array<DebuggerModel>;
  batch: boolean;
}
