// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  serviceId: 'YOUR_SERVICE_ID',
  
  // Your EmailJS template ID
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Your EmailJS public key
  publicKey: 'YOUR_PUBLIC_KEY',
  
  // Your Gmail address where you want to receive emails
  toEmail: 'btljrld22@gmail.com'
};

// EmailJS template parameters
export const getEmailParams = (formData) => ({
  to_email: EMAILJS_CONFIG.toEmail,
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  reply_to: formData.email
});
