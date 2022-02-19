import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { DaFareComponent } from './pages/da-fare/da-fare.component';

const routes : Route[]=[
  {
    path:'completed',
    component : CompletedComponent

  },
  {
    path:'daFare',
    component : DaFareComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    DaFareComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
