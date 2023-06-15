import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './post/home-page/home-page.component';
import { ViewPageComponent } from './post/view-page/view-page.component';

const routes: Routes = [
  { path: '', loadChildren:() =>import('./post/post.module').then(m => m.PostModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
