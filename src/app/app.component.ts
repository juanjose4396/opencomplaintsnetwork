import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogged= false;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.authService.isLogged().subscribe(
        result => {
          console.log(result);
          if (result) {
            this.isLogged = true;
          } else {
            this.isLogged = false;
          }
        },
        err => {
          console.log(err);
        }
    );
  }
  public logOut() {
    this.authService.logOut()
        .then( result => {
          console.log(result);
          this.router.navigateByUrl('/home');
;        })
        .catch( err => {
          console.log(err);
        });
  }
}
