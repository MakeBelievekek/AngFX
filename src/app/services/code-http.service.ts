import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CodeModel} from '../models/code.model';
import {FileLocationModel} from '../models/fileLocation.model';

const CODE_BASE_URL = 'http://localhost:8080/api/coblist';
@Injectable({
  providedIn: 'root'
})
export class CodeHttpService {

  constructor(private http: HttpClient) { }

  postCoobitFileLocation(fileLocation: FileLocationModel): Observable<CodeModel> {
    return this.http.post<CodeModel>(CODE_BASE_URL, fileLocation);
  }
}
