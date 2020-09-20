import {Subject} from 'rxjs';

export interface CodeLineModel {
  lineNumber: string;
  code: string;
  statement: number;
  order: number;
  lineBackgroundColor: string;
  activeLine: Subject<any>;
}
