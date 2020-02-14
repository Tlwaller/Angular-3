import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})

export class CharacterCardComponent implements OnInit {
  @Input() name:string;
  @Input() nickname:string;
  @Input() charID:string;
  @Output() deleteChar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteChar.emit(this.charID);
  }

}
