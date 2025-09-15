# Resend Email Setup Guide

## Quick Setup (2 minutes)

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Click "Get Started" and sign up with your email
3. Verify your email address

### 2. Get API Key
1. After logging in, go to the [API Keys](https://resend.com/api-keys) page
2. Click "Create API Key"
3. Give it a name like "Scimitar Solutions Contact Form"
4. Copy the API key (starts with `re_`)

### 3. Add to Environment Variables
Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
```

### 4. Test the Setup
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check `usamamalik2033@gmail.com` for the email

## Features Included

✅ **Direct Email Sending**: Emails sent directly to `usamamalik2033@gmail.com`
✅ **Professional HTML Template**: Clean, branded email design
✅ **Reply-To Functionality**: You can reply directly to the person who submitted the form
✅ **Form Validation**: Client-side and server-side validation
✅ **Success Feedback**: User sees confirmation when email is sent
✅ **Error Handling**: Graceful error handling with user feedback

## Email Template Features

- **Professional Design**: Clean, modern HTML email template
- **Contact Details**: All form fields included (name, email, company, phone, subject, message)
- **Timestamp**: Shows when the form was submitted
- **Branding**: Scimitar Solutions branding and styling
- **Reply-To**: Set to the submitter's email for easy responses

## Free Tier Limits

- **100 emails per day** (no credit card required)
- **Perfect for small to medium businesses**
- **No monthly limits** - just daily limits

## Production Deployment

When deploying to production:

1. Add the `RESEND_API_KEY` to your hosting platform's environment variables
2. Consider upgrading to a paid plan for higher limits
3. Set up a custom domain for the "from" address (optional)

## Troubleshooting

- **"Invalid API key"**: Check that your API key is correct in `.env.local`
- **"Rate limit exceeded"**: You've hit the 100 emails/day limit
- **"Email not received"**: Check spam folder, verify the recipient email

## Security Notes

- Never commit `.env.local` to version control
- Keep your API key secure
- Consider using environment-specific keys for production

That's it! Your contact form will now send emails directly to `usamamalik2033@gmail.com` using Resend.
