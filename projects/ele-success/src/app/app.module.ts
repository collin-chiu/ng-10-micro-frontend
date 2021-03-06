import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]

})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const counterElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('success-man', counterElement);
  }
 }
