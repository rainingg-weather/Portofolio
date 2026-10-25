# Merisa Anggi Anggraini — Portfolio

A high-performance, modern, and interactive portfolio website built for **Merisa Anggi Anggraini (Isa)**, Mathematics graduate from **Institut Teknologi Sepuluh Nopember (ITS)** specializing in **Computer Vision, Deep Learning, and Mathematical Modeling**.

---

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v3) + shadcn/ui CSS variable token architecture
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Architecture**: Clean modular components adhering to shadcn conventions (`@/components/ui`, `@/lib/utils`, `@/data`)

---

## 📂 Project Structure

```
├── components.json                 # shadcn UI configuration
├── index.html                      # HTML root template with fonts
├── package.json                    # Project dependencies & scripts
├── postcss.config.js               # PostCSS plugin configuration
├── tailwind.config.js              # Tailwind CSS design tokens & animations
├── tsconfig.json                   # TypeScript path aliases (@/* -> ./src/*)
├── vite.config.ts                  # Vite build & alias configuration
│
├── public/
│   └── assets/                     # Public static image assets
│       ├── Heroes.png              # Hero image asset
│       └── Hero.png
│
├── src/
│   ├── assets/                     # Bundled assets
│   ├── components/
│   │   ├── ui/
│   │   │   ├── minimalist-hero.tsx # The Minimalist Hero component
│   │   │   └── demo.tsx            # Minimalist Hero Demo
│   │   ├── AboutSection.tsx        # Analytical narrative & 4 pillars
│   │   ├── SkillsSection.tsx       # Core competencies & progress meters
│   │   ├── ProjectsSection.tsx     # Featured research + Before/After deraining slider
│   │   ├── ProjectModal.tsx        # Deep dive case study dialog with math equations
│   │   ├── MathPlayground.tsx      # Interactive 3x3 convolution & frequency hint lab
│   │   ├── EducationExperienceSection.tsx # ITS Mathematics timeline & roles
│   │   ├── ContactSection.tsx      # Contact form, email copy & socials
│   │   └── Navbar.tsx              # Sticky floating glassmorphism navigation
│   │
│   ├── data/
│   │   └── portfolioData.ts        # Structured data for projects, thesis, and profile
│   ├── lib/
│   │   └── utils.ts                # cn helper utility (clsx + tailwind-merge)
│   ├── App.tsx                     # Main application layout
│   ├── index.css                   # Tailwind base & glassmorphic styling
│   └── main.tsx                    # Application entry point
```

---

## ⚡ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎯 Key Sections & Features

1. **Minimalist Hero Section (`minimalist-hero.tsx`)**:
   - Custom typography: *"math & vision."*
   - Embedded image asset: `Asset/Heroes.png`
   - Navigation links to all page anchors
   - Direct links to LinkedIn, GitHub, and email

2. **About & Philosophy**:
   - Analytical narrative highlighting graduation from ITS Mathematics and specialization in deep learning & computer vision.
   - 4 Pillars: *Mathematical Foundations*, *Computer Vision & Restoration*, *Explainable Deep Learning*, *Applied Data Engineering*.

3. **Core Competencies & Skills Matrix**:
   - Tabbed categorized view: AI & Deep Learning, Mathematics & Statistics, Data Science & Programming, Tools & Scientific Workflow.

4. **Featured Projects & Research**:
   - **Flagship Undergraduate Thesis**: *Rain Convolutional Dictionary Network (RCDNet) with Frequency Hint for Image Deraining*.
   - **Interactive Before/After Image Comparison Slider**: Live drag-to-compare degraded rain images vs RCDNet restored outputs.
   - **Deep Dive Modal Case Study**: Complete background, methodology, mathematical optimization equations, and empirical metrics (PSNR, SSIM, Inference latency).

5. **Interactive Mathematical & Vision Playground**:
   - **3×3 Convolution Kernel Simulator**: Dynamic Sobel horizontal/vertical, Laplacian 2nd derivative, Gaussian blur, and custom matrix editing.
   - **RCDNet Frequency Hint Decomposition Simulator**: Interactive parameter tuning for frequency attention ($\alpha$) and sparsity regularization ($\lambda$).

6. **Education & Experience**:
   - B.Sc. in Mathematics (ITS Surabaya) with thesis title and milestones.
   - Experience timeline: Applied Math & AI Researcher, Academic Teaching & Laboratory Assistant, HIMATIKA ITS Leadership.

7. **Contact & Collaboration**:
   - Direct message inquiry form.
   - 1-Click copy-to-clipboard email with visual feedback.
   - Direct LinkedIn profile link.
"# Portofolio" 
