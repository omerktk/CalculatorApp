import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    // Replace this with your actual authentication logic
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
