# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Follow the instructions to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Message from {{from_name}} - {{subject}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'your_actual_service_id_here',
  templateId: 'your_actual_template_id_here', 
  publicKey: 'your_actual_public_key_here',
  toEmail: 'btljrld22@gmail.com'
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to your portfolio and scroll to the contact form
3. Fill out the form and submit
4. Check your Gmail inbox for the message

## Troubleshooting

- Make sure all IDs are correct (no extra spaces)
- Check that your Gmail account is properly connected
- Verify the template variables match the ones in `getEmailParams`
- Check the browser console for any error messages

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio contact form
- No credit card required

## Security Note

The public key is safe to use in frontend code. EmailJS handles the security on their end.
