import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.authService.getCurrentUser();
    const session: CognitoUserSession | null = user ? await user.getSignInUserSession() : null;
    if (session && session.getAccessToken()) {
      const groups = session.getAccessToken().decodePayload()['cognito:groups'] || [];
      return groups.includes("Admin");
    }
    this.router.navigate(['/']);
    return false;
  }
}

