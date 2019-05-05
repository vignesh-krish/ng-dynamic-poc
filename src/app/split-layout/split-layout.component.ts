import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HolderDirective } from '../holder.directive';
import { AdItem } from '../list-item'
import { ListComponent } from '../list/list.component';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.component.html',
  styleUrls: ['./split-layout.component.scss']
})
export class SplitLayoutComponent implements OnInit {
  @Input() details;
  //  classesMap = {
  //   ListComponent: ListComponent,
  //   DetailsComponent: DetailsComponent
  // }
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild(HolderDirective) appHolder;
  public component1 : string;
  public component2 : string;
  ngOnInit() {
    console.log(this.details.widgets[1])
    //https://stackoverflow.com/questions/15338610/dynamically-loading-a-typescript-class-reflection-for-typescript

    //https://stackoverflow.com/questions/49168240/angular-5-instantiate-a-component-from-its-name-as-a-string
    
    // this.component1 = ((this.details.widgets[0].widget + "Component"));
    // this.component2 = ((this.details.widgets[1].widget + "Component"));
    // this.loadComponent(new (<any>this.classesMap)[this.component1]());
    // this.loadComponent(new (<any>this.classesMap)[this.component2]());
    this.loadComponent(ListComponent);
    this.loadComponent(DetailsComponent);
  } 
  loadComponent(cmp) {
   // console.log(cmp)
    let adItem = new AdItem(cmp, "test");

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appHolder.viewContainerRef;
    //viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = adItem.data;
  }
}
