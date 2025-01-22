


//  ===== Loader Section ===== 



// Wait for the window to fully load
window.onload = function () {
  const loader = document.getElementById("loader");
  const loginPage = document.getElementById("login-page");

  // Set initial header background based on the theme
  updateHeaderBg();

  // Simulate loader duration
  setTimeout(() => {
    loader.style.opacity = "0"; // Fade out loader
    setTimeout(() => {
      loader.style.display = "none"; // Completely hide loader
      loginPage.style.display = "grid"; // Show login page
    }, 700); // Wait for fade-out transition
  }, 2800); // 4 seconds loader display
};







// Select Elements
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const desktopNav = document.querySelector('.desktop-nav');

const postFilter = document.querySelector('.post-filter');

// Toggle Functionality for Mobile Nav
const navToggleFunc = () => {
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    desktopNav.style.display = 'none'; // Hide desktop navigation
    document.body.style.overflow = 'hidden'; // Disable scrolling

    nav.style.zIndex = '1000';
    postFilter.style.zIndex = '0';

  } else {
    desktopNav.style.display = ''; // Restore desktop navigation
    document.body.style.overflow = ''; // Enable scrolling

    nav.style.zIndex = '1000';
    postFilter.style.zIndex = '0';

  }
};

// Event Listeners
navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);















// Theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');
const header = document.getElementById('headert'); // Header section

const updateHeaderBg = function () {
  if (document.body.classList.contains('light-theme')) {
    header.style.backgroundColor = 'hsl(218, 34.00%, 38.00%)'; // Light mode color
  } else {
    header.style.backgroundColor = '#4169E1'; // Dark mode color
  }
};




