import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from './chatservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public chatService : ChatserviceService){}
  message : string = "";
  messageList : string[] = [];

  ngOnInit(): void {
      this.chatService.getMessage().subscribe((message:string)=>{
        this.messageList.push(message);
      });
  }
  sendMessage():void{
    this.chatService.sendMessage(this.message);
    this.message = "";
  }
}
