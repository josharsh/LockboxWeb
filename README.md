# LogBoxWeb

The official website for LockBox - a secure password manager for iOS.

## Overview

This Next.js application serves as the marketing website and support portal for the LockBox iOS app. It includes:

- Landing page with feature highlights
- Privacy policy
- Terms of service  
- Support documentation
- App Store download links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
LogBoxWeb/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Landing page
│   │   ├── privacy/        # Privacy policy page
│   │   ├── terms/          # Terms of service page
│   │   └── support/        # Support page
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features grid
│   │   ├── Security.tsx    # Security details
│   │   ├── Showcase.tsx    # App showcase
│   │   ├── CTA.tsx         # Call to action
│   │   └── Footer.tsx      # Site footer
│   └── styles/
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json
└── README.md
```

## Deployment

This site is designed to be deployed on any static hosting service:

- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Environment Variables

No environment variables are required for the basic site. If you add analytics or other services, create a `.env.local` file.

## Design Philosophy

- **Privacy First**: No analytics, tracking, or cookies
- **Performance**: Optimized for fast loading
- **Accessibility**: WCAG compliant
- **Mobile First**: Responsive design
- **Dark Mode**: Matches the iOS app aesthetic

## URLs Referenced

Make sure these URLs are properly configured:

- `https://lockboxapp.io` - Main domain
- `https://lockboxapp.io/privacy` - Privacy policy
- `https://lockboxapp.io/terms` - Terms of service
- `https://lockboxapp.io/support` - Support page

## License

© 2025 Harsh Joshi. All rights reserved.