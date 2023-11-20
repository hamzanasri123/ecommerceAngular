import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserSubject: BehaviorSubject<any>
  private cureentUser: Observable<any>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || ''));
    this.cureentUser = this.currentUserSubject.asObservable()
  }

  public get CurrentUserValue(): any {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)

        }
        return user
      }))
  }

  logout(){
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null)

  }


  isLoggedIn():boolean{
    return this.CurrentUserValue && this.CurrentUserValue.token ? true : false
  }




}
