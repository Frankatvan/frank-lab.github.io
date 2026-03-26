(function () {
  "use strict";

  var STORAGE_KEY = "franklab-language";

  var translations = {
    zh: {
      "lab.title": "Frank's Lab",
      "lab.subtitle": "实验室控制台",
      "lab.status": "探索中",
      "lab.status_active": "探索中",
      "footer.established": "成立于",
      "footer.areas": "探索领域",
      "footer.copyright": "© 2024 Frank's Lab. All rights reserved."
    },
    en: {
      "lab.title": "Frank's Lab",
      "lab.subtitle": "Lab Console",
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
