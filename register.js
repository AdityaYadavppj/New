const sendOtpBtn = document.getElementById('sendOtpBtn');
const otpSection = document.querySelector('.otp-section');
const form = document.getElementById('buyerRegisterForm');

sendOtpBtn.addEventListener('click', async () => {
  const username = document.getElementById('username').value;

  if (!username) {
    alert('Please enter email or mobile number');
    return;
  }

  // Send OTP
  const res = await fetch('/api/send-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, userType: 'buyer' })
  });

  const data = await res.json();

  if (data.success) {
    alert('OTP sent successfully');
    otpSection.style.display = 'block';
    sendOtpBtn.disabled = true;
  } else {
    alert(data.message || 'Error sending OTP');
  }
});

// Form submit to verify OTP
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    pincode: document.getElementById('pincode').value,
    otp: document.getElementById('otpInput').value,
    userType: 'buyer'
  };

  const res = await fetch('/api/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (data.success) {
    alert('Registration successful');
    window.location.href = '/login';
  } else {
    alert(data.message || 'OTP verification failed');
  }
});