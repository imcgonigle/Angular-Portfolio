import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactComponent } from './core/contact/contact.component';
import { BannerComponent } from './banner/banner.component';

import "hammerjs";
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    SkillsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
