import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token

    // Retrieve the token from storage
    const token = this.getToken();

    // If a token exists, decode it to get the payload, otherwise return null
    return token ? jwtDecode<JwtPayload>(token) : null;
  }
// Function to check if the user is logged in
loggedIn() {

   