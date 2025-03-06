
// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Handle navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      }
    }
  });
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observeTimeline = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });
};

// Innovations tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
  });
});

// Current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize observations
window.addEventListener('DOMContentLoaded', () => {
  observeTimeline();
  
  // Set the first tab as active by default
  tabs[0].classList.add('active');
  tabContents[0].classList.add('active');
});


