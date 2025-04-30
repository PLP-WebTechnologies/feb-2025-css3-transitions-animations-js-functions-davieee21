// Function to apply saved theme or default to light
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
  });
  
  // Get toggle button
  const toggleButton = document.getElementById("themeToggle");
  
  // Add click event listener
  toggleButton.addEventListener("click", () => {
    // Toggle between light and dark classes
    const isDark = document.body.classList.toggle("dark");
    document.body.classList.toggle("light", !isDark);
  
    // Save current theme to localStorage
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  
    // Trigger animation manually using inline style
    toggleButton.style.transform = "scale(1.2)";
    setTimeout(() => {
      toggleButton.style.transform = "scale(1)";
    }, 150);
  });
  