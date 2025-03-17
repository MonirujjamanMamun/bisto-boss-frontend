export const setToken = (token) => {
  if (token) {
    localStorage.setItem('access-token', token);
  } else {
    console.error('Token is invalid or undefined');
  }
};
