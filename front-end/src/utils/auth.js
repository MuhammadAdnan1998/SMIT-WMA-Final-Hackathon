// src/utils/auth.js

// Function to get the stored token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Function to save token to localStorage
  export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to remove token from localStorage
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  // Function to check if user is authenticated
  export const isAuthenticated = () => {
    const token = getToken();
    return token ? true : false;
  };
  