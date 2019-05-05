import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { DynamicLayoutResolverService } from './dynamic-layout-resolver.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HolderDirective } from './holder.directive';
import { SplitLayoutComponent } from './split-layout/split-layout.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContainerComponent,
    HolderDirective,
    SplitLayoutComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [ListComponent],
  providers: [ DynamicLayoutResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
