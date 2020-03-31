import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainContent = 'recipes';

  setMainContent(content: string) {
    this.mainContent = content;
  }

}
