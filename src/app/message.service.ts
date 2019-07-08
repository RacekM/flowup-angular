import {Injectable} from '@angular/core';
import {MessageModel} from './models/MessageModel';
import {randomColor} from './Utils';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  getMessages(): MessageModel[] {
    return [
      {text: '1', timestamp: 12345, author: {name: 'Author1', color: randomColor()}},
      {text: '2', timestamp: 12345, author: {name: 'Author2', color: randomColor()}},
      {text: '3', timestamp: 12345, author: {name: 'Author3', color: randomColor()}},
      {text: '4', timestamp: 12345, author: {name: 'Author4', color: randomColor()}},
      {text: '5', timestamp: 12345, author: {name: 'Author5', color: randomColor()}},
      {text: '6', timestamp: 12345, author: {name: 'Author6', color: randomColor()}},
      {text: '7', timestamp: 12345, author: {name: 'Author7', color: randomColor()}},
      {text: '8', timestamp: 12345, author: {name: 'Author8', color: randomColor()}}
    ];
  }
}
