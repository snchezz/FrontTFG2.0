import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AgregarTutorialComponent } from './agregar-tutorial/agregar-tutorial.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TutorialDetallesComponent } from './tutorial-detalles/tutorial-detalles.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InforabidaComponent } from './inforabida/inforabida.component';
import { InfocarlomariaComponent } from './infocarlomaria/infocarlomaria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { ImgurComponent } from './imgur/imgur.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarTutorialComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    ListaTutorialesComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    TutorialDetallesComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    InforabidaComponent,
    InfocarlomariaComponent,
    ContactoComponent,
    BlogComponent,
    ImgurComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }