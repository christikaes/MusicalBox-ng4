import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicalBox } from '../util';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store'
import { AppActions } from '../app.actions'

@Component({
  selector: 'app-musical-box-list',
  templateUrl: './musical-box-list.component.html',
  styleUrls: ['./musical-box-list.component.css']
})
export class MusicalBoxListComponent implements OnInit {
  @Input() musicalBoxList: MusicalBox[];
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private appActions: AppActions
  ) { }

  ngOnInit() {
  }

  public onSelectBox(box) {
    this.ngRedux.dispatch(this.appActions.setBox(box));
  }

}
