document.addEventListener('DOMContentLoaded', async () => {
    const registerUserForm = document.getElementById('registerForm');
    const createAccount = document.getElementById('create-account-btn');

    if (registerUserForm && createAccount) {
        createAccount.addEventListener('click', async (event) => {
            console.log('click')
            event.preventDefault();

            const username = document.getElementById('inputNewUsername').value.trim();
            const email = document.getElementById('inputNewEmail').value.trim();
            const password = document.getElementById('inputNewPassword').value.trim();

            try {
                const response = await fetch('/registerUser/', {
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
                    console.log('you did it')
                    document.location.replace ('/homepage');
                }

            } catch (error) {
                console.error('Error creating new account', error);
                alert('An error occurred while creating your new account')
            }
        });
    } else {
        console.error("Element with ID 'createAccountButton' not found.");
    }
});

