# Contact Form Setup Guide

The contact form is ready to use, but you need to configure it to actually send emails. Here are two options:

## Option 1: Formspree (Recommended - Easiest)

1. **Sign up** at https://formspree.io (free tier available)
2. **Create a new form** and get your form ID
3. **Add to `.env.local`**:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```
4. **Restart your dev server**

Formspree will send emails directly to `geral@mc-arquitectos.com`

## Option 2: EmailJS

1. **Sign up** at https://www.emailjs.com (free tier available)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (geral@mc-arquitectos.com)
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Add to `.env.local`**:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. **Restart your dev server**

## Option 3: Fallback (No Setup Required)

If neither service is configured, the form will use a `mailto:` link as a fallback, which opens the user's email client.

## Testing

After setup, test the form:
1. Fill out the form
2. Submit it
3. Check your email inbox (geral@mc-arquitectos.com)

## For Production

Make sure to add the environment variables to your hosting platform:
- **GitHub Pages**: Not supported (use Formspree or EmailJS)
- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
