import {Component} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  readonly messages = this.messageService.getMessages();

  constructor(private messageService: MessageService) {
  }

}
