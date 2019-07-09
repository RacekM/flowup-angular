import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {


  @Output() appendUser = new EventEmitter();

  readonly form = this.formBuilder.group({
    name: ['Anonymous', Validators.required],
    color: [
      '#f5f242',
      [
        Validators.required,
        Validators.pattern(/^#[0-9a-f]{6}$/)
      ],
    ],
    text: ['',
      [
        Validators.required,
      ]
    ]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
  }

  submitMessage() {
    const value = this.form.value;
    const newMessage = {text: value.text, author: {name: value.name, color: value.color}, timestamp: new Date().getMilliseconds()};
    this.messageService.postMessage(newMessage);
    this.form.patchValue({text: ''});
  }


}
