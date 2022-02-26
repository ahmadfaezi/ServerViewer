import { Component } from '@angular/core';
import { Login } from './models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServerViewer';
  
  loginInfo:Login = {
    first_name:'Faezi',
    last_name:'Faisol',
    avatar:'faezi.jpeg',
    title:'Senior System Engineer'
};
}
