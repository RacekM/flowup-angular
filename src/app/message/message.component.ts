import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MessageWithLikesModel} from '../models/messageWithLikes.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  message: MessageWithLikesModel;

  @Output() messageLiked = new EventEmitter();

  get timestampString(): Date {
    const date = new Date();
    date.setMilliseconds(this.message.timestamp);
    return date;
  }

  like() {
    this.messageLiked.emit();
  }

}
