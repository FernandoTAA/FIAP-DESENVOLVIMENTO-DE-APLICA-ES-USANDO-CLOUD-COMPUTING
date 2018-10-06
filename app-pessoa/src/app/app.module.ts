import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '../../node_modules/@angular/http';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TableModule
  ],
  providers: [
    ConfigService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
