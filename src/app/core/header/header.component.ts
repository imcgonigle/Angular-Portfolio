import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  public showShadow: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 0) {
      this.showShadow = true;
    } else if (this.showShadow && number < 10) {
      this.showShadow = false;
    }
  }

  ngOnInit() {
  }

}
