import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {CodeHttpService} from '../../../../services/code-http.service';
import {CodeModel} from '../../../../models/code.model';
import {LineService} from '../../../../services/line.service';

@Component({
  selector: 'app-file-widget',
  templateUrl: './file-widget.component.html',
  styleUrls: ['./file-widget.component.css']
})
export class FileWidgetComponent implements OnInit {
  @ViewChild('coblist') coblistElement: ElementRef;
  coblistPath: string;
  tracePath: string;

  constructor(private codeHttpService: CodeHttpService, private lineService: LineService) {
  }

  ngOnInit(): void {
    this.tracePath = 'C:\\Users\\Pupu\\Desktop\\res\\trace.txt';
    this.coblistPath = 'C:\\Users\\Pupu\\Desktop\\res\\kek.txt';
  }


  getCoblist() {
    if (this.coblistPath) {
      this.codeHttpService.postCooblistFileLocation({filePath: this.coblistPath}).subscribe(
        value => {
          this.lineService.codeModel.codeLines = (value as CodeModel).codeLines;
          this.lineService.generateOmniStatements();
        }
      );
    }
  }

  getTrace() {
    if (this.tracePath) {
      this.codeHttpService.postTraceFileLocation({filePath: this.tracePath}).subscribe(
        value => {
          this.lineService.codeModel.traceList = value.traceList;
          this.lineService.setTraceToStatement();
        }
      );
    }
  }
}

// C:\Users\Pupu\Desktop\res\kek.txt
// C:\Users\Pupu\Desktop\res\trace.txt
