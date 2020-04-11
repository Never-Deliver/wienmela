import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2';
import { HeaderModule } from './modules/header-module/header.module';
import { FooterModule } from './modules/footer-module/footer.module';
import { RouterModule } from '@angular/router';
import { PageNotComponent } from './app.pagenot-found';
import { AppLayOutComponent } from './modules/layout-module/component/app-layout/app-layout.component';
import { HomeComponent } from './modules/home-module/component/home-component/home.component';
import { HeaderComponent } from './modules/header-module/component/header-component/header-component.component';

@NgModule({
  
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'letslearn-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    AppLayOutComponent,
    PageNotComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
