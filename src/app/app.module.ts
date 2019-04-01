import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './services/theme.service';
import { NewsService } from './services/news.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {ShareButtonModule} from '@ngx-share/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent,


    // LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ShareButtonModule,
    FontAwesomeModule ,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [ThemeService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
