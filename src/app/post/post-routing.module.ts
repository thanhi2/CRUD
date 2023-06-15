import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { CreateComponent } from './create/create.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'post/home-page', pathMatch: 'full'},
  { path: 'post/home-page', component: HomePageComponent },
  { path: 'post/:postId/view-page', component: ViewPageComponent },
  { path: 'post/create-page', component: CreateComponent },
  { path: 'post/:postId/edit-page', component: EditPageComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
