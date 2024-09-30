import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor() { }

  public message$ : BehaviorSubject<string> = new BehaviorSubject("");

  socket = io('http://localhost:3000');

  sendMessage(message : string):void{
    this.socket.emit('message',message);
  }
  getMessage():any{
    this.socket.on('message',(message)=>{
      this.message$.next(message);
    });
    return this.message$.asObservable();
  }
}
