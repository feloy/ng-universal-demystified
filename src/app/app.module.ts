import { SeoPageIdGuard } from './seo-page-id-guard';
import { SeoGuard } from './seo.guard';
import { SeoService } from './seo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { PageIdComponent } from './page-id/page-id.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    PageIdComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-demystified'
    }),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        canActivate: [SeoGuard],
        data: {
          title: ['Home page'],
          desc: 'My First Static Website built with Angular Universal'
        }
      },
      {
        path: 'page.html', component: PageComponent,
        canActivate: [SeoGuard],
        data: {
          title: ['Elements List'],
          desc: 'My List of elements in my Static Website'
        }
      },
      {
        path: 'page/:id', component: PageIdComponent,
        canActivate: [SeoPageIdGuard]
      }
    ])
  ],
  providers: [
    SeoService, SeoGuard, SeoPageIdGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
