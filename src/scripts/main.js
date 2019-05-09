// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

const mobileNav = document.getElementsByClassName("mobile-navbar");

function toggleMobileNav(x) {
    x.classList.toggle("change");
  }

  function classToggle() {
    const navs = document.querySelectorAll('.mobile-navbar')
    navs.forEach(nav => nav.classList.toggle('show-mobile-navbar'));
  }
  document.querySelector('.navicon-toggle')
    .addEventListener('click', classToggle);