document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });

        const data = await response.json();
        document.getElementById('message').textContent = data.message || 'Registration successful!';
    } catch (error) {
        document.getElementById('message').textContent = 'Error: ' + error.message;
    }
});