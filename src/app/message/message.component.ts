import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  text: string;
  @Input()
  author: Author;
  @Input()
  timestamp: number;

  get timestampString(): Date {
    const date = new Date();
    date.setMilliseconds(this.timestamp);
    return date;
  }

}

interface Author {
  name: string;
  color: string;
}
