import {Component, Input} from '@angular/core';
import {MessageModel} from '../models/MessageModel';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  message: MessageModel;

  get timestampString(): Date {
    const date = new Date();
    date.setMilliseconds(this.message.timestamp);
    return date;
  }

}
