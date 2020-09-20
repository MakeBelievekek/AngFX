import {CodeLineModel} from './codeLine.model';
import {TraceDtoModel} from './traceDto.model';

export interface CodeModel {
  codeLines: CodeLineModel[];
  traceList: TraceDtoModel[];
}
