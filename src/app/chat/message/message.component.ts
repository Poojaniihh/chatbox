import { Component } from '@angular/core';
import { ChatServiceService } from '../../service/chat-service.service';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  text: string = '';
  currentUser: string = 'User1';

  constructor(private chatService: ChatServiceService) { }

  sendMsg(){
    if (this.text.trim()) {
      this.chatService.sendMessage(this.currentUser, this.text);
      this.text = '';
    }
  }
}
