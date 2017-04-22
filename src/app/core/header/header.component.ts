import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  private isNavOpened = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = location;
    this.isNavOpened = false;
  }

}
