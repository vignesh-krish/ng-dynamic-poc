import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) { }
  public data;
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      response => {
        this.data = response.dynamic;
        console.log(this.data)

      }
    );
  }
  

}
