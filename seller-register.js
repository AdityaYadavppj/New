document.getElementById('sellerRegisterForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value,
    pincode: document.getElementById('pincode').value
  };

  // Simulated API call
  const res = await fetch('/api/register-seller', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  const msgEl = document.getElementById('formMessage');
  if (data.success) {
    msgEl.style.color = 'green';
    msgEl.textContent = 'Registration successful! Wait for admin approval before logging in.';
  } else {
    msgEl.style.color = 'red';
    msgEl.textContent = data.message || 'Registration failed. Try again.';
  }
});