/* ============================================================
   QAsight — lightweight i18n
   TR is the source (already in the HTML). EN strings come from
   SHARED_EN (site chrome) + window.PAGE_I18N (per-page content).
   The chosen language is remembered in localStorage.
   ============================================================ */
(function () {
  "use strict";

  // Shared "chrome" strings used on every page.
  var SHARED_EN = {
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.demo": "Request a demo",
    "foot.rights": "© 2026 QAsight — all modules reserved",
    "foot.build": "build: v1.0.0",
    "foot.products": "Products",
    "foot.features": "Features",
    "foot.contact": "Contact",
    "common.back": "← All products",
    "common.active": "Active",
    "common.details": "See details ↗",
    "common.contact": "Get in touch"
  };

  var STORAGE_KEY = "qasight_lang";
  var EN = {};
  var k;
  for (k in SHARED_EN) { if (SHARED_EN.hasOwnProperty(k)) EN[k] = SHARED_EN[k]; }
  var page = window.PAGE_I18N || {};
  for (k in page) { if (page.hasOwnProperty(k)) EN[k] = page[k]; }

  var nodes = [].slice.call(document.querySelectorAll("[data-i18n]"));

  // Capture the original Turkish markup once, so switching back is lossless.
  nodes.forEach(function (n) {
    n.setAttribute("data-tr", n.innerHTML);
  });

  var docTitleTR = document.title;

  function apply(lang) {
    document.documentElement.setAttribute("lang", lang);
    nodes.forEach(function (n) {
      var key = n.getAttribute("data-i18n");
      if (lang === "en" && EN[key] != null) {
        n.innerHTML = EN[key];
      } else {
        n.innerHTML = n.getAttribute("data-tr");
      }
    });
    if (lang === "en" && EN["doc.title"]) {
      document.title = EN["doc.title"];
    } else {
      document.title = docTitleTR;
    }
    [].slice.call(document.querySelectorAll(".lang-btn")).forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var saved = "tr";
  try { saved = localStorage.getItem(STORAGE_KEY) || "tr"; } catch (e) {}

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".lang-btn") : null;
    if (!b) return;
    apply(b.getAttribute("data-lang"));
  });

  apply(saved === "en" ? "en" : "tr");
})();
