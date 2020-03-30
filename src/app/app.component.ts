import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styles: [`
//     h3 {
//       color: dodgerblue;
//     }
//   `]
})
export class AppComponent {
  detailsNeeded = false;
  buttonClicks: Array<Date> = [];

  toggleDisplay() {
    this.detailsNeeded = !this.detailsNeeded;
    this.buttonClicks.push(new Date());
  }

  getClicksColor(index: number) {
    return index > 4 ? 'blue' : 'none';
  }
}
