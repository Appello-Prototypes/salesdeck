# Appello Sales Deck

Professional interactive sales presentation for Appello's construction technology platform.

## Overview

A modern, interactive sales deck built specifically for Appello's ICI (Industrial, Commercial & Institutional) contractor audience. Features the complete Appello brand guidelines with construction-focused messaging and real-time interactive elements.

## Features

🎯 **5 Professional Slides**
- Introduction with key metrics and value proposition
- Problem statement with construction-specific challenges
- Solution overview with Appello platform features
- Benefits & testimonials with proven results
- Call-to-action with interactive pricing plans

🎮 **Interactive Elements**
- Keyboard navigation (arrow keys, spacebar, number keys 1-5)
- Auto-play mode with pause/play controls
- Clickable cards with hover effects and expanded details
- Interactive pricing plan selection
- Progress tracking and slide indicators
- Help overlay with navigation guide

🎨 **Appello Brand Implementation**
- Complete brand color palette (Primary Blue #0046AD, Secondary Blue #3B71F4)
- Inter font family with proper typography hierarchy
- Speech bubble callouts and rounded elements
- Construction-focused iconography and messaging
- Appello logo integration

## Technology Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS with custom Appello brand classes
- **ShadCN/UI** - High-quality component library
- **Lucide React** - Professional icon library
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Appello-Prototypes/salesdeck.git
cd salesdeck
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the sales deck

## Usage

### Navigation Controls
- **Arrow Keys**: Navigate between slides
- **Spacebar**: Go to next slide
- **Number Keys (1-5)**: Jump directly to specific slides
- **ESC**: Stop auto-play mode
- **Click**: Interact with cards and elements
- **Help Button (?)**: Show/hide navigation help

### Interactive Features
- Hover over problem cards to see business impact costs
- Click solution features to expand detailed explanations
- Select pricing plans to see confirmation messages
- Toggle auto-play for automatic slide progression

## Deployment

### Vercel (Recommended)
This project is optimized for deployment on Vercel:

1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## Customization

The sales deck is fully customizable for different audiences:

- **Content**: Edit slide content in `/src/app/page.tsx` and `/src/components/slides.tsx`
- **Styling**: Modify Appello brand classes in `/src/app/globals.css`
- **Branding**: Update colors, fonts, and messaging
- **Features**: Add new interactive elements or slides

## Brand Guidelines

This project implements Appello's complete brand guidelines:
- Logo usage and positioning
- Color palette and typography
- Construction industry messaging
- Professional, trustworthy tone
- Mobile-responsive design

## License

© 2025 Appello Inc. All rights reserved.