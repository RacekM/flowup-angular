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
  timestamp: bigint;

}

interface Author {
  name: string;
  color: string;
}
