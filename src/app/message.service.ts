import {Injectable} from '@angular/core';
import {MessageModel} from './models/MessageModel';
import {BehaviorSubject, Observable} from 'rxjs';
import {WebSocketSubject} from 'rxjs/webSocket';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private socket = new WebSocketSubject<MessageModel>('ws://35.198.179.24/messages/stream');
  private messagesState$ = new BehaviorSubject<MessageModel[]>([]);
  messages$: Observable<MessageModel[]> = this.messagesState$.pipe(
    map(messages => [...messages].reverse()));

  constructor() {
    this.socket.subscribe(newMessage => {
      const newMessages = [...this.messagesState$.value, newMessage];
      this.messagesState$.next(newMessages);
    });
  }

  postMessage(newMessage: MessageModel) {
    this.socket.next(newMessage);
  }
}
