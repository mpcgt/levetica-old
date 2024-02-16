import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAbout } from './about/about.component';
import { AppAlternatives } from './alternatives/alternatives.component';
import { AppBlog } from './blog/blog.component';

const routes: Routes = [
  { path: 'about', component: AppAbout },
  { path: 'alternatives', component: AppAlternatives },
  { path: 'blog', component: AppBlog },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}