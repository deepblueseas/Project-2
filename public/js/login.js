const loginForm = document.getElementById('loginForm');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to log in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  }
};

loginForm.addEventListener('submit', loginFormHandler);

const createAccountButton = document.querySelector('#createAccountButton');

// Function to handle clicking the create new account button
const createAccountHandler = () => {
    // Redirect the user to the registerUser page
    window.location.href = '/registerUser';
};

// Add event listener to the create new account button
createAccountButton.addEventListener('click', createAccountHandler);