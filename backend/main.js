
  document.addEventListener('DOMContentLoaded', function() {
      const header = document.getElementById('mainHeader');
      const scrollThreshold = 50; // Number of pixels to scroll down before the header changes

      function updateHeaderOnScroll() {
          if (window.scrollY > scrollThreshold) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      }

      // Call the function on initial load (in case user refreshes at a scrolled position)
      updateHeaderOnScroll();

      // Add event listener for scroll events
      window.addEventListener('scroll', updateHeaderOnScroll);
  });


function openMenu() {
document.getElementById('sideMenu').classList.add('active');
document.getElementById('overlay').classList.add('active');
}

function closeMenu() {
document.getElementById('sideMenu').classList.remove('active');
document.getElementById('overlay').classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("main-nav");
  const footerLinks = document.getElementById("footer-links");
  const sideMenuList = document.getElementById("side-menu-list");

  const inPagesFolder = window.location.pathname.includes("/pages/");
  const pathPrefix = inPagesFolder ? "../" : "";

  // Main Navbar Links
  if (navContainer) {
    navContainer.innerHTML = `
      <li><a href="${pathPrefix}pages/personal.html" class="nav-link">Service Plans</a></li>
      <li><a href="${pathPrefix}pages/projects.html" class="nav-link">Projects</a></li>
      <li><a href="${pathPrefix}pages/oscure-ai.html" class="nav-link">Oscure AI</a></li>
    `;
  }

  // Footer Links
  if (footerLinks) {
    footerLinks.innerHTML = `
      <a href="${pathPrefix}pages/privacypolicy.html">PRIVACY POLICY</a>
      <a href="${pathPrefix}pages/termsofservice.html">TERMS OF SERVICE</a>
      <a href="${pathPrefix}pages/support.html">SUPPORT</a>
      <a href="${pathPrefix}pages/contact.html">CONTACT</a>
    `;
  }

  // Side Menu Links
  if (sideMenuList) {
    sideMenuList.innerHTML = `
      <li><a href="${pathPrefix}pages/updates.html">Updates</a></li>
      <li><a href="${pathPrefix}pages/softwares.html">Softwares</a></li>
      <li><a href="${pathPrefix}pages/launches.html">Launches</a></li>
      <li><a href="${pathPrefix}pages/stories.html">Customer Stories</a></li>
      <li><a href="${pathPrefix}pages/about.html">About</a></li>
      <li><a href="${pathPrefix}pages/contact.html">Contact</a></li>
      <li><a href="${pathPrefix}pages/help.html">Help Center</a></li>
      <li><a href="${pathPrefix}pages/careers.html">Careers</a></li>
    `;
  }
});
