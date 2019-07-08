import {Component} from '@angular/core';
import {MessageService} from '../message.service';
import {MessageModel} from '../models/MessageModel';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  messages: MessageModel[];

  constructor(private messageService: MessageService) {
    this.messageService.messages$.subscribe(newMessages => this.refreshMessages(newMessages));
  }

  refreshMessages(newMessages: MessageModel[]) {
    this.messages = newMessages;
  }

}
