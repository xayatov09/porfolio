const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));


const logo = document.getElementById("logo");
logo.addEventListener("click", () => location.reload());

const bg = document.querySelector(".bg-lines");
const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

function createSymbol() {
  const span = document.createElement("span");
  span.classList.add("symbol");
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 1.5 + Math.random() * 2 + "s";
  span.style.fontSize = 14 + Math.random() * 10 + "px";
  bg.appendChild(span);
  setTimeout(() => span.remove(), 4000);
}
setInterval(createSymbol, 90);

// Telegramga yuborish (contact form)
const BOT_TOKEN = "BU_YERGA_OZING_BOT_TOKENINGNI_QOY"; // @BotFather dan oling
const CHAT_ID = "BU_YERGA_SENING_CHAT_IDINGNI_QOY";     // @userinfobot dan oling

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const tg = document.getElementById("telegram").value;
  const message = document.getElementById("message").value;

  const text = `📩 Yangi xabar:\n👤 Ism: ${name}\n🔗 Telegram: ${tg}\n💬 Xabar: ${message}`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });
    alert("✅ Xabar yuborildi! Tez orada javob beraman.");
    e.target.reset();
  } catch (err) {
    alert("❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
    console.error(err);
  }
});

// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
  // Set default language to Uzbek
  let currentLang = 'uz';
  
  // Get all elements with language data attributes
  const elements = document.querySelectorAll('[data-uz], [data-ru], [data-en]');
  
  // Language buttons
  const uzbBtn = document.getElementById('uzb-btn');
  const ruBtn = document.getElementById('ru-btn');
  const enBtn = document.getElementById('en-btn');
  
  // Function to update text based on selected language
  function updateText(lang) {
    elements.forEach(element => {
      if (element.hasAttribute(`data-${lang}`)) {
        element.textContent = element.getAttribute(`data-${lang}`);
      }
    });
    
    // Update active button state
    uzbBtn.classList.remove('active');
    ruBtn.classList.remove('active');
    enBtn.classList.remove('active');
    
    if (lang === 'uz') uzbBtn.classList.add('active');
    if (lang === 'ru') ruBtn.classList.add('active');
    if (lang === 'en') enBtn.classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferredLang', lang);
    currentLang = lang;
  }
  
  // Button click events
  uzbBtn?.addEventListener('click', () => updateText('uz'));
  ruBtn?.addEventListener('click', () => updateText('ru'));
  enBtn?.addEventListener('click', () => updateText('en'));
  
  // Check for saved language preference or use browser language
  const savedLang = localStorage.getItem('preferredLang');
  const browserLang = navigator.language.substring(0, 2);
  
  if (savedLang) {
    updateText(savedLang);
  } else if (browserLang === 'ru') {
    updateText('ru');
  } else if (browserLang === 'en') {
    updateText('en');
  } else {
    updateText('uz'); // Default to Uzbek
  }
  
  // Initialize other effects
  createParticles();
  revealOnScroll();
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.innerHTML = '<div class="loader"></div>';
  document.body.prepend(preloader);
  
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1500);
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-box, .portfolio-box, input, textarea');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
  });
  el.addEventListener('mouseleave', () => {
  });
});

// Particle Background
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 1px and 3px
    const size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration between 10s and 20s
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random delay
    particle.style.animationDelay = `-${Math.random() * 10}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    particlesContainer.appendChild(particle);
  }
}

// Add scroll reveal animation
const revealElements = document.querySelectorAll('section, .service-box, .portfolio-box');
  
const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Add glitch effect to title
const title = document.querySelector('.neon-title');
if (title) {
  title.setAttribute('data-text', title.textContent);
  title.classList.add('glitch');
}

// Form submission with animation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="loader" style="width: 20px; height: 20px; margin: 0 auto;"></div>';
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Xabaringiz yuborildi! Tez orada siz bilan bog\'lanaman.';
      successMessage.style.cssText = `
        background: rgba(0, 234, 255, 0.2);
        color: #00eaff;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
        text-align: center;
        animation: fadeIn 0.5s ease;
      `;
      
      contactForm.appendChild(successMessage);
      
      // Reset button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
      // Remove message after 5 seconds
      setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
          successMessage.remove();
        }, 500);
      }, 5000);
      
    }, 1500);
  });
}

// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.fill');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Animate skill bars when section is in view
const aboutSection = document.querySelector('.about');
if (aboutSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(aboutSection);
}

// Add parallax effect to background
window.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth - e.pageX) / 100;
  const y = (window.innerHeight - e.pageY) / 100;
  const bgLines = document.querySelector('.bg-lines');
  if (bgLines) {
    bgLines.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  // Space key
  if (e.code === 'Space') {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  }
  
  // Arrow up/down for navigation
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    window.scrollBy({
      top: 100,
      behavior: 'smooth'
    });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    window.scrollBy({
      top: -100,
      behavior: 'smooth'
    });
  }
});

// Add scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 234, 255, 0.2);
  border: 2px solid #00eaff;
  color: #00eaff;
  font-size: 24px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top on click
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
  scrollToTopBtn.style.background = '#00eaff';
  scrollToTopBtn.style.color = '#000';
  scrollToTopBtn.style.boxShadow = '0 0 20px #00eaff';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
  scrollToTopBtn.style.background = 'rgba(0, 234, 255, 0.2)';
  scrollToTopBtn.style.color = '#00eaff';
  scrollToTopBtn.style.boxShadow = 'none';
});
