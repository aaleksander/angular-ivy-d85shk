import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RicoService } from './services/ricoService';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [RicoService],
})
export class AppModule {}
