# Deployment Guide

## Deploy to Vercel

### Method 1: Direct Vercel Deployment

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy the app**:
```bash
vercel
```

4. **For production deployment**:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. **Push to GitHub** (already done):
```bash
git push origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `tech-mindmap-app` repository
   - Configure build settings (auto-detected)
   - Deploy

### Build Configuration

The app includes optimized Vercel configuration:
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Dev Command**: `npm start`

### Environment Variables

No additional environment variables required for basic deployment.

### Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project dashboard on Vercel
2. Navigate to "Domains" tab
3. Add your custom domain
4. Follow DNS configuration instructions

### Performance Optimizations

The app includes:
- Static asset caching (1 year cache for static files)
- Gzip compression
- Code splitting
- Lazy loading components
- Optimized bundle size

### Build Size Analysis

Current build size:
- Main bundle: ~210 KB (gzipped)
- CSS: ~3 KB (gzipped)
- Total: ~213 KB (gzipped)

### Monitoring

After deployment, monitor:
- Core Web Vitals in Vercel Analytics
- Error tracking in Vercel Functions
- Performance metrics in Browser tab