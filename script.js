const openTab = (evt, tabName) => {
  // Hide all tab content
  const tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // Remove "active" class from all tab buttons
  const tabLinks = document.querySelectorAll(".tablink");
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the current tab content
  const currentTab = document.getElementById(tabName);
  if (currentTab) {
    currentTab.style.display = "block";
  }

  // Add "active" class to the clicked button
  evt.currentTarget.classList.add("active");
};

// Default to show "ABOUT ME" tab when the page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("about-me").style.display = "block";
  const defaultTab = document.querySelector(".tablink");
  if (defaultTab) {
    defaultTab.classList.add("active");
  }
});
