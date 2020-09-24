import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileLocationModel} from '../models/fileLocation.model';
import {Observable} from 'rxjs';
import {CodeModel} from '../models/code.model';
import {MultiplePgmModel} from '../models/multiplePgm.model';
import {DebuggerModel} from '../models/debugger.model';

const CODE_BASE_URL = 'http://localhost:8080/api/debug';


@Injectable({
  providedIn: 'root'
})
export class DebuggerHttpService {

  constructor(private http: HttpClient) {
  }

  postDebug(debugData: MultiplePgmModel): Observable<any> {
    return this.http.post<any>(CODE_BASE_URL + '/online', debugData);
  }

  sendBkp(debuggerM: DebuggerModel): Observable<any> {
    return this.http.post<any>(CODE_BASE_URL + '/bkp', debuggerM);
  }
}
