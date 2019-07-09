import {Component} from '@angular/core';
import {MessageService} from '../message.service';
import {MessageModel} from '../models/MessageModel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  readonly messages$: Observable<MessageModel[]>;

  constructor(private messageService: MessageService) {
    this.messages$ =  messageService.messages$;
  }

}
