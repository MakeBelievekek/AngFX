import {Component, OnInit} from '@angular/core';
import {LineService} from '../../../../services/line.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  singleStatement: number;
  startingOrder: number;

  constructor(private lineService: LineService) {
  }

  ngOnInit(): void {
    this.singleStatement = 322;
    this.startingOrder = 322;
  }

  goToStatement() {
    this.lineService.makeActiveLine(this.singleStatement, 'statement');
  }


  nextStatement() {
    this.lineService.makeActiveLine(++this.startingOrder, 'order');
  }

  previousStatement() {
    this.lineService.makeActiveLine(--this.startingOrder, 'order');
  }
}
