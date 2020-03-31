import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() displayEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(content: string) {
    this.displayEvent.emit(content);
  }
}

