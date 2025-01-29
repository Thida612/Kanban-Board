import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    // Retrieve the token from storage
    const token = this.getToken();
    // If a token exists, decode it to get the payload, otherwise return null
    return token ? jwtDecode<JwtPayload>(token) : null;
// Function to check if the user is logged in
loggedIn(){

  // TODO: return a value that indicates if the user is logged in
  const token = this.getToken();
  // Check if the token exists and is not expired
  return !!token && !this.isTokenExpired(token);
}

isTokenExpired(token: string) {


   