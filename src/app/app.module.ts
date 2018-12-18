import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideoutlistComponent } from './hideoutlist/hideoutlist.component';
import { HideoutDetailComponent } from './hideout-detail/hideout-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HideoutlistComponent,
    HideoutDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
