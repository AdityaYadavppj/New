document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('userType').value;

  if (!userType) {
    alert('Please select Buyer or Seller.');
    return;
  }

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, userType })
  });

  const result = await response.json();

  if (result.success) {
    alert('Login successful!');
    window.location.href = userType === 'seller' ? '/seller/dashboard' : '/home';
  } else {
    alert(result.message || 'Login failed. Check credentials.');
  }
});

