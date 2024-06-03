document.addEventListener('DOMContentLoaded', async () => {
    const registerUserForm = document.getElementById('registerForm');
    const createAccount = document.getElementById('createAccountButton');

    // createAccount.addEventListener('click', (event) => {
    //     document.location.replace('/registerUsers');

        const username = document.getElementById('inputNewUsername').value.trim();
        const email = document.getElementById('inputNewEmail').value.trim();
        const password = document.getElementById('inputNewPassword').value.trim();

        try {
            const response = fetch('/api/registerUsers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    username, 
                    email,
                    password,
                })
            });

            if (response.ok) {
                document.location.replace('/homepage');
            } else {
                alert('Failed to create new account');
            }
        } catch (error) {
            console.error('Error creating new account', error);
            alert('An error occurred while creating your new account')
        }
    });
