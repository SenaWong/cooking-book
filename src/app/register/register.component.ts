import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private httpService: HttpService, private router: Router) { }


  onSubmit(name: string, number: number) {
    this.httpService.sendData({name: name, number: number})
        .subscribe(
      data => console.log(data)
    );
    this.router.navigate(['/thankyou']);

  }

}
