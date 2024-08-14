import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
Act: {Title: string; Description: string; Add: boolean}[] = [];

  addTask(Title: string, Description: string, Add: boolean){
    this.Act.push({Title, Description, Add})
  }
  constructor() {}
}
