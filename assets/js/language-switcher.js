// Language Switcher for Frank's Lab Website
// 自动检测浏览器语言 + 手动切换功能

// 语言配置
const LANGUAGES = {
  zh: 'Chinese',
  en: 'English'
};

// 默认语言检测
function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// 当前语言状态
let currentLanguage = localStorage.getItem('language') || detectLanguage();

// 语言切换函数
function switchLanguage(lang) {
  if (LANGUAGES[lang]) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageSwitcherUI();

    // 可选：刷新页面确保所有内容更新
    // window.location.reload();
  }
}

// 更新页面语言显示
function updatePageLanguage() {
  // 获取所有带有 data-i18n 属性的元素
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  // 更新 HTML lang 属性
  document.documentElement.lang = currentLanguage;
}

// 更新语言切换器UI
function updateLanguageSwitcherUI() {
  const switcher = document.querySelector('.language-switcher');
  if (switcher) {
    // 移除所有活跃状态
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // 添加当前语言活跃状态
    const activeBtn = switcher.querySelector(`[data-lang="${currentLanguage}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }
}

// 初始化语言切换器
function initLanguageSwitcher() {
  const switcherContainer = document.createElement('div');
  switcherContainer.className = 'language-switcher';

  Object.keys(LANGUAGES).forEach(lang => {
    const button = document.createElement('button');
    button.className = `lang-btn ${lang === currentLanguage ? 'active' : ''}`;
    button.setAttribute('data-lang', lang);
    button.textContent = LANGUAGES[lang];
    button.addEventListener('click', () => switchLanguage(lang));
    switcherContainer.appendChild(button);
  });

  // 插入到页面中（根据页面结构调整）
  const header = document.querySelector('header');
  if (header) {
    header.appendChild(switcherContainer);
  }
}

// 双语翻译数据
const translations = {
  zh: {
    'lab-title': "Frank's Lab",
    'lab-subtitle': "实验室控制台",
    'lab-status': "探索中",
    'status-running': "进行中",
    'status-completed': "已完成",
    'status-paused': "暂停中",
    'lab-established': "成立时间",
    'lab-areas': "探索领域",
    'project-brief': "简介"
  },
  en: {
    'lab-title': "Frank's Lab",
    'lab-subtitle': "Lab Console",
    'lab-status': "Exploring",
    'status-running': "Running",
    'status-completed': "Completed",
    'status-paused': "Paused",
    'lab-established': "Established",
    'lab-areas': "Areas",
    'project-brief': "Brief"
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
  updatePageLanguage();
});

// 暴露全局函数供其他脚本使用
window.LanguageSwitcher = {
  switchLanguage: switchLanguage,
  getCurrentLanguage: () => currentLanguage
};

// 自动语言检测（可选）
if (localStorage.getItem('language') === null) {
  console.log('Auto-detected language:', currentLanguage);
}