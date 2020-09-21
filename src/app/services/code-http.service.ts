import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CodeModel} from '../models/code.model';
import {FileLocationModel} from '../models/fileLocation.model';

const CODE_BASE_URL = 'http://localhost:8080/api/file';
@Injectable({
  providedIn: 'root'
})
export class CodeHttpService {

  constructor(private http: HttpClient) { }

  postCooblistFileLocation(fileLocation: FileLocationModel): Observable<CodeModel> {
    return this.http.post<CodeModel>(CODE_BASE_URL + '/coblist', fileLocation);
  }

  postTraceFileLocation(fileLocation: FileLocationModel): Observable<CodeModel> {
    return this.http.post<CodeModel>(CODE_BASE_URL + '/trace', fileLocation);
  }

  redirect(): Observable<any> {
    return this.http.get<any>(CODE_BASE_URL);
  }
}
