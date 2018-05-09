// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// internal components
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreativeComponent } from './creative/creative.component';
import { UpdatecreativeComponent } from './updatecreative/updatecreative.component';
import { NewcreativeComponent } from './newcreative/newcreative.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent },
  { path: 'newcreative', component: NewcreativeComponent },
  { path: 'detail/:id', component: UpdatecreativeComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CreativeComponent,
    UpdatecreativeComponent,
    NewcreativeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
