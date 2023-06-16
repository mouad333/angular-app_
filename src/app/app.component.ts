import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions : Array<any> = [
    {title : "Home" , route : "/home", icon : "house"},
    {title : "New Product" , route : "/newProduct", icon : "arrow-down-up"},
    {title : "Products" , route : "/products", icon : "plus-circle"}
  ]
  currentAction : any;

  setCurrentActiob(action: any) {
    this.currentAction=action;
  }
}
