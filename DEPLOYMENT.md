# Deployment Guide - Sinokuhle Portfolio

Your portfolio is ready to deploy! Choose from these hosting options:

## Option 1: Vercel (Recommended - Easiest)

Vercel makes deploying React + Node.js apps seamless.

1. **Sign up** at https://vercel.com (use GitHub login)
2. **Install Vercel CLI**:
   ```
   npm install -g vercel
   ```
3. **Deploy from project root**:
   ```
   vercel
   ```
4. Follow prompts and Vercel will handle everything
5. Your site will be live at `your-name.vercel.app`

**To redeploy after updates**:
```
vercel --prod
```

---

## Option 2: Netlify + Railway/Render (Alternative)

Deploy frontend on Netlify and backend on a Node.js service.

### Frontend (Netlify)
1. Build the React app:
   ```
   cd client
   npm run build
   ```
2. **Sign up** at https://netlify.com
3. Drag and drop the `client/dist` folder
4. Your frontend is live

### Backend (Railway or Render)
1. **Railway** (https://railway.app) - Deploy `server.js`
   - Connect GitHub repo
   - Set start command: `node server.js`
   - Railway auto-assigns PORT

2. **Render** (https://render.com) - Deploy `server.js`
   - Create web service
   - Connect GitHub repo
   - Build: `npm install`
   - Start: `node server.js`

---

## Option 3: Heroku (Alternative)

1. **Create Heroku account**: https://heroku.com
2. **Install Heroku CLI**
3. From project root:
   ```
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

---

## Option 4: Self-Hosted (VPS)

1. Rent a VPS (DigitalOcean, Linode, AWS EC2)
2. SSH into server and clone repo
3. Install Node.js: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`
4. Install dependencies:
   ```
   npm install
   cd client && npm install
   cd ..
   npm run build
   ```
5. Use PM2 to keep server running:
   ```
   npm install -g pm2
   pm2 start server.js --name portfolio
   pm2 startup
   ```
6. Point your domain to the server IP

---

## Quick Start with Vercel (Recommended)

```bash
# 1. From project root
npm install -g vercel

# 2. Login with GitHub
vercel login

# 3. Deploy
vercel --prod

# Your portfolio is now live!
```

---

## Environment Variables

If needed, create a `.env` file in the root:
```
PORT=4000
NODE_ENV=production
```

---

## Domain Setup

Point your domain to your hosting provider:
- **Vercel**: Add custom domain in dashboard
- **Netlify**: Add custom domain in settings
- **Railway/Render**: Add custom domain in settings

---

## Contact Form

The contact form (`/api/contact`) logs messages to server console. To send emails:

Install nodemailer:
```
npm install nodemailer
```

Update `server.js` to send emails (contact me for help).

---

**Questions?** Email: sinokuhle13@gmail.com
