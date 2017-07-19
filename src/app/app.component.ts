import { Component, OnInit } from '@angular/core';
import { MusicalBox } from './util';
import { Observable } from 'rxjs';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public box = this.getNewBox();
  public boxDisabled = false;

  public $myMusicalBoxList: Observable<Array<MusicalBox>>;
  public $publicMusicalBoxList: Observable<Array<MusicalBox>>;

  constructor(
    private databaseService: DatabaseService
  ){}

  ngOnInit() {
    this.$myMusicalBoxList = this.databaseService.$myMusicalBoxList();
    this.$publicMusicalBoxList = this.databaseService.$publicMusicalBoxList();
  }

  // Save new NewBox to DB
  public updateBox(newBox) {
    this.databaseService.$updateBox(newBox).subscribe((response: any) => {
      if (response.box) {
        this.box = response.box;
      }
      if (response.error) {
        console.log(response.error);
      }
    })
  }

  private getNewBox(): MusicalBox {
    return {
      name: 'My Musical Box',
      public: true,
      data: new Array(8).fill(new Array(25).fill(false)),
      id: null
    }
  }

  // Create a new box
  public addBox() {
    this.box = this.getNewBox();
  }

  public selectMyBox(box) {
    this.box = box;
    this.boxDisabled = false;
  }

  public selectPublicBox(box) {
    this.box = box;
    this.boxDisabled = true;
  }
}
