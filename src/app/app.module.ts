import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OnamaComponent } from './onama/onama.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterPipesComponent } from './footer-pipes/footer-pipes.component';
import { KontaktFormaComponent } from './kontakt-forma/kontakt-forma.component';
import { OnamaPipesComponent } from './onama-pipes/onama-pipes.component';
import { PortfolioService } from './portfolio.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PocetnaComponent,
    PortfolioComponent,
    OnamaComponent,
    KontaktComponent,
    FooterPipesComponent,
    KontaktFormaComponent,
    OnamaPipesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'pocetna', pathMatch: 'full'
      },
      {
        path: 'pocetna',
        component: PocetnaComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'onama',
        component: OnamaComponent
      },
      {
        path: 'kontakt',
        component: KontaktComponent
      }
      
    ])
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent, NavigationComponent, FooterPipesComponent]
})
export class AppModule { }
