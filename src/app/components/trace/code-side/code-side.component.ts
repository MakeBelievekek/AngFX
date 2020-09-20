import {Component, OnInit} from '@angular/core';
import {CodeHttpService} from '../../../services/code-http.service';
import {log} from 'util';

@Component({
  selector: 'app-code-side',
  templateUrl: './code-side.component.html',
  styleUrls: ['./code-side.component.css']
})
export class CodeSideComponent implements OnInit {

  constructor(private codeHttpService: CodeHttpService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.codeHttpService.postCoobitFileLocation({filePath: 'hello world!'}).subscribe(
      value => console.log('sucess')
    );
  }
}
