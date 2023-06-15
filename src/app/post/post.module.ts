import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateComponent } from './create/create.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    CreateComponent,
    EditPageComponent,
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
