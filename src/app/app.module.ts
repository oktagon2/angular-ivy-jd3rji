import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AsyncObservablePipeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
