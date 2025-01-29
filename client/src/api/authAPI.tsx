import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
     // Sending a POST request to the '/auth/login' endpoint with user information
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

     // Checking if the response is not OK (status code is not in the range 200-299)

    if (!response.ok) {
      throw new Error('Failed to login');
    }

     // Parsing the response data as JSON

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};


export { login };



    