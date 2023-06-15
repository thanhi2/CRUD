import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './post/post.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPageComponent } from './post/edit-page/edit-page.component';
import { HomePageComponent } from './post/home-page/home-page.component';
import { ViewPageComponent } from './post/view-page/view-page.component';
import { CreateComponent } from './post/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomePageComponent,
    // EditPageComponent,
    // CreateComponent,
    // ViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
