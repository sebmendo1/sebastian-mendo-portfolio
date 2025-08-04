// Video hosting configuration for Vercel deployment
// Choose your preferred hosting method below

// Option 1: Cloudinary (Recommended - Free tier: 25GB storage, 25GB bandwidth)
// Sign up at: https://cloudinary.com
export const CLOUDINARY_CONFIG = {
  cloudName: 'dbfzh2zhf', // Your Cloudinary cloud name
  uploadPreset: 'your-upload-preset', // Replace with your upload preset if needed
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

// Video URLs - Updated with your hosted video URLs
export const VIDEO_URLS = {
  // Cloudinary URLs (your actual videos)
  salesforce: 'https://res.cloudinary.com/dbfzh2zhf/video/upload/v1754275184/Salesforce_-_Contact_Support_-_Portfolio_iomrfl.mov',
  writer: 'https://res.cloudinary.com/dbfzh2zhf/video/upload/v1754275274/WRITER_dky40b.mp4',
  chase: 'https://res.cloudinary.com/dbfzh2zhf/video/upload/v1754275263/Chase-HELOC_rx9uak.mp4',
  
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
    const transformations = `q_${settings.quality},f_${VIDEO_SETTINGS.format},w_${settings.width}`;
    
    // Handle existing Cloudinary URLs with version numbers
    if (baseUrl.includes('/upload/v')) {
      // Insert transformations after /upload/
      return baseUrl.replace('/upload/', `/upload/${transformations}/`);
    } else {
      // Handle URLs without version (fallback)
      return baseUrl.replace('/upload/', `/upload/${transformations}/`);
    }
  }
  
  return baseUrl;
};

// Environment check
export const isDevelopment = process.env.NODE_ENV === 'development';
export const useLocalVideos = process.env.REACT_APP_USE_LOCAL_VIDEOS === 'true'; 