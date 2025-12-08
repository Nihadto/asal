const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleBtn.textContent =
      document.body.classList.contains("dark-theme")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
  });

