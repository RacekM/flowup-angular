import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageComponent} from './message/message.component';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageFormComponent} from './message-form/message-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmojiPipe } from './emoji.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageFormComponent,
    EmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
