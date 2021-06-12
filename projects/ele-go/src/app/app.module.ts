import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { GoForItComponent } from './go-for-it/go-for-it.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    GoForItComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [GoForItComponent]
})
export class AppModule {

  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const counterElement = createCustomElement(GoForItComponent, { injector: this.injector });
    customElements.define('go-for-it', counterElement);
  }
}
