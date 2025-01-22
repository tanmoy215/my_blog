


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




// Navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () { 
  nav.classList.toggle('active'); 
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// Theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');
const header = document.getElementById('headert'); // Header section

const updateHeaderBg = function () {
  if (document.body.classList.contains('light-theme')) {
    header.style.backgroundColor = '#4169E1'; // Light mode color
  } else {
    header.style.backgroundColor = '#4169E1'; // Dark mode color
  }
};




