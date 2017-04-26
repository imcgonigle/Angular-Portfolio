import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  
  public isNavOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isNavOpen = false;
  }

  goTo(location: string): void {
    window.location.hash = location;
    this.isNavOpen = false;
  }
}
