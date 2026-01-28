# 🚀 Quick Deploy Commands

## First-Time Setup

```bash
# 1. Test build locally
npm run build

# 2. Initialize git (if needed)
git init
git add .
git commit -m "Initial commit for Render deployment"

# 3. Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/MacPortfolio.git
git branch -M main
git push -u origin main
```

## On Render.com

1. **New Static Site** → Connect GitHub → Select `MacPortfolio`
2. **Build Command**: `npm install && npm run build`
3. **Publish Directory**: `dist`
4. Click **Create Static Site**

## Future Updates

```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push
# Render auto-deploys in ~2-3 minutes
```

## Common Issues

### Build fails?

- Check logs in Render dashboard
- Verify `npm run build` works locally

### 404 on page refresh?

- Add in Render: Redirects/Rewrites
- Source: `/*` → Destination: `/index.html`

---

**Your site will be live at**: `https://macportfolio.onrender.com` (or custom domain)
