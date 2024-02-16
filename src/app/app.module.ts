import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAbout } from './about/about.component';
import { AppAlternatives } from './alternatives/alternatives.component';
import { AppBlog } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, AppAbout, AppAlternatives, AppBlog],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}