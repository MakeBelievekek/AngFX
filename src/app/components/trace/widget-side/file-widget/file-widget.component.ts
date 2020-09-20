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
  codeModel: CodeModel;

  constructor(private codeHttpService: CodeHttpService, private lineService: LineService) {
  }

  ngOnInit(): void {
  }


  getCoblist() {
    if (this.coblistPath) {
      this.codeHttpService.postCoobitFileLocation({filePath: this.coblistPath}).subscribe(
        value => {
          this.lineService.codeModel = (value as CodeModel);
          console.log('ez az amit nézel: ', this.lineService.codeModel);
        }
      );
    }
  }
}

// C:\Users\Pupu\Desktop\res\kek.txt
