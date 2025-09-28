import { Component, OnInit } from '@angular/core';
import { ChatServiceService, Message } from '../../service/chat-service.service';

@Component({
  selector: 'app-chat-window',
  imports: [],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent implements OnInit {

  messages: Message[] = [];

  constructor(private chatService: ChatServiceService) { }

  ngOnInit(): void {
    this.chatService.message$.subscribe(messags => this.messages = messags)
  }

}
