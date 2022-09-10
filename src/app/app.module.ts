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
import { StatisticsSectionComponent } from './features/statistics-section/statistics-section.component';
import { QuestionsAndAnswersComponent } from './features/questions-and-answers/questions-and-answers.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { ClientsComponent } from './features/clients/clients.component';
import { NgwWowModule } from 'ngx-wow';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SplashScreenComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProductListComponent,
    ProductCardComponent,
    StatisticsSectionComponent,
    QuestionsAndAnswersComponent,
    AccordionComponent,
    TestimonialsComponent,
    ClientsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgwWowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
