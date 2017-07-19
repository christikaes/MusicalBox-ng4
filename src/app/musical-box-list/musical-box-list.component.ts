import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicalBox } from '../util';

@Component({
  selector: 'app-musical-box-list',
  templateUrl: './musical-box-list.component.html',
  styleUrls: ['./musical-box-list.component.css']
})
export class MusicalBoxListComponent implements OnInit {
  @Input() musicalBoxList: MusicalBox[];
  @Output() selectBox = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public onSelectBox(index){
    this.selectBox.emit(index);
  }

}
