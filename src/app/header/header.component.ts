import { Component } from '@angular/core';
import { TimeComponent } from '../time/time.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.component.font-awesome.min.css']
})
export class HeaderComponent {

  register(){
    window.open("register.html", "register", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=550");
  }

  constructor() { 
  }

}
