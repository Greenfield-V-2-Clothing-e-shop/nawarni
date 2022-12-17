import { useEffect } from 'react';
import Router from 'next/router';

function Logout() {
  useEffect(() => {
    // Add an event listener that listens for the logout action
    window.addEventListener('logout', () => {
      // When the logout action is triggered, redirect the user to the login page
      Router.push('/login');
    });
  }, []);

  return null;
}
