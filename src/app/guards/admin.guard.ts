import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {

  }

  canActivate(): boolean {
    const user = this.authService.CurrentUserValue
    if (user && user.role === "admin") {
      return true
    } else {
      this.route.navigate(['/'])
      return false;
    }
  }
}
