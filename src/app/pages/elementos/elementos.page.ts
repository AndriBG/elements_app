import { Component, OnInit } from '@angular/core';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
})
export class ElementosPage {

  constructor(private data: DataService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }


}
