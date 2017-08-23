import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    // method signIn takes parameters (username, password, rememberMe) and returns Observable
    signIn : (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut : () => Observable<any>;
    // changePassword :
}