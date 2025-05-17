const sendOtpBtn = document.getElementById('sendOtpBtn');
const otpSection = document.querySelector('.otp-section');
const form = document.getElementById('resetForm');

sendOtpBtn.addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const userType = document.getElementById('userType').value;

  if (!username || !userType) {
    alert('Please fill all fields');
    return;
  }

  const res = await fetch('/api/send-reset-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, userType })
  });

  const data = await res.json();

  if (data.success) {
    alert('OTP sent');
    otpSection.style.display = 'block';
    sendOtpBtn.disabled = true;
  } else {
    alert(data.message || 'Failed to send OTP');
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    username: document.getElementById('username').value,
    otp: document.getElementById('otpInput').value,
    newPassword: document.getElementById('newPassword').value,
    userType: document.getElementById('userType').value
  };

  const res = await fetch('/api/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (data.success) {
    alert('Password reset successfully');
    window.location.href = '/login.html';
  } else {
    alert(data.message || 'Failed to reset password');
  }
});

