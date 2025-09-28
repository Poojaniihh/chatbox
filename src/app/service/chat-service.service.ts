import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Message {
  from: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private usersSource = new BehaviorSubject<string[]>(['User1', 'User2', 'User3']);
  users$ = this.usersSource.asObservable();

  private messagesSource = new BehaviorSubject<Message[]>([
    {from: 'User1', text: 'Hello'},
    {from: 'User2', text: 'Hello, Hi'},
    {from: 'User3', text: 'Hello, Bye!!'}
  ]);

  message$ = this.messagesSource.asObservable();

  sendMessage(from: string, text: string){
    const current = this.messagesSource.getValue();
    // this.messagesSource.next([current, {from, text }]);
    this.messagesSource.next([{from, text }]);
  }
//current not readable here
  constructor() { }
}
