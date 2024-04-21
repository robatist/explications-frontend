import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplicationListComponent } from './explication-list/explication-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExplicationDetailsComponent } from './explication-details/explication-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplicationListComponent,
    ExplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
