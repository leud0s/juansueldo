import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardsComponent } from './component/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillCardComponent } from './component/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    HomeComponent,
    WelcomeComponent,
    AboutComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
