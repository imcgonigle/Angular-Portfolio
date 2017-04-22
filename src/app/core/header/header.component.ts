import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  public isNavOpened: boolean;

  constructor() { }

  ngOnInit() {
    this.isNavOpened = false;
  }

  goTo(location: string): void {
    window.location.hash = location;
    this.isNavOpened = false;
  }
}
