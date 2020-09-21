export interface BkpModel {
  statement: number;
  pgmvar1: string;
  pgmvar2: string;
  pgmvar3: string;
  pgmvar4: string;
  pgmvar5: string;
  pgmvar6: string;
  pgmvar7: string;
  pgmvar8: string;
  pgmvar9: string;
  pgmvar10: string;
}

export class BkpModelClass implements BkpModel {
  statement: number = null;
  pgmvar1 = null;
  pgmvar2 = null;
  pgmvar3 = null;
  pgmvar4 = null;
  pgmvar5 = null;
  pgmvar6 = null;
  pgmvar7 = null;
  pgmvar8 = null;
  pgmvar9 = null;
  pgmvar10 = null;
  constructor() {
  }
}
