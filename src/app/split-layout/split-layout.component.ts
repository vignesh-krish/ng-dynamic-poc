import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HolderDirective } from '../holder.directive';
import { AdItem } from '../list-item'
import { ListComponent } from '../list/list.component';
@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.component.html',
  styleUrls: ['./split-layout.component.scss']
})
export class SplitLayoutComponent implements OnInit {
  @Input() details;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild(HolderDirective) appHolder;
  ngOnInit() {
    this.loadComponent();
    this.loadComponent();
  }
  loadComponent() {
    
    let adItem = new AdItem(ListComponent, "test");

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appHolder.viewContainerRef;
    //viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = adItem.data;
  }
}
