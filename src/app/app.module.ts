import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard-page', pathMatch: 'full' },
  { path: 'dashboard-page', component: DashboardPageComponent },
  { path: 'feed-page', component: FeedPageComponent }
  // { path: 'new', component: NewComponent },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    FeedPageComponent
    
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
