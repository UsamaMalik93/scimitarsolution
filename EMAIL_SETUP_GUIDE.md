# Email Setup Guide - Send Emails Directly

Choose one of these options to send emails directly without opening email clients:

## Option 1: Web3Forms (Recommended - Easiest)

### Setup Steps:
1. Go to [Web3Forms.com](https://web3forms.com/)
2. Click "Get Started" and create a free account
3. You'll get an access key (looks like: `12345678-1234-1234-1234-123456789abc`)
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in the contact form with your actual key

### Benefits:
- ✅ **No authentication required**
- ✅ **Sends emails directly** to usamamalik2033@gmail.com
- ✅ **Free tier**: 250 emails/month
- ✅ **Spam protection** included
- ✅ **Works immediately** after setup

---

## Option 2: Formspree (Alternative)

### Setup Steps:
1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get your form endpoint (looks like: `https://formspree.io/f/12345678`)

### Update the contact form:
Replace the Web3Forms code with:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    company: formData.company || 'Not provided',
    phone: formData.phone || 'Not provided',
    subject: formData.subject,
    message: formData.message,
    _replyto: formData.email,
    _subject: `Contact Form: ${formData.subject}`
  }),
});
```

---

## Option 3: EmailJS (Most Professional)

### Setup Steps:
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Add Gmail service
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

### Update the contact form:
Replace the current code with:
```javascript
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  company: formData.company || 'Not provided',
  phone: formData.phone || 'Not provided',
  subject: formData.subject,
  message: formData.message,
  to_email: 'usamamalik2033@gmail.com'
};

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID', 
  templateParams,
  'YOUR_PUBLIC_KEY'
);
```

---

## Quick Setup (Web3Forms - 2 minutes):

1. **Visit**: https://web3forms.com/
2. **Sign up** with your email
3. **Copy your access key**
4. **Replace** `YOUR_WEB3FORMS_ACCESS_KEY` in `app/contact/page.tsx` line 50
5. **Test** the form - emails will be sent directly to usamamalik2033@gmail.com

## What Happens After Setup:

1. **User fills form** → Clicks "Send Message"
2. **Email sent directly** → To usamamalik2033@gmail.com
3. **Success message** → Shows "Message Sent!" 
4. **Form resets** → After 5 seconds
5. **No email client** → Opens automatically

## Email Format You'll Receive:

```
From: Scimitar Solutions Contact Form
To: usamamalik2033@gmail.com
Subject: [User's Subject]

Name: [User's Name]
Email: [User's Email]
Company: [User's Company]
Phone: [User's Phone]

Message:
[User's Message]
```

Choose **Web3Forms** for the quickest setup - it takes just 2 minutes and works immediately!
