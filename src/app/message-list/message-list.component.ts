import {Component} from '@angular/core';
import {MessageService} from '../message.service';
import {combineLatest, Observable} from 'rxjs';
import {MessageWithLikesModel} from '../models/messageWithLikes.model';
import {LikesService} from '../likes.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  readonly messages$: Observable<MessageWithLikesModel[]>;

  constructor(
    private messageService: MessageService,
    private likesService: LikesService) {

    this.messages$ = combineLatest(messageService.messages$, likesService.likes$)
      .pipe(
        map(([msgs, likes]) => {
          return msgs.map(msg => {
              let numOfLikes = 0;
              likes.forEach(like => {
                if (like.messageId === msg.id) {
                  numOfLikes++;
                }
              });
              return {...msg, likes: numOfLikes};
            }
          );
        }));

  }

  sendLike(messageId: string) {
    this.likesService.sendLike(messageId);
  }

  trackById(index: number, message: MessageWithLikesModel) {
    return message.id;
  }

}
