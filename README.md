# Sachin Portfolio

A modern, responsive portfolio website showcasing web development skills and projects. Built with cutting-edge technologies to deliver an exceptional user experience with smooth animations and interactive elements.

## 🚀 About

This portfolio represents my journey as a web developer, embodying the philosophy: **"turning ideas into the real life projects is my calling."** The site demonstrates proficiency in modern web technologies while maintaining clean, accessible design principles.

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 13** - React framework with App Router
- **React 18** - Latest React features and optimizations
- **Tailwind CSS** - Utility-first CSS framework

### Animation & Interactions
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animation library
- **Custom Scrollbar** - Enhanced scrolling experience

### UI & Theming
- **next-themes** - Dark/light mode implementation
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Icons** - Popular icon library

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

## ✨ Key Features

### 🎨 Design & UX
- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme Toggle** - Seamless theme switching
- **Custom Scrollbar Styling** - Enhanced visual experience
- **Mobile-First Approach** - Progressive enhancement

### 🎭 Animations & Interactions
- **Animated Hero Section** - Eye-catching landing experience
- **Mobile Hamburger Menu** - Smooth navigation transitions
- **GSAP Page Transitions** - Professional page switching
- **Framer Motion Components** - Micro-interactions throughout

### 🏗️ Architecture
- **Component-Based Structure** - Modular and maintainable
- **Custom Font Integration** - GT-Walsheim-Bold & Poppins
- **Transition Context** - Global animation state management
- **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── Layout.js              # Main layout wrapper
│   ├── Footer.js              # Site footer
│   ├── Navbar/
│   │   └── Header.js          # Navigation with theme toggle
│   └── homepage/
│       └── herosection.js     # Animated hero section
├── pages/
│   ├── _app.js                # App configuration
│   ├── _document.js           # Document structure
│   ├── index.js               # Home page
│   ├── contacts.js            # Contact page
│   └── api/
│       └── hello.js           # API route example
├── src/
│   └── context/
│       └── TransitionContext.js # GSAP transition management
├── styles/
│   ├── globals.css            # Global styles
│   ├── header.module.css      # Header-specific styles
│   └── herosection.module.css # Hero section styles
├── public/
│   ├── fonts/
│   │   └── GT-Walsheim-Bold.ttf
│   └── images/
└── config files...
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/):

1. **Connect your repository** to Vercel
2. **Configure build settings** (auto-detected for Next.js)
3. **Deploy** - Automatic deployments on every push

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🎯 Performance Features

- **Static Site Generation (SSG)** - Pre-rendered pages for optimal performance
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic bundle splitting for faster loads
- **CSS Optimization** - Tailwind CSS purging for minimal bundle size

## 🔧 Customization

### Themes
The portfolio supports both dark and light themes. Theme preference is automatically detected and persisted across sessions.

### Animations
Animation settings can be customized in:
- `src/context/TransitionContext.js` - GSAP configurations
- Individual components - Framer Motion variants

### Styling
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `styles/globals.css`
- **Component Styles**: Individual module CSS files

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Share feedback on design and functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sachin Sapkota**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

*Built with ❤️ using Next.js and modern web technologies*

