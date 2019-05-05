import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { DynamicLayoutResolverService } from './dynamic-layout-resolver.service'

const ROUTES: Routes = [  
  {
    path: 'dashboard',
    component: DynamicContainerComponent,
    resolve: {dynamic:DynamicLayoutResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
