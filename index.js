// DOM Elements
const navigationLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('section');
const themeToggle = document.querySelector('.theme-toggle');
const burgerMenu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');
const scrollTopBtn = document.querySelector('.scroll-to-top');
const skillBars = document.querySelectorAll('.skill-level .progress-bar');
const projectCards = document.querySelectorAll('.project-card');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.querySelector('#contact-form');
const currentYear = document.querySelector('#current-year');

// Preloader (if you have one)
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloader.classList.add('fade-out');
//     setTimeout(() => {
//       preloader.style.display = 'none';
//     }, 500);
//   }, 1000);
// });

// Set current year in footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Smooth scrolling
navigationLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - header.offsetHeight,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
      }
    }
  });
});

// Mobile burger menu toggle
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Active section highlight on scroll
window.addEventListener('scroll', () => {
  // Header shadow on scroll
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Show/hide scroll to top button
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }

  // Highlight active navigation link
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight - 10;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navigationLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Check if elements are in viewport and animate them
  animateOnScroll();
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dark/Light theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');

  // Update theme toggle icon (if needed)
  const themeIcon = themeToggle.querySelector('i');
  if (themeIcon) {
    themeIcon.classList.toggle('bi-moon-stars-fill');
    themeIcon.classList.toggle('bi-sun-fill');
  }
});

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    // Update theme toggle icon (if needed)
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      themeIcon.classList.remove('bi-moon-stars-fill');
      themeIcon.classList.add('bi-sun-fill');
    }
  }
  // Initialize skill bars and project cards on load if needed
  animateSkillBars();
  animateProjectCards();
});

// Skill bar animation
function animateSkillBars() {
  skillBars.forEach(skillBar => {
    const percentage = skillBar.getAttribute('data-percent') || '0%';
    skillBar.style.width = '0%';

    setTimeout(() => {
      skillBar.style.width = percentage;
    }, 200);
  });
}

// Project filtering (if you have project categories)
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
        card.style.display = 'block';
        setTimeout(() => {
          card.classList.add('show');
        }, 100);
      } else {
        card.style.display = 'none';
        card.classList.remove('show');
      }
    });
  });
});

// Contact form validation and submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic form validation
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const submitBtn = document.querySelector('#submit-btn');
    const formStatus = document.querySelector('.form-status');

    if (!name.value || !email.value || !message.value) {
      formStatus.textContent = 'Please fill in all fields';
      formStatus.classList.add('error');
      formStatus.classList.remove('success');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      formStatus.textContent = 'Please enter a valid email address';
      formStatus.classList.add('error');
      formStatus.classList.remove('success');
      return;
    }

    // Simulate form submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate API call with timeout
    setTimeout(() => {
      formStatus.textContent = 'Message sent successfully!';
      formStatus.classList.add('success');
      formStatus.classList.remove('error');
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      contactForm.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.classList.remove('success');
      }, 5000);
    }, 1500);
  });
}

// Project card animations
function animateProjectCards() {
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    card.classList.add('show');
  });
}

// Animate elements on scroll
function animateOnScroll() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  animateElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('animate');
    }
  });
}

// Typing effect for hero section
function typeWriter(element, text, speed = 100, startDelay = 500) {
  const heroText = document.querySelector(element);
  if (!heroText) return;

  heroText.textContent = '';
  heroText.style.visibility = 'visible';

  setTimeout(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        // Add blinking cursor class when typing is complete
        heroText.classList.add('typing-complete');
      }
    }, speed);
  }, startDelay);
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    typeWriter('.hero-title', text);
  }
});

// Project modal functionality
const projectDetails = [
  {
    id: 'project1',
    title: 'E-commerce Website',
    description:
      'A fully responsive e-commerce platform built with React and Node.js. Features include user authentication, product filtering, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    images: ['project1-1.jpg', 'project1-2.jpg', 'project1-3.jpg'],
    link: 'https://example.com/project1',
    github: 'https://github.com/yourusername/project1'
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description:
      'A productivity application for managing tasks and projects. Built with React and Firebase, featuring real-time updates, user authentication, and team collaboration.',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    images: ['project2-1.jpg', 'project2-2.jpg'],
    link: 'https://example.com/project2',
    github: 'https://github.com/yourusername/project2'
  },
  // Add more project details as needed
];

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('id');
    const project = projectDetails.find(p => p.id === projectId);

    if (project) {
      showProjectModal(project);
    }
  });
});

function showProjectModal(project) {
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'project-modal';

  // Create modal content
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>${project.title}</h2>
      <div class="project-images">
        ${project.images.map(img => `<img src="assets/images/${img}" alt="${project.title}">`).join('')}
      </div>
      <div class="project-description">
        <p>${project.description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="project-links">
          <a href="${project.link}" target="_blank" class="btn primary-btn">View Live</a>
          <a href="${project.github}" target="_blank" class="btn secondary-btn">GitHub Repo</a>
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.appendChild(modal);

  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);

  // Close modal functionality
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => {
    closeProjectModal(modal);
  });

  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal(modal);
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal(modal);
    }
  });
}

function closeProjectModal(modal) {
  modal.classList.remove('show');

  // Remove modal after animation
  setTimeout(() => {
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  }, 300);
}