# 🚀 Vercel Deployment Guide with Video Hosting

This guide helps you deploy your portfolio to Vercel while properly hosting your video files externally.

## 📊 Current Video File Sizes
- `Chase-HELOC.mp4`: 2.7MB ✅
- `WRITER.mp4`: 16.8MB ⚠️
- `Salesforce - Contact Support - Portfolio.mp4`: 31MB ❌ (Too large)

**Total: ~50MB** - This exceeds Vercel's practical limits and will cause slow deployments.

## 🎬 Video Hosting Solutions

### Option 1: Cloudinary (Recommended - FREE)

**Setup Steps:**
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your Cloud Name from dashboard
3. Upload your videos to Cloudinary
4. Update `src/config/videoHosting.js` with your URLs

**Cloudinary Upload Commands:**
```bash
# Install Cloudinary CLI
npm install -g cloudinary-cli

# Login to Cloudinary
cld config

# Upload videos with optimization
cld upload public/video/Chase-HELOC.mp4 --public_id chase-demo --resource_type video --eager q_auto,f_mp4,w_800
cld upload public/video/WRITER.mp4 --public_id writer-demo --resource_type video --eager q_auto,f_mp4,w_800  
cld upload "public/video/Salesforce - Contact Support - Portfolio.mp4" --public_id salesforce-demo --resource_type video --eager q_auto,f_mp4,w_800
```

**Example Cloudinary URLs:**
```javascript
// In src/config/videoHosting.js
export const VIDEO_URLS = {
  salesforce: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/salesforce-demo',
  writer: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/writer-demo',
  chase: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/chase-demo'
};
```

### Option 2: AWS S3 + CloudFront

**Better for professional/production use:**
1. Create S3 bucket for video storage
2. Set up CloudFront for fast global delivery
3. Upload optimized videos to S3
4. Update video URLs in config

### Option 3: Video Compression (Quick Fix)

**If you want to keep videos in repo:**
```bash
# Install FFmpeg
brew install ffmpeg

# Compress videos significantly
ffmpeg -i "public/video/Salesforce - Contact Support - Portfolio.mp4" -vcodec h264 -acodec aac -b:v 500k -b:a 128k public/video/salesforce-compressed.mp4

ffmpeg -i "public/video/WRITER.mp4" -vcodec h264 -acodec aac -b:v 500k -b:a 128k public/video/writer-compressed.mp4

# This should reduce file sizes by 80-90%
```

## ⚙️ Environment Variables

Create `.env.local` for local development:
```env
# Cloudinary Configuration
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
REACT_APP_CLOUDINARY_API_KEY=your-api-key
REACT_APP_CLOUDINARY_API_SECRET=your-api-secret

# Development Settings
REACT_APP_USE_LOCAL_VIDEOS=true
NODE_ENV=development
```

**Vercel Environment Variables:**
```env
# Add these in Vercel dashboard under Settings > Environment Variables
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
REACT_APP_USE_LOCAL_VIDEOS=false
NODE_ENV=production
```

## 🚀 Deployment Steps

### Method 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow prompts to connect your GitHub repo
```

### Method 2: GitHub Integration
1. Go to [vercel.com/new](https://vercel.com/new)
2. Connect your GitHub account
3. Select your `sebastian-mendo-portfolio` repository
4. Configure environment variables
5. Deploy

## 📁 File Structure After Setup
```
src/
├── config/
│   └── videoHosting.js          # Video hosting configuration
├── components/
│   └── ProjectCards/
│       ├── SalesforceCard.js    # ✅ Updated for external videos
│       ├── WriterCard.js        # ✅ Updated for external videos
│       └── ChaseCard.js         # ✅ Updated for external videos
└── ...

# Videos removed from repo after hosting externally
public/video/                    # 🗑️ Remove after external hosting
```

## 🎯 Performance Benefits

**Before (Local Videos):**
- Bundle size: ~50MB
- Deployment time: 5-10 minutes
- Load time: Slow on mobile
- Risk: Vercel deployment failure

**After (External Hosting):**
- Bundle size: ~2MB
- Deployment time: 30 seconds
- Load time: Fast (CDN optimized)
- Reliability: Production ready

## 🔧 Quick Start Commands

**1. Set up Cloudinary hosting:**
```bash
# Update video URLs in src/config/videoHosting.js
# Upload videos to Cloudinary
# Test locally with REACT_APP_USE_LOCAL_VIDEOS=false
```

**2. Deploy to Vercel:**
```bash
vercel --prod
```

**3. Test deployment:**
```bash
# Visit your Vercel URL and test video playback
```

## 🐛 Troubleshooting

**Videos not loading:**
- Check video URLs in browser directly
- Verify environment variables in Vercel dashboard
- Check browser console for CORS errors

**Slow loading:**
- Enable video compression in Cloudinary
- Use `preload="metadata"` (already implemented)
- Consider lazy loading for mobile

**Deployment failures:**
- Remove large files from `public/video/` after external hosting
- Check Vercel build logs for specific errors

## 📞 Support

Need help? Check these resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Cloudinary Video Docs](https://cloudinary.com/documentation/video_manipulation_and_delivery)
- [React Video Optimization](https://web.dev/video/)

Your portfolio is now ready for production deployment! 🎉 