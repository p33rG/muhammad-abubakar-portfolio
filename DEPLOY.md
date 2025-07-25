# Vercel Deployment Guide

This portfolio is configured for deployment on Vercel. Follow these steps to deploy:

## Prerequisites
- A Vercel account (https://vercel.com)
- Vercel CLI installed globally: `npm i -g vercel`

## Deployment Steps

### Option 1: Deploy via Vercel CLI
1. Login to Vercel:
   ```bash
   vercel login
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - What's your project's name? `muhammad-abubakar-portfolio`
   - In which directory is your code located? `./`

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Git Integration
1. Push this code to a GitHub repository
2. Go to https://vercel.com/dashboard
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the configuration and deploy

## Environment Variables
The email functionality uses hardcoded credentials in the contact API. For production, consider setting these as environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - `EMAIL_USER`: bkrmalik3@gmail.com
   - `EMAIL_PASS`: vmws gbfq ntgk slct

Then update the API to use `process.env.EMAIL_USER` and `process.env.EMAIL_PASS`.

## Features Included
- ✅ Responsive React portfolio
- ✅ Serverless contact form API
- ✅ Optimized build configuration
- ✅ SPA routing support
- ✅ Email functionality with nodemailer

## Build Configuration
- Frontend builds to `dist/spa`
- API functions are in the `api/` directory
- Automatic routing for SPA and API endpoints

Your portfolio will be live at a URL like: `https://muhammad-abubakar-portfolio.vercel.app`
