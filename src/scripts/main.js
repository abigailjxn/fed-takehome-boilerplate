// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

// Function for navicon animation
function toggleMobileNav(x) {
    x.classList.toggle("change");
  }
// Function for toggling mobile navbar
function classToggle() {
    const navs = document.querySelectorAll('.mobile-navbar')
    navs.forEach(nav => nav.classList.toggle('show-mobile-navbar'));
  }

// Listen for icon click and run classToggle function
document.querySelector('.navicon-toggle')
    .addEventListener('click', classToggle);