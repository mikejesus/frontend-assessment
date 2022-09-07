import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SplashScreenComponent } from './core/splash-screen/splash-screen.component';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { AboutSectionComponent } from './features/about-section/about-section.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SplashScreenComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
