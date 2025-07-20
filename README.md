# Algentric - AI Company Website

A clean, research-focused website built with Next.js 14, featuring minimalist design, subtle animations, and sophisticated UI elements that showcase Algentric's autonomous AI agent research.

![Algentric Website](https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop)

## ✨ Features

### 🎨 **Stunning Visual Design**
- **Glass Morphism Effects**: Modern translucent UI elements with blur effects
- **Gradient Animations**: Dynamic color transitions and animated backgrounds
- **Cyber Grid Patterns**: Futuristic grid animations and particle effects
- **3D Card Hover Effects**: Interactive cards with depth and rotation
- **Custom Scrollbar**: Gradient-styled scrollbars matching the theme

### 🚀 **Advanced Animations**
- **Framer Motion**: Smooth, performance-optimized animations
- **Scroll-triggered Animations**: Elements animate as they enter viewport
- **Parallax Effects**: Multi-layer scrolling effects
- **Staggered Animations**: Sequential element animations
- **Micro-interactions**: Hover and click animations throughout

### 📱 **Responsive & Modern**
- **Mobile-First Design**: Optimized for all screen sizes
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **App Router**: Latest Next.js 14 features
- **Performance Optimized**: Fast loading and smooth interactions

### 🎯 **Clean Research-Focused Content**
- **Hero Section**: Clear value proposition about building AI agents
- **Research Areas**: Clean cards showcasing research projects
- **Research Milestones**: Realistic timeline of development goals
- **Join Our Research**: Professional contact and career opportunities

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (Google Fonts)
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment Ready**: Optimized for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette
- **Primary**: Green cyber theme (#22c55e to #16a34a)
- **Accent**: Green variations and borders
- **Background**: Deep black (#0a0a0a) with gray cards
- **Text**: White with gray variants

### Typography
- **Headings**: Inter (Various weights)
- **Body**: Inter (400, 500, 600)
- **Code/Mono**: JetBrains Mono

### Custom Animations
- `gradient-x/y/xy`: Animated gradient backgrounds
- `float`: Gentle floating animation
- `pulse-slow`: Slow pulsing effect
- `spin-slow`: Slow rotation animation

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and custom CSS
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── TechnologyShowcase.tsx  # Tech features
│   ├── VisionSection.tsx # Timeline roadmap
│   └── ContactSection.tsx # Contact form
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎯 Key Sections

### 1. **Hero Section**
- Animated headline with gradient text
- Real-time statistics with CountUp animations
- Floating background elements
- Call-to-action buttons with hover effects

### 2. **Technology Showcase**
- 6 technology cards with 3D hover effects
- Animated metrics and counters
- Glass morphism design
- Staggered animations on scroll

### 3. **Vision Timeline**
- Interactive timeline with milestones
- Alternating layout for desktop
- Animated icons and progress indicators
- Future predictions and market impact

### 4. **Contact Section**
- Professional contact form
- Real-time form validation
- Contact information cards
- Social media links
- Investment opportunity highlights

## 🔧 Customization

### Updating Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Adding New Sections
1. Create a new component in `/components`
2. Import and add to `/app/page.tsx`
3. Follow the existing animation patterns

### Modifying Content
- Update company information in each component
- Customize the timeline in `VisionSection.tsx`
- Modify technology features in `TechnologyShowcase.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy 'out' folder to Netlify
```

## 📝 License

This project is proprietary to Algentric. All rights reserved.

## 🤝 Contributing

This is a private project for Algentric. For internal contributions, please follow the company's development guidelines.

---

**Built with ❤️ for Algentric's future**