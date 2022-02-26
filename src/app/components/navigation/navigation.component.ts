import { Component, OnInit, Input } from '@angular/core';
import {Login} from "../../models/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public loginInfo:Login = {
    first_name:'Faezi',
    last_name:'Faisol',
    avatar:'faezi.jpeg',
    title:'Senior System Engineer'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
}



}
