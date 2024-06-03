document.addEventListener('DOMContentLoaded', async () => {
    const registerUserForm = document.getElementById('registerForm');

    registerUserForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('inputNewUsername').value.trim();
        const email = document.getElementById('inputNewEmail').value.trim();
        const password = document.getElementById('inputNewPassword').value.trim();

        try {
            const response = await fetch('/api/users/register', {
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
                window.location.href = '/homepage';
            } else {
                alert('Failed to create new account');
            }
        } catch (error) {
            console.error('Error creating new account', error);
            alert('An error occurred while creating your new account')
        }
    });
});
