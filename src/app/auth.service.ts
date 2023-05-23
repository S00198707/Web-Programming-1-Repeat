import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-west-1_sAVcBMpmh',
  ClientId: '61e8790kg3tsmvm52bck3i5dbt'
};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(email: string, password: string): Promise<CognitoUserSession> {
    const authenticationData = {
      Username: email,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result),
        onFailure: err => reject(err)
      });
    });
  }

  signOut(): void {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
    }
  }
  getCurrentUser(): Promise<CognitoUser | null> {
    const cognitoUser = userPool.getCurrentUser();
    return new Promise((resolve, reject) => {
      if (cognitoUser) {
        cognitoUser.getSession((err: any, session: { isValid: () => any; }) => {
          if (err) {
            reject(err);
          } else if (!session.isValid()) {
            resolve(null);
          } else {
            resolve(cognitoUser);
          }
        });
      } else {
        resolve(null);
      }
    });
  }

  isAuthenticated(): boolean {
    const cognitoUser = userPool.getCurrentUser();
    return cognitoUser !== null;
  }
}




