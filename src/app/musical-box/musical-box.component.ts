import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicalBox } from '../util';
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-musical-box',
  templateUrl: './musical-box.component.html',
  styleUrls: ['./musical-box.component.css']
})
export class MusicalBoxComponent implements OnInit {
  @Input() public disabled: boolean;
  @Output() private updateBox = new EventEmitter<MusicalBox>();
  @select() private box$: Observable<any>;
  public box = {
    name: 'My Musical Box',
    public: true,
    data: new Array(8).fill(new Array(25).fill(false)),
    id: null
  };

  public currentNote = 0;
  private context = new AudioContext;
  private notes = [261.6, 329.6, 440, 493.9]

  constructor() {
  }

  ngOnInit() {
    this.restartCurrentNote()
    this.box$.subscribe(newBox => {
      this.box = newBox;
      this.restartCurrentNote();
    })
  }

  private restartCurrentNote() {
    const gainNode = this.context.createGain();
    gainNode.connect(this.context.destination);


    this.currentNote = 0;
    // Loop through the currentNote index
    const updateNote = () => {
      setTimeout(() => {
        this.currentNote++;
        if (this.currentNote === this.box.data[0].length) {
          this.currentNote = 0;
        }
        gainNode.gain.cancelScheduledValues(this.context.currentTime);
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        gainNode.gain.linearRampToValueAtTime(2.0, this.context.currentTime + 0.2);
        gainNode.gain.linearRampToValueAtTime(0.0, this.context.currentTime + 0.5);
        // Play the sounds that are on
        this.box.data.forEach((row, index) => {
          if (row[this.currentNote]) {
            const oscillator = this.context.createOscillator();
            oscillator.type = 'triangle';
            oscillator.frequency.value = this.notes[index % this.notes.length] * (Math.floor(index / this.notes.length) + 1)
            oscillator.connect(this.context.destination);
            oscillator.start(0);
            oscillator.connect(gainNode)
            oscillator.stop(this.context.currentTime + 0.5)
          }
        })
        updateNote();
      }, 500)
    };
    updateNote();
  }

  public toggleNote(row: number, col: number) {
    const newBox = Object.assign({}, this.box, { data: JSON.parse(JSON.stringify(this.box.data)) });
    newBox.data[row][col] = !newBox.data[row][col];
    this.updateBox.emit(newBox);
  }

  public onUpdateBox() {
    this.updateBox.emit(this.box);
  }

}
