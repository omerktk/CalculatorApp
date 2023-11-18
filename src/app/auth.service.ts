import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInKey = 'isLoggedIn';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    this.initLoginState();
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public initLoginState() {
    const storedLoggedIn = localStorage.getItem(this.loggedInKey);
    if (storedLoggedIn === 'true') {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

  login() {
    // Replace with your actual authentication logic
    // Set isLoggedIn to true and store it in local storage
    localStorage.setItem(this.loggedInKey, 'true');
    this.loggedIn.next(true);
  }

  logout() {
    // Set isLoggedIn to false and remove it from local storage
    localStorage.setItem(this.loggedInKey, 'false');
    this.loggedIn.next(false);
  }
}
