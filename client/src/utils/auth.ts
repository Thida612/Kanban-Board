import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
     // TODO: return the decoded token
     const token = this.getToken();
     return token ? jwtDecode<JwtPayload>(token) : null;
   }
 
   loggedIn() {
     // TODO: return a value that indicates if the user is logged in
     const token = this.getToken();
     return !!token && !this.isTokenExpired(token);
   }
   
   isTokenExpired(token: string) {

        // TODO: return a value that indicates if the token is expired
        try {
          const decoded = jwtDecode<JwtPayload>(token);
          if (decoded.exp) {
            const expirationTime = decoded.exp * 1000;
            return Date.now() > expirationTime;
          }
          return false;
        } catch (error) {
          return true;
        }
      }
    
      getToken(): string | null {

            // TODO: return the token
    return localStorage.getItem('id_token');
  }

  login(idToken: string) {

    
 