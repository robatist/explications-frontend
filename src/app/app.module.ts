import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for reactive forms
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ExplicationListComponent } from './explication-list/explication-list.component';
import { ExplicationDetailsComponent } from './explication-details/explication-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        ExplicationListComponent,
        ExplicationDetailsComponent
    ],
    bootstrap: [AppComponent], imports: [FormsModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
