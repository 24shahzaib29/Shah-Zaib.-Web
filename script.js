/**
 * ==============================================================================
 * SHAHZAIB - FRONT-END WEB DEVELOPER PORTFOLIO
 * Vanilla JavaScript (No Frameworks, No Libraries)
 *
 * HOW TO CUSTOMIZE THIS FILE:
 * Edit the PORTFOLIO_CONFIG object directly below to change your name, title,
 * WhatsApp number, LinkedIn profile, GitHub profile, and other details.
 * Everything is automatically synchronized across the website!
 * ==============================================================================
 */

/* ==============================================================================
   1. PORTFOLIO CONFIGURATION (EDIT YOUR DETAILS HERE)
   ============================================================================== */
const PORTFOLIO_CONFIG = {
  // Basic Information
  name: "Shahzaib",
  title: "Front-End Web Developer",
  
  // Rotating Titles for Typing Effect in Hero
  typingTitles: [
    "Front-End Web Developer",
    "Responsive Web Specialist",
    "UI/UX Design Implementer",
    "Vanilla JavaScript Craftsman"
  ],

  // WHATSAPP NUMBER:
  // Replace with your international WhatsApp number (including country code, NO '+' or spaces).
  // Example for Pakistan: "923496146037" | Example for US: "12025550123" | Example for UK: "447123456789"
  whatsappNumber: "923496146037",

  // SOCIAL PROFILE URLS (Replace with your actual URLs)
  whatsappUrl: "https://wa.me/923496146037",
  linkedinUrl: "https://www.linkedin.com/in/shahzaib",
  githubUrl: "https://github.com/shahzaib",

  // Contact Information
  email: "shahzaib107027@gmail.com",
  phoneDisplay: "+92 30496146037",
  location: "Available Worldwide (Remote)",

  // Media files (Change filenames here if you have different files)
  profilePicture: "./profile.jpg",
  video1: "./video1.mp4",
  video2: "./video2.mp4",
  video3: "./video3.mp4",

  // Featured Projects: Easy to edit, add, or customize at any time!
  projects: [
    {
      id: 1,
      title: "Pizza Club Restaurant Website",
      category: "restaurant",
      categoryLabel: "Food & Hospitality",
      description: "An artisan pizza and Italian restaurant digital experience featuring an interactive visual food menu, instant dish customization, dynamic cart drawer, and table reservation booking system.",
      image: "./project_pizza.jpg",
      technologies: ["HTML5", "CSS3 Grid", "Vanilla JS", "Responsive UI"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/shahzaib",
      features: [
        "Interactive pizza customization with real-time price updates",
        "Dynamic cart drawer with persistent item counter",
        "Complete table reservation booking form with validation",
        "100% mobile-friendly responsive layout optimized for quick ordering"
      ]
    },
    {
      id: 2,
      title: "NovaCommerce Modern Storefront",
      category: "ecommerce",
      categoryLabel: "E-Commerce",
      description: "High-end modern shopping platform featuring real-time product filtering by price & category, persistent shopping bag calculation with LocalStorage, and responsive checkout.",
      image: "./project2.jpg",
      technologies: ["HTML5", "CSS Flexbox", "Vanilla JS", "LocalStorage"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/shahzaib",
      features: [
        "Client-side instant product search and category filtering",
        "Persistent cart calculations stored safely in browser LocalStorage",
        "Streamlined mobile checkout flow with inline validation",
        "Sub-second page loading speed with zero external libraries"
      ]
    },
    {
      id: 3,
      title: "Apex Corporate Business Website",
      category: "business",
      categoryLabel: "Corporate Business",
      description: "A multi-page corporate agency website featuring interactive service matrices, performance metric visualizers, case study showcases, and a multi-step client lead capture funnel.",
      image: "./project3.jpg",
      technologies: ["HTML5", "CSS Grid", "Vanilla JS", "SVG Charts"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/shahzaib",
      features: [
        "Interactive corporate capability cards and case study showcases",
        "Dynamic SVG data charts without third-party chart libraries",
        "Multi-step contact form that directs qualified leads to WhatsApp",
        "Comprehensive cross-browser rendering tested on Chrome, Safari, and Firefox"
      ]
    },
    {
      id: 4,
      title: "Personal Developer Portfolio",
      category: "portfolio",
      categoryLabel: "Developer Portfolio",
      description: "The very portfolio you are browsing: an ultra-fast, zero-dependency personal website featuring custom glassmorphism, dynamic typing, video demonstrations, and direct WhatsApp contact dispatch.",
      image: "./project1.jpg",
      technologies: ["HTML5", "CSS3 Variables", "Vanilla JS", "WhatsApp API"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/shahzaib",
      features: [
        "High-performance architecture with 0 framework overhead",
        "Direct WhatsApp URL dispatch for zero-latency client inquiries",
        "Ambient particle canvas and interactive code editor mockup",
        "Built according to the strictest front-end clean code standards"
      ]
    }
  ]
};

/* ==============================================================================
   2. INITIALIZATION ON DOM READY
   ============================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Sync Configuration to HTML Elements
  syncPortfolioData();

  // 2. Preloader & Top Scroll Progress Bar
  initPreloader();
  initScrollProgressBar();

  // 3. Ambient Canvas Background (Subtle Node Animation)
  initAmbientCanvas();

  // 4. Hero Section Interactive Features
  initTypingEffect();
  initCodeEditorTabs();
  initAnimatedCounters();

  // 5. Navigation & Scroll Systems
  initStickyHeader();
  initMobileNavigation();
  initScrollSpy();
  initSmoothScroll();
  initBackToTop();

  // 6. Section Reveal & Skill Bars Animation
  initScrollReveal();
  initSkillBars();
  initSkillsFilter();

  // 7. Projects Filter & Lightbox Modal
  initProjectsFilter();
  initProjectModal();

  // 8. Video Playback Mutual Pause
  initVideoPlayback();

  // 9. Contact Form Validation & WhatsApp Dispatch
  initContactForm();

  // 10. Dynamic Current Year in Footer
  initDynamicYear();
});

/* ==============================================================================
   3. DATA SYNCHRONIZATION (APPLY CONFIG TO DOM)
   ============================================================================== */
function syncPortfolioData() {
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}`;
  
  // Update all WhatsApp links across the document
  document.querySelectorAll(".dynamic-whatsapp-link").forEach((link) => {
    link.href = whatsappUrl;
  });

  // Update all LinkedIn links
  document.querySelectorAll(".dynamic-linkedin-link").forEach((link) => {
    link.href = PORTFOLIO_CONFIG.linkedinUrl;
  });

  // Update all GitHub links
  document.querySelectorAll(".dynamic-github-link").forEach((link) => {
    link.href = PORTFOLIO_CONFIG.githubUrl;
  });

  // Update Developer Name
  const devNameEl = document.getElementById("devName");
  if (devNameEl) devNameEl.textContent = PORTFOLIO_CONFIG.name;

  // Update WhatsApp Display Text
  const whatsappDisplayEl = document.getElementById("contactWhatsappDisplay");
  if (whatsappDisplayEl) whatsappDisplayEl.textContent = PORTFOLIO_CONFIG.phoneDisplay;
}

/* ==============================================================================
   4. PRELOADER & SCROLL PROGRESS BAR
   ============================================================================== */
function initPreloader() {
  const preloader = document.getElementById("pagePreloader");
  if (!preloader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 350);
  });

  // Fallback in case load takes too long
  setTimeout(() => {
    if (!preloader.classList.contains("fade-out")) {
      preloader.classList.add("fade-out");
    }
  }, 1800);
}

function initScrollProgressBar() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

/* ==============================================================================
   5. AMBIENT BACKGROUND CANVAS (SUBTLE CONSTELLATION NODES)
   ============================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle population
  const count = Math.min(32, Math.floor(width / 45));
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.6 + 0.8
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw particle dots
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 136, 0.45)";
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==============================================================================
   6. DYNAMIC TYPING EFFECT IN HERO
   ============================================================================== */
function initTypingEffect() {
  const typingEl = document.getElementById("typingText");
  if (!typingEl) return;

  const titles = PORTFOLIO_CONFIG.typingTitles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 85;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at full word
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==============================================================================
   7. INTERACTIVE CODE EDITOR TABS IN HERO
   ============================================================================== */
function initCodeEditorTabs() {
  const tabs = document.querySelectorAll(".editor-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = `code-${tab.getAttribute("data-tab")}`;
      document.querySelectorAll(".code-content").forEach((code) => {
        code.classList.remove("active");
      });

      const activeCode = document.getElementById(targetId);
      if (activeCode) activeCode.classList.add("active");
    });
  });
}

/* ==============================================================================
   8. ANIMATED STATISTIC COUNTERS
   ============================================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll(".stat-counter");
  if (!counters.length) return;

  let started = false;

  const runCounters = () => {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);
      let count = 0;
      const speed = Math.max(15, Math.floor(1500 / target));

      const timer = setInterval(() => {
        count += 1;
        counter.textContent = count;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(timer);
        }
      }, speed);
    });
  };

  const heroSection = document.getElementById("home");
  if (!heroSection) {
    runCounters();
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(heroSection);
  } else {
    runCounters();
  }
}

/* ==============================================================================
   9. STICKY HEADER, SCROLL SPY & NAVIGATION
   ============================================================================== */
function initStickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("drawerCloseBtn");
  const backdrop = document.getElementById("drawerBackdrop");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!sections.length) return;

  const highlightNav = () => {
    const scrollY = window.pageYOffset + 140;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${sectionId}`
          );
        });

        mobileLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${sectionId}`
          );
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNav, { passive: true });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==============================================================================
   10. SCROLL REVEAL ANIMATIONS
   ============================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add("revealed"));
  }
}

/* ==============================================================================
   11. SKILL BARS & FILTERING
   ============================================================================== */
function initSkillBars() {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;

  let animated = false;

  const triggerSkillBars = () => {
    const skillCards = document.querySelectorAll(".skill-metric-card");

    skillCards.forEach((card) => {
      const percentEl = card.querySelector(".skill-percent-number");
      const fillBar = card.querySelector(".skill-meter-bar");
      if (!percentEl || !fillBar) return;

      const targetValue = parseInt(percentEl.getAttribute("data-target") || "0", 10);

      fillBar.style.width = `${targetValue}%`;

      let current = 0;
      const duration = 1200;
      const stepTime = Math.max(10, Math.floor(duration / targetValue));

      const timer = setInterval(() => {
        current += 1;
        percentEl.textContent = `${current}%`;
        if (current >= targetValue) {
          clearInterval(timer);
          percentEl.textContent = `${targetValue}%`;
        }
      }, stepTime);
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          triggerSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(skillsSection);
  } else {
    triggerSkillBars();
  }
}

function initSkillsFilter() {
  const tabs = document.querySelectorAll(".skill-tab");
  const cards = document.querySelectorAll(".skill-metric-card");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-skill-cat");

      cards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(14px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==============================================================================
   12. PROJECT CATEGORY FILTERS
   ============================================================================== */
function initProjectsFilter() {
  const filterTabs = document.querySelectorAll(".proj-tab-btn");
  const projectCards = document.querySelectorAll(".project-showcase-card");

  if (!filterTabs.length || !projectCards.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(16px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==============================================================================
   13. PROJECT DETAILS LIGHTBOX / MODAL
   ============================================================================== */
function initProjectModal() {
  const modal = document.getElementById("projectModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBody = document.getElementById("modalBody");
  const previewButtons = document.querySelectorAll(".project-preview-btn");

  if (!modal || !modalBody) return;

  const openModal = (project) => {
    const techTagsHtml = project.technologies
      .map((t) => `<span class="tech-item">${t}</span>`)
      .join("");

    const featuresHtml = project.features
      .map((f) => `<li>${f}</li>`)
      .join("");

    const whatsappInquiryText = encodeURIComponent(
      `Hello Shahzaib! I was viewing your project "${project.title}" on your portfolio and would like to build a similar web solution.`
    );

    modalBody.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
      <div class="modal-body-padding">
        <div class="card-meta-line" style="margin-bottom: 10px;">
          <span>${project.categoryLabel}</span>
          <span class="meta-dot">·</span>
          <span>Verified Production Build</span>
        </div>
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-description">${project.description}</p>
        
        <div>
          <h4 class="modal-subheading">Key Technical Highlights &amp; Features:</h4>
          <ul class="modal-capabilities-list">
            ${featuresHtml}
          </ul>
        </div>

        <div class="card-tech-row" style="margin-bottom: 24px;">
          ${techTagsHtml}
        </div>

        <div class="modal-button-actions">
          <a href="https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${whatsappInquiryText}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-glow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>Inquire About Similar Project</span>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm dynamic-github-link">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  previewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = parseInt(btn.getAttribute("data-project-id") || "1", 10);
      const project = PORTFOLIO_CONFIG.projects.find((p) => p.id === projId);
      if (project) {
        openModal(project);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/* ==============================================================================
   14. VIDEO PLAYBACK MANAGEMENT (MUTUAL PAUSE)
   ============================================================================== */
function initVideoPlayback() {
  const videos = document.querySelectorAll(".showcase-video-player");
  if (!videos.length) return;

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== video && !other.paused) {
          other.pause();
        }
      });
    });
  });
}

/* ==============================================================================
   15. CONTACT FORM: CLIENT-SIDE VALIDATION & DIRECT WHATSAPP DISPATCH
   ============================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  if (!form) return;

  const nameInput = document.getElementById("contactFullName");
  const emailInput = document.getElementById("contactEmail");
  const phoneInput = document.getElementById("contactPhone");
  const messageInput = document.getElementById("contactMessage");

  const errName = document.getElementById("errorFullName");
  const errEmail = document.getElementById("errorEmail");
  const errPhone = document.getElementById("errorPhone");
  const errMessage = document.getElementById("errorMessage");

  const clearError = (input, errorEl) => {
    input.classList.remove("error");
    if (errorEl) errorEl.textContent = "";
  };

  const setError = (input, errorEl, message) => {
    input.classList.add("error");
    if (errorEl) errorEl.textContent = message;
  };

  [nameInput, emailInput, phoneInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      const errorMap = {
        contactFullName: errName,
        contactEmail: errEmail,
        contactPhone: errPhone,
        contactMessage: errMessage
      };
      clearError(input, errorMap[input.id]);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // 1. Name validation
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
      setError(nameInput, errName, "Please provide your full name.");
      isValid = false;
    } else if (nameVal.length < 2) {
      setError(nameInput, errName, "Name must be at least 2 characters long.");
      isValid = false;
    } else {
      clearError(nameInput, errName);
    }

    // 2. Email validation
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      setError(emailInput, errEmail, "Please provide your email address.");
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      setError(emailInput, errEmail, "Please enter a valid email format.");
      isValid = false;
    } else {
      clearError(emailInput, errEmail);
    }

    // 3. Phone validation
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal) {
      setError(phoneInput, errPhone, "Please enter your phone number.");
      isValid = false;
    } else if (phoneVal.length < 7) {
      setError(phoneInput, errPhone, "Please enter a valid contact number.");
      isValid = false;
    } else {
      clearError(phoneInput, errPhone);
    }

    // 4. Message validation
    const messageVal = messageInput.value.trim();
    if (!messageVal) {
      setError(messageInput, errMessage, "Please enter details about your inquiry.");
      isValid = false;
    } else if (messageVal.length < 6) {
      setError(messageInput, errMessage, "Message is too brief.");
      isValid = false;
    } else {
      clearError(messageInput, errMessage);
    }

    if (!isValid) return;

    /* --------------------------------------------------------------------------
       WHATSAPP MESSAGE COMPOSITION & DISPATCH
       No backend or database needed - Direct URL protocol via wa.me
       -------------------------------------------------------------------------- */
    const formattedText = 
`Hello Shahzaib!
I am reaching out via your portfolio website:

👤 Full Name: ${nameVal}
📧 Email: ${emailVal}
📱 Phone: ${phoneVal}
💬 Project Details:
${messageVal}

Looking forward to connecting with you!`;

    const targetNumber = PORTFOLIO_CONFIG.whatsappNumber;
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedText)}`;

    // Show toast feedback
    showToast(`Redirecting to WhatsApp chat with ${PORTFOLIO_CONFIG.name}...`);

    // Reset the form
    form.reset();

    // Open WhatsApp in a new tab smoothly
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 600);
  });
}

/* ==============================================================================
   16. TOAST NOTIFICATION UTILITY
   ============================================================================== */
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

/* ==============================================================================
   17. DYNAMIC YEAR IN FOOTER
   ============================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
