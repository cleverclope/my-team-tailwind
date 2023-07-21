import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceScreenComponent } from './face-screen/face-screen.component';
import { ProductionLeadComponent } from './production-lead/production-lead.component';
import { DevelopersComponent } from './developers/developers.component';
import { TechSupportComponent } from './tech-support/tech-support.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceScreenComponent,
    ProductionLeadComponent,
    DevelopersComponent,
    TechSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
