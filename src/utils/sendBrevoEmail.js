// src/utils/sendBrevoEmail.js
export async function sendBrevoEmail(formData) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Error sending email');
  }

  return response.json();
}
