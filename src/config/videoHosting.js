// Video hosting configuration for Vercel deployment
// Choose your preferred hosting method below

// Option 1: Cloudinary (Recommended - Free tier: 25GB storage, 25GB bandwidth)
// Sign up at: https://cloudinary.com
export const CLOUDINARY_CONFIG = {
  cloudName: 'your-cloud-name', // Replace with your Cloudinary cloud name
  uploadPreset: 'your-upload-preset', // Replace with your upload preset
  apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
  apiSecret: process.env.REACT_APP_CLOUDINARY_API_SECRET
};

// Option 2: AWS S3 + CloudFront (Professional solution)
export const AWS_CONFIG = {
  bucketName: 'your-s3-bucket',
  region: 'us-east-1',
  cloudFrontDomain: 'your-cloudfront-domain.cloudfront.net'
};

// Option 3: Vercel Blob Storage (Paid - good for small files)
export const VERCEL_BLOB_CONFIG = {
  token: process.env.BLOB_READ_WRITE_TOKEN
};

// Video URLs - Update these with your hosted video URLs
export const VIDEO_URLS = {
  // Cloudinary URLs (auto-optimized)
  salesforce: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1/salesforce-demo',
  writer: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1/writer-demo',
  chase: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1/chase-demo',
  
  // Alternative: Direct CDN URLs
  // salesforce: 'https://your-cdn.com/videos/salesforce-demo.mp4',
  // writer: 'https://your-cdn.com/videos/writer-demo.mp4',
  // chase: 'https://your-cdn.com/videos/chase-demo.mp4',
  
  // Fallback to local (for development only)
  salesforceFallback: '/video/Salesforce - Contact Support - Portfolio.mp4',
  writerFallback: '/video/WRITER.mp4',
  chaseFallback: '/video/Chase-HELOC.mp4'
};

// Video optimization settings
export const VIDEO_SETTINGS = {
  // Cloudinary transformations for optimization
  quality: 'auto:good',
  format: 'mp4',
  bitRate: '1000k', // Reduce for faster loading
  width: 800, // Max width for mobile
  
  // Preload settings
  preload: 'metadata', // or 'none' for faster initial load
  
  // Mobile optimization
  mobile: {
    quality: 'auto:low',
    width: 600,
    bitRate: '500k'
  }
};

// Helper function to get optimized video URL
export const getVideoUrl = (videoKey, isMobile = false) => {
  const baseUrl = VIDEO_URLS[videoKey];
  
  if (!baseUrl) {
    console.warn(`Video URL not found for key: ${videoKey}`);
    return VIDEO_URLS[`${videoKey}Fallback`] || '';
  }
  
  // If using Cloudinary, add optimization parameters
  if (baseUrl.includes('cloudinary.com')) {
    const settings = isMobile ? VIDEO_SETTINGS.mobile : VIDEO_SETTINGS;
    const transformations = `q_${settings.quality},f_${VIDEO_SETTINGS.format},w_${settings.width},br_${settings.bitRate}`;
    return baseUrl.replace('/upload/', `/upload/${transformations}/`);
  }
  
  return baseUrl;
};

// Environment check
export const isDevelopment = process.env.NODE_ENV === 'development';
export const useLocalVideos = isDevelopment && process.env.REACT_APP_USE_LOCAL_VIDEOS === 'true'; 