import {BkpModel} from './bkp.model';

export interface DebuggerModel {
  program: string;
  bkpList: Array<BkpModel>;
}
