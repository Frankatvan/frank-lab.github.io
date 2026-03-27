(function () {
  "use strict";

  var STORAGE_KEY = "franklab-language";

  var translations = {
    zh: {
      "lab.title": "Frank's Lab",
      "lab.subtitle": "这里是我的思维实验室。作为一名一直在管理逻辑与技术边界间游走的探索者，我在这里记录那些试图让商业更高效、让流程更自动化的“小实验”。这不仅是为了解决当下的难题，更是为了给未来的自己留下一份关于技术思考的注脚。目前实验室正处于初创破壳阶段，欢迎围观我的奇思妙想。",
      "lab.status": "探索中",
      "lab.status_active": "探索中",
      "footer.established": "成立于",
      "footer.areas": "探索领域",
      "footer.copyright": "© 2024 Frank's Lab. All rights reserved."
    },
    en: {
      "lab.title": "Frank's Lab",
      "lab.subtitle": "Welcome to my digital sandbox. As an explorer navigating the intersection of management logic and technical frontiers, I use this space to document 'mini-experiments' aimed at boosting business efficiency and workflow automation. It's more than just solving today's puzzles; it's a footnote of technical reflections for my future self. The lab is currently in its Hatching Phase - feel free to stick around and see what's brewing.",
      "lab.status": "Exploring",
      "lab.status_active": "Exploring",
      "footer.established": "Established",
      "footer.areas": "Areas of Exploration",
      "footer.copyright": "© 2024 Frank's Lab. All rights reserved."
    }
  };

  var statusTranslations = {
    zh: {
      running: "进行中",
      completed: "已完成",
      paused: "暂停"
    },
    en: {
      running: "In Progress",
      completed: "Completed",
      paused: "Paused"
    }
  };

  function getBrowserLanguage() {
    var lang = (navigator.language || navigator.userLanguage || "zh").toLowerCase();
    return lang.indexOf("zh") === 0 ? "zh" : "en";
  }

  function getSavedLanguage() {
    try {
      var lang = window.localStorage.getItem(STORAGE_KEY);
      return lang === "zh" || lang === "en" ? lang : null;
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore write failure in private mode.
    }
  }

  function updateI18nTexts(lang) {
    var map = translations[lang] || translations.zh;
    var nodes = document.querySelectorAll("[data-i18n]");

    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (map[key]) {
        node.textContent = map[key];
      }
    });
  }

  function updateProjectTexts(lang) {
    var nameAttr = lang === "zh" ? "nameZh" : "nameEn";
    var briefAttr = lang === "zh" ? "briefZh" : "briefEn";

    document.querySelectorAll("[data-project-name]").forEach(function (node) {
      if (node.dataset[nameAttr]) {
        node.textContent = node.dataset[nameAttr];
      }
    });

    document.querySelectorAll("[data-project-brief]").forEach(function (node) {
      if (node.dataset[briefAttr]) {
        node.textContent = node.dataset[briefAttr];
      }
    });
  }

  function updateAreaText(lang) {
    var areaAttr = lang === "zh" ? "zh" : "en";
    document.querySelectorAll("[data-area-text]").forEach(function (node) {
      if (node.dataset[areaAttr]) {
        node.textContent = node.dataset[areaAttr];
      }
    });
  }

  function updateStatusText(lang) {
    var map = statusTranslations[lang] || statusTranslations.zh;
    document.querySelectorAll("[data-status-text]").forEach(function (node) {
      var key = node.getAttribute("data-status");
      if (map[key]) {
        node.textContent = map[key];
      }
    });
  }

  function updateActiveButton(lang) {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  }

  function applyLanguage(lang) {
    var target = lang === "zh" ? "zh" : "en";
    document.documentElement.lang = target === "zh" ? "zh-CN" : "en";

    updateI18nTexts(target);
    updateProjectTexts(target);
    updateAreaText(target);
    updateStatusText(target);
    updateActiveButton(target);
    saveLanguage(target);
  }

  function initLanguageSwitcher() {
    var currentLang = getSavedLanguage() || getBrowserLanguage();

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.dataset.lang);
      });
    });

    applyLanguage(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
