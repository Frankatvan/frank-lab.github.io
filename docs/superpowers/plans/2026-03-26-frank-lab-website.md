# Frank's Lab Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Frank's Lab website using GitHub Pages + Jekyll theme with dark tech style, bilingual support, and project card display

**Architecture:** Static Jekyll website hosted on GitHub Pages with custom theme for lab console interface, using YAML data files for projects and i18n, responsive grid layout, and dark tech aesthetic

**Tech Stack:** Jekyll (GitHub Pages native), YAML configuration, SCSS for styling, JavaScript for language switching, minimal dependencies

---

## File Structure Overview

**Core files to create:**
- `_config.yml` - Main Jekyll configuration
- `_data/projects.yml` - Project data configuration
- `_data/lab-info.yml` - Lab information
- `_locales/zh.yml` - Chinese language pack
- `_locales/en.yml` - English language pack
- `_layouts/default.html` - Base layout template
- `_layouts/home.html` - Homepage layout
- `_includes/header.html` - Header component
- `_includes/footer.html` - Footer component
- `_includes/language-switcher.html` - Language toggle
- `assets/css/main.scss` - Main stylesheet
- `assets/js/language-switcher.js` - Language switching logic
- `index.html` - Main page entry
- `README.md` - Deployment instructions for user

---

### Task 1: Create Jekyll base configuration

**Files:**
- Create: `_config.yml`

- [ ] **Step 1: Write Jekyll configuration file**

```yaml
# Site settings
title: "Frank's Lab"
email: ""
description: "技术探索者、创新工坊 | Tech Explorer, Innovation Workshop"
url: "https://frankzh.top"
baseurl: ""

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# Exclude from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/

# Language settings (for JavaScript client-side switching)
languages:
  - zh
  - en
default_language: zh

# Data files for languages
# Note: Language switching is handled client-side via JavaScript
# The _locales/ directory contains language data files

# Collections
collections:
  projects:
    output: false
```

- [ ] **Step 2: Commit base configuration**

```bash
git add _config.yml
git commit -m "feat: add Jekyll base configuration"
```

---

### Task 2: Create project data structure

**Files:**
- Create: `_data/projects.yml`

- [ ] **Step 1: Write projects data file with sample data**

```yaml
projects:
  - id: "001"
    name:
      zh: "示例项目"
      en: "Sample Project"
    url: "https://example.com"
    status: "running"
    brief:
      zh: "这是一个示例项目，展示卡片布局效果"
      en: "This is a sample project demonstrating card layout"
  - id: "002"
    name:
      zh: "已完成的项目"
      en: "Completed Project"
    url: "https://example2.com"
    status: "completed"
    brief:
      zh: "展示已完成状态的项目卡片"
      en: "Demonstrating a completed project card"
  - id: "003"
    name:
      zh: "暂停中的项目"
      en: "Paused Project"
    url: "https://example3.com"
    status: "paused"
    brief:
      zh: "展示暂停状态的项目卡片"
      en: "Demonstrating a paused project card"
```

- [ ] **Step 2: Commit project data structure**

```bash
git add _data/projects.yml
git commit -m "feat: add project data structure with sample data"
```

---

### Task 3: Create lab information data

**Files:**
- Create: `_data/lab-info.yml`

- [ ] **Step 1: Write lab information configuration**

```yaml
lab:
  established: "2024"
  areas:
    zh: "人工智能, Web开发, 工具创新"
    en: "Artificial Intelligence, Web Development, Tool Innovation"
```

- [ ] **Step 2: Commit lab information**

```bash
git add _data/lab-info.yml
git commit -m "feat: add lab information configuration"
```

---

### Task 4: Create Chinese language pack

**Files:**
- Create: `_locales/zh.yml`

- [ ] **Step 1: Write Chinese language pack**

```yaml
lab:
  title: "Frank's Lab"
  subtitle: "实验室控制台"
  status: "探索中"
  status_active: "探索中"

experiment:
  id: "实验编号"
  status: "状态"
  brief: "简介"
  status_running: "进行中"
  status_completed: "已完成"
  status_paused: "暂停"

footer:
  established: "成立于"
  areas: "探索领域"
  copyright: "© 2024 Frank's Lab. All rights reserved."

nav:
  language: "语言"
  language_switch: "切换语言"
```

- [ ] **Step 2: Commit Chinese language pack**

```bash
git add _locales/zh.yml
git commit -m "feat: add Chinese language pack"
```

---

### Task 5: Create English language pack

**Files:**
- Create: `_locales/en.yml`

- [ ] **Step 1: Write English language pack**

```yaml
lab:
  title: "Frank's Lab"
  subtitle: "Lab Console"
  status: "Exploring"
  status_active: "Exploring"

experiment:
  id: "Experiment ID"
  status: "Status"
  brief: "Brief"
  status_running: "In Progress"
  status_completed: "Completed"
  status_paused: "Paused"

footer:
  established: "Established"
  areas: "Areas of Exploration"
  copyright: "© 2024 Frank's Lab. All rights reserved."

nav:
  language: "Language"
  language_switch: "Switch Language"
```

- [ ] **Step 2: Commit English language pack**

```bash
git add _locales/en.yml
git commit -m "feat: add English language pack"
```

---

### Task 6: Create base layout template

**Files:**
- Create: `_layouts/default.html`

- [ ] **Step 1: Write base HTML layout**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ page.title }} - {{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  <link rel="icon" type="image/x-icon" href="{{ '/favicon.ico' | relative_url }}">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="dark-theme">
  {% include header.html %}
  <main class="main-content">
    {{ content }}
  </main>
  {% include footer.html %}
  <script src="{{ '/assets/js/language-switcher.js' | relative_url }}"></script>
</body>
</html>
```

- [ ] **Step 2: Commit base layout**

```bash
git add _layouts/default.html
git commit -m "feat: add base layout template"
```

---

### Task 7: Create homepage layout

**Files:**
- Create: `_layouts/home.html`

- [ ] **Step 1: Write homepage layout template**

```html
---
layout: default
title: "实验室控制台 | Lab Console"
---

<div class="hero-section">
  <h1 class="lab-title" data-i18n="lab.title">{{ site.data.locales.zh.lab.title }}</h1>
  <p class="lab-subtitle" data-i18n="lab.subtitle">{{ site.data.locales.zh.lab.subtitle }}</p>
  <div class="lab-status">
    <span class="status-indicator"></span>
    <span data-i18n="lab.status">{{ site.data.locales.zh.lab.status }}</span>
  </div>
</div>

<div class="experiments-grid">
  {% for project in site.data.projects.projects %}
  <a href="{{ project.url }}" class="experiment-card" data-status="{{ project.status }}">
    <div class="card-header">
      <span class="experiment-id">{{ project.id }}</span>
      <span class="experiment-status status-{{ project.status }}">
        <span data-i18n="experiment.status_{{ project.status }}">{{ site.data.locales.zh.experiment["status_" | append: project.status] }}</span>
      </span>
    </div>
    <h3 class="project-name" data-i18n="project.name">{{ project.name.zh }}</h3>
    <p class="project-brief" data-i18n="project.brief">{{ project.brief.zh }}</p>
  </a>
  {% endfor %}
</div>
```

- [ ] **Step 2: Commit homepage layout**

```bash
git add _layouts/home.html
git commit -m "feat: add homepage layout with project grid"
```

---

### Task 8: Create header component

**Files:**
- Create: `_includes/header.html`

- [ ] **Step 1: Write header component**

```html
<header class="site-header">
  <div class="header-content">
    <div class="logo">
      <span class="logo-text">Frank's Lab</span>
    </div>
    <div class="header-controls">
      {% include language-switcher.html %}
    </div>
  </div>
</header>
```

- [ ] **Step 2: Commit header component**

```bash
git add _includes/header.html
git commit -m "feat: add header component"
```

---

### Task 9: Create language switcher component

**Files:**
- Create: `_includes/language-switcher.html`

- [ ] **Step 1: Write language switcher**

```html
<div class="language-switcher">
  <button class="lang-btn" data-lang="zh" title="中文">中</button>
  <button class="lang-btn" data-lang="en" title="English">EN</button>
</div>
```

- [ ] **Step 2: Commit language switcher**

```bash
git add _includes/language-switcher.html
git commit -m "feat: add language switcher component"
```

---

### Task 10: Create footer component

**Files:**
- Create: `_includes/footer.html`

- [ ] **Step 1: Write footer component**

```html
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-info">
      <p><span data-i18n="footer.established">{{ site.data.locales.zh.footer.established }}</span> {{ site.data.lab.lab.established }}</p>
      <p><span data-i18n="footer.areas">{{ site.data.locales.zh.footer.areas }}</span>: <span data-i18n="lab.areas">{{ site.data.lab.lab.areas.zh }}</span></p>
    </div>
    <p class="copyright" data-i18n="footer.copyright">{{ site.data.locales.zh.footer.copyright }}</p>
  </div>
</footer>
```

- [ ] **Step 2: Commit footer component**

```bash
git add _includes/footer.html
git commit -m "feat: add footer component"
```

---

### Task 11: Create main stylesheet with dark tech theme

**Files:**
- Create: `assets/css/main.scss`

- [ ] **Step 1: Write main CSS stylesheet**

```scss
// Color Variables
$color-bg-primary: #0a0a1a;
$color-bg-secondary: #16213e;
$color-accent: #00d4ff;
$color-text-primary: #ffffff;
$color-text-secondary: #cccccc;
$color-card-bg: rgba(255, 255, 255, 0.08);
$color-card-border: rgba(0, 212, 255, 0.3);

// Base Styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: $color-bg-primary;
  color: $color-text-primary;
  line-height: 1.6;
  overflow-x: hidden;
}

// Background Effect
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: -1;
}

// Header
.site-header {
  background: rgba(10, 10, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $color-card-border;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: $color-accent;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

// Language Switcher
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid $color-card-border;
  color: $color-text-primary;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.lang-btn:hover,
.lang-btn.active {
  background: rgba(0, 212, 255, 0.3);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

// Main Content
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
}

// Hero Section
.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
}

.lab-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  color: $color-accent;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  margin-bottom: 1rem;
}

.lab-subtitle {
  font-size: 1.5rem;
  color: $color-text-secondary;
  margin-bottom: 2rem;
}

.lab-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid $color-card-border;
  border-radius: 20px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background: $color-accent;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 5px $color-accent;
  }
  50% {
    opacity: 0.5;
    box-shadow: 0 0 20px $color-accent;
  }
}

// Experiments Grid
.experiments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

// Experiment Card
.experiment-card {
  background: $color-card-bg;
  backdrop-filter: blur(10px);
  border: 1px solid $color-card-border;
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: $color-text-primary;
  transition: all 0.3s ease;
  display: block;
}

.experiment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  border-color: $color-accent;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.experiment-id {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  color: $color-accent;
  opacity: 0.8;
}

.experiment-status {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-running {
  background: rgba(0, 212, 255, 0.2);
  color: $color-accent;
}

.status-completed {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.status-paused {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: $color-text-primary;
}

.project-brief {
  color: $color-text-secondary;
  font-size: 0.875rem;
  line-height: 1.5;
}

// Footer
.site-footer {
  background: rgba(10, 10, 26, 0.95);
  border-top: 1px solid $color-card-border;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-info p {
  color: $color-text-secondary;
  margin-bottom: 0.5rem;
}

.copyright {
  margin-top: 1.5rem;
  color: $color-text-secondary;
  font-size: 0.875rem;
}

// Responsive Design
@media (max-width: 1023px) {
  .experiments-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .lab-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 767px) {
  .site-header {
    padding: 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-section {
    padding: 2rem 1rem;
  }

  .lab-title {
    font-size: 2rem;
  }

  .lab-subtitle {
    font-size: 1.25rem;
  }

  .experiments-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .main-content {
    padding: 1rem;
  }
}
```

- [ ] **Step 2: Commit main stylesheet**

```bash
git add assets/css/main.scss
git commit -m "feat: add main stylesheet with dark tech theme"
```

---

### Task 12: Create language switcher JavaScript

**Files:**
- Create: `assets/js/language-switcher.js`

- [ ] **Step 1: Write language switching logic**

```javascript
(function() {
  'use strict';

  // Language data (matches _locales/ files)
  const translations = {
    zh: {
      'lab.title': "Frank's Lab",
      'lab.subtitle': '实验室控制台',
      'lab.status': '探索中',
      'experiment.status_running': '进行中',
      'experiment.status_completed': '已完成',
      'experiment.status_paused': '暂停',
      'footer.established': '成立于',
      'footer.areas': '探索领域',
      'footer.copyright': '© 2024 Frank\'s Lab. All rights reserved.',
      'lab.areas': '人工智能, Web开发, 工具创新'
    },
    en: {
      'lab.title': "Frank's Lab",
      'lab.subtitle': 'Lab Console',
      'lab.status': 'Exploring',
      'experiment.status_running': 'In Progress',
      'experiment.status_completed': 'Completed',
      'experiment.status_paused': 'Paused',
      'footer.established': 'Established',
      'footer.areas': 'Areas of Exploration',
      'footer.copyright': '© 2024 Frank\'s Lab. All rights reserved.',
      'lab.areas': 'Artificial Intelligence, Web Development, Tool Innovation'
    }
  };

  // Project data (matches _data/projects.yml)
  const projectsData = {
    zh: {
      'project.name': ['示例项目', '已完成的项目', '暂停中的项目'],
      'project.brief': ['这是一个示例项目，展示卡片布局效果', '展示已完成状态的项目卡片', '展示暂停状态的项目卡片']
    },
    en: {
      'project.name': ['Sample Project', 'Completed Project', 'Paused Project'],
      'project.brief': ['This is a sample project demonstrating card layout', 'Demonstrating a completed project card', 'Demonstrating a paused project card']
    }
  };

  // Detect browser language
  function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('zh') ? 'zh' : 'en';
  }

  // Get saved language preference
  function getSavedLanguage() {
    return localStorage.getItem('franklab-language') || getBrowserLanguage();
  }

  // Save language preference
  function saveLanguage(lang) {
    localStorage.setItem('franklab-language', lang);
  }

  // Update text content by i18n key
  function updateTextContent(lang) {
    // Update static translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Update project names and briefs
    document.querySelectorAll('.experiment-card').forEach((card, index) => {
      const nameEl = card.querySelector('.project-name');
      const briefEl = card.querySelector('.project-brief');

      if (nameEl && projectsData[lang]['project.name'][index]) {
        nameEl.textContent = projectsData[lang]['project.name'][index];
      }
      if (briefEl && projectsData[lang]['project.brief'][index]) {
        briefEl.textContent = projectsData[lang]['project.brief'][index];
      }
    });
  }

  // Update page language
  function updateLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    saveLanguage(lang);

    // Update page content
    updateTextContent(lang);
  }

  // Initialize language switcher
  function initLanguageSwitcher() {
    // Get current language from saved preference or browser detection
    const currentLang = getSavedLanguage();

    // Update content initially
    updateTextContent(currentLang);

    // Update active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
      btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
      });
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
```

- [ ] **Step 2: Commit language switcher**

```bash
git add assets/js/language-switcher.js
git commit -m "feat: add language switcher JavaScript"
```

---

### Task 13: Create main index page

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write main index page**

```html
---
layout: home
title: "Frank's Lab - 技术探索者、创新工坊"
---
```

- [ ] **Step 2: Commit index page**

```bash
git add index.html
git commit -m "feat: add main index page"
```

---

### Task 14: Create deployment README for user

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write deployment instructions**

```markdown
# Frank's Lab Website Deployment Guide

## What You Need to Provide

Before starting deployment, prepare the following information:

1. **GitHub Account**: Your GitHub username
2. **Project Information**: For each project you want to display
   - Project name (Chinese and English)
   - Project URL (link to project page)
   - Brief description (Chinese and English)
   - Project status: `running`, `completed`, or `paused`
3. **Lab Information**:
   - Establishment year (e.g., "2024")
   - Areas of exploration (Chinese and English)
4. **Domain Information**:
   - frankzh.top DNS provider (Aliyun, Tencent Cloud, etc.)

## Deployment Steps

### Step 1: Create GitHub Repository

1. Log in to GitHub
2. Click "+" → "New repository"
3. Repository name: `frank-lab.github.io` (replace with your username)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Files

Choose one of these methods:

**Method A: Using GitHub Web Interface (Recommended)**
1. In your new repository, click "uploading an existing file"
2. Upload all files from this project
3. Click "Commit changes"

**Method B: Using Git (Advanced)**
```bash
git remote add origin https://github.com/YOUR_USERNAME/frank-lab.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Configure Your Content

1. Edit `_data/projects.yml` - Add your real projects
2. Edit `_data/lab-info.yml` - Update lab information
3. Optionally customize `_locales/zh.yml` and `_locales/en.yml`

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Build and deployment", select "Source: Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Wait 1-2 minutes for deployment. Your site will be available at `https://YOUR_USERNAME.github.io/frank-lab.github.io/`

### Step 5: Configure Custom Domain

1. In GitHub Pages settings, find "Custom domain"
2. Enter: `frankzh.top`
3. Click "Save"

### Step 6: DNS Configuration

**For Aliyun (Alibaba Cloud):**
1. Log in to Aliyun DNS console
2. Find frankzh.top domain
3. Add these records:
   - Type: CNAME | Name: www | Value: `YOUR_USERNAME.github.io`
   - Type: A | Name: @ | Value: `185.199.108.153` (or other GitHub Pages IP)

**For Other DNS Providers:**
- CNAME record: `www` → `YOUR_USERNAME.github.io`
- A record: `@` → `185.199.108.153` (or `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)

**Wait**: DNS changes take 5-60 minutes to propagate worldwide.

### Step 7: Verify Deployment

1. Visit `https://frankzh.top`
2. Test language switching (click 中/EN buttons)
3. Test project cards (click any card)
4. Test on mobile phone

## Adding New Projects

To add a new project, edit `_data/projects.yml`:

```yaml
projects:
  - id: "004"  # Increment the number
    name:
      zh: "你的项目名"
      en: "Your Project Name"
    url: "https://your-project-url.com"
    status: "running"  # running/completed/paused
    brief:
      zh: "项目简介"
      en: "Project brief"
```

Commit and push changes:
```bash
git add _data/projects.yml
git commit -m "add new project"
git push
```

GitHub will automatically rebuild and deploy your site within 1-2 minutes.

## Troubleshooting

**Site not loading:**
- Wait 5-10 minutes for DNS propagation
- Check DNS records are correct
- Verify GitHub Pages is enabled

**Project cards not showing:**
- Check `_data/projects.yml` syntax (use YAML validator)
- Ensure no syntax errors in the file

**Language not switching:**
- Clear browser cache
- Check browser console for errors

**Design looks wrong:**
- Clear browser cache
- Try different browser
- Check internet connection (CDN resources)

## Support

If you encounter issues:
1. Check GitHub Pages deployment status in repository Settings → Pages
2. Review commit history for recent changes
3. Consult Jekyll documentation if needed

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [YAML Format Reference](https://yaml.org/spec/1.2/spec.html)
```

- [ ] **Step 2: Commit deployment README**

```bash
git add README.md
git commit -m "docs: add deployment instructions for user"
```

---

### Task 15: Create Gemfile for Jekyll dependencies

**Files:**
- Create: `Gemfile`

- [ ] **Step 1: Write Gemfile**

```ruby
source "https://rubygems.org"

# Ruby version for GitHub Pages compatibility
ruby "~> 3.1"

gem "jekyll", "~> 4.3"
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"
```

- [ ] **Step 2: Commit Gemfile**

```bash
git add Gemfile
git commit -m "feat: add Jekyll dependencies Gemfile"
```

---

### Task 16: Create .gitignore file

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Write .gitignore**

```text
# Jekyll
.sass-cache/
.jekyll-cache/
.jekyll-metadata

# Bundler
vendor/bundle/
vendor/cache/
vendor/gems/

# Node (if needed)
node_modules/
package-lock.json

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# Build
_site/
```

- [ ] **Step 2: Commit .gitignore**

```bash
git add .gitignore
git commit -m "chore: add .gitignore for Jekyll project"
```

---

### Task 17: Create placeholder favicon

**Files:**
- Create: `favicon.ico`

- [ ] **Step 1: Create favicon documentation**

```bash
# Create a README file explaining favicon requirements
cat > FAVICON_GUIDE.md << 'EOF'
# Favicon Guide

## How to Add a Custom Favicon

1. **Create your favicon**:
   - Size: 16x16 or 32x32 pixels
   - Format: .ico, .png, or .svg
   - Tools: Canva, Favicon.io, or Photoshop

2. **Place the file**:
   - Name it: `favicon.ico` (or .png/.svg)
   - Location: Root directory of the project

3. **Update if needed**:
   - The HTML already references `/favicon.ico`
   - If using .png or .svg, update the link in `_layouts/default.html`

## Temporary Solution

For now, browsers will show a default icon. You can add your custom favicon later.

## Online Tools

- [Favicon.io](https://favicon.io/) - Generate favicons online
- [Canva](https://www.canva.com/) - Design favicos with templates
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Advanced favicon generation
EOF
```

- [ ] **Step 2: Commit favicon guide**

```bash
git add FAVICON_GUIDE.md
git commit -m "docs: add favicon setup guide"
```

---

### Task 18: Final commit and documentation

**Files:**
- Modify: Current repository

- [ ] **Step 1: Add all remaining files**

```bash
git add .
```

- [ ] **Step 2: Check status**

```bash
git status
```

- [ ] **Step 3: Final commit**

```bash
git commit -m "feat: complete Frank's Lab website implementation

- Dark tech theme with responsive design
- Bilingual support (Chinese/English)
- Project card grid layout
- Language switching functionality
- Complete deployment documentation
```

- [ ] **Step 4: Create implementation summary**

Create a file `IMPLEMENTATION_SUMMARY.md`:

```markdown
# Frank's Lab Website - Implementation Complete

## What Was Built

✅ Complete Jekyll-based static website
✅ Dark tech theme with animations
✅ Bilingual support (Chinese/English)
✅ Responsive project card grid
✅ Language switching functionality
✅ Deployment-ready with GitHub Pages

## Files Created

- `_config.yml` - Jekyll configuration
- `_data/projects.yml` - Project data
- `_data/lab-info.yml` - Lab information
- `_locales/zh.yml` - Chinese language pack
- `_locales/en.yml` - English language pack
- `_layouts/default.html` - Base layout
- `_layouts/home.html` - Homepage layout
- `_includes/header.html` - Header component
- `_includes/footer.html` - Footer component
- `_includes/language-switcher.html` - Language toggle
- `assets/css/main.scss` - Main stylesheet
- `assets/js/language-switcher.js` - Language logic
- `index.html` - Main page
- `README.md` - Deployment guide
- `Gemfile` - Jekyll dependencies
- `.gitignore` - Git ignore rules

## Next Steps for User

1. Replace sample project data with real projects
2. Update lab information
3. Deploy to GitHub Pages
4. Configure custom domain frankzh.top
5. Test and launch

## Technical Details

- **Framework**: Jekyll (GitHub Pages native)
- **Styling**: SCSS with dark tech theme
- **Scripting**: Vanilla JavaScript for language switching
- **Hosting**: GitHub Pages (free)
- **Domain**: Custom domain support
- **Responsiveness**: Mobile, tablet, desktop

## Performance

- Static files for fast loading
- No database required
- CDN-friendly
- SEO optimized
```

- [ ] **Step 5: Commit implementation summary**

```bash
git add IMPLEMENTATION_SUMMARY.md
git commit -m "docs: add implementation summary"
```

---

### Task 19: Verify repository structure

**Files:**
- Verify: Complete repository structure

- [ ] **Step 1: Check final directory structure**

```bash
tree -L 3 -I 'node_modules|.git' .
```

Expected output:
```
.
├── Gemfile
├── README.md
├── IMPLEMENTATION_SUMMARY.md
├── _config.yml
├── _data/
│   ├── lab-info.yml
│   └── projects.yml
├── _includes/
│   ├── footer.html
│   ├── header.html
│   └── language-switcher.html
├── _layouts/
│   ├── default.html
│   └── home.html
├── _locales/
│   ├── en.yml
│   └── zh.yml
├── assets/
│   ├── css/
│   │   └── main.scss
│   └── js/
│       └── language-switcher.js
├── favicon.ico
└── index.html
```

- [ ] **Step 2: Verify git status**

```bash
git status
```

Expected: All files committed, no uncommitted changes.

- [ ] **Step 3: Create final deployment package**

```bash
git log --oneline
```

Verify commit history shows all implementation steps.

---

### Task 20: Prepare for user deployment

**Files:**
- Final preparation

- [ ] **Step 1: Create deployment checklist**

Create `DEPLOYMENT_CHECKLIST.md`:

```markdown
# Frank's Lab Website - Deployment Checklist

## Before You Start

- [ ] Have GitHub account ready
- [ ] Prepared project information (name, URL, brief, status)
- [ ] Prepared lab information (established year, areas)
- [ ] Know frankzh.top DNS provider

## Deployment Steps

### GitHub Repository
- [ ] Created repository: `YOUR_USERNAME.github.io`
- [ ] Repository is public
- [ ] All files uploaded

### GitHub Pages Configuration
- [ ] Enabled GitHub Pages in Settings
- [ ] Selected main branch, / (root) folder
- [ ] Configured custom domain: frankzh.top
- [ ] Verified GitHub Pages deployment

### DNS Configuration
- [ ] Added CNAME record: www → YOUR_USERNAME.github.io
- [ ] Added A record: @ → 185.199.108.153
- [ ] Waited for DNS propagation (5-60 min)

### Content Customization
- [ ] Updated `_data/projects.yml` with real projects
- [ ] Updated `_data/lab-info.yml` with lab info
- [ ] Reviewed language packs in `_locales/`
- [ ] Tested project links

### Testing
- [ ] Site loads at https://frankzh.top
- [ ] Language switching works (中/EN buttons)
- [ ] Project cards display correctly
- [ ] All project links work
- [ ] Mobile layout looks good
- [ ] Desktop layout looks good
- [ ] Animations work smoothly

## Post-Deployment

- [ ] Shared URL with others for testing
- [ ] Checked on different browsers
- [ ] Checked on mobile devices
- [ ] Verified SEO basics (title, meta tags)
- [ ] Set up basic analytics (optional)

## Maintenance

To add new projects:
- [ ] Edit `_data/projects.yml`
- [ ] Commit and push changes
- [ ] Wait 1-2 minutes for automatic deployment

## Common Issues

- **Site not loading**: Check DNS, wait for propagation
- **Design broken**: Clear cache, try different browser
- **Projects not showing**: Check YAML syntax
- **Language not switching**: Check JavaScript, clear cache

## Success Criteria

✅ All checklist items completed
✅ Site accessible at frankzh.top
✅ All features working as expected
✅ Ready to add new projects independently
```

- [ ] **Step 2: Commit deployment checklist**

```bash
git add DEPLOYMENT_CHECKLIST.md
git commit -m "docs: add deployment checklist for user"
```

- [ ] **Step 3: Final verification**

```bash
git log --oneline | head -10
```

Should show all 19+ commits representing implementation tasks.

---

## Completion Criteria

The implementation is complete when:

✅ All Jekyll files are created and committed
✅ Dark tech theme styling is implemented
✅ Bilingual language packs are configured
✅ Language switching functionality works
✅ Project card grid displays correctly
✅ Responsive design works on all devices
✅ Deployment documentation is complete
✅ Repository is ready for user to deploy

## Next Steps

After implementation completion:

1. **User Deployment**: Guide user through GitHub Pages deployment
2. **Content Customization**: Help user replace sample data with real projects
3. **Domain Configuration**: Assist with DNS setup for frankzh.top
4. **Testing**: Verify all functionality works as expected
5. **Training**: Show user how to add new projects independently

---

**Total Estimated Implementation Time**: 2-3 hours for agentic worker
**User Deployment Time**: 30-60 minutes
**Maintenance**: 5-10 minutes to add new projects
