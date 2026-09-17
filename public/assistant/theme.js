// Share next-themes' storage key and defaultTheme="light" from the blog layout.
(() => {
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = readPreference();

  function readPreference() {
    try {
      const saved = localStorage.getItem("theme");
      return ["light", "dark", "system"].includes(saved) ? saved : "light";
    } catch {
      return "light";
    }
  }

  function applyTheme() {
    const dark = preference === "dark" || (preference === "system" && system.matches);
    root.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]').content = dark ? "#08090a" : "#ffffff";
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(dark));
  }

  applyTheme();
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    toggle.hidden = false;
    applyTheme();
    toggle.addEventListener("click", () => {
      preference = root.classList.contains("dark") ? "light" : "dark";
      try {
        localStorage.setItem("theme", preference);
      } catch {
        // The control still works for this page when storage is unavailable.
      }
      applyTheme();
    });
  });

  window.addEventListener("storage", (event) => {
    if (event.key === "theme" || event.key === null) {
      preference = readPreference();
      applyTheme();
    }
  });
  system.addEventListener("change", applyTheme);
})();
