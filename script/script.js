document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  const machineCards = document.querySelectorAll('.machine-card:not(.disabled)');
  const closeButtons = document.querySelectorAll('.close-modal');

  machineCards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".section-title, .project-card, .skill-item, .cyber-card, .stat-item, .machine-card");
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;
    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  updateCounter();
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector(".stat-number");
        const target = counter.textContent;
        if (!isNaN(target)) {
          animateCounter(counter, Number.parseInt(target));
        }
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.addEventListener("DOMContentLoaded", () => {
  const statItems = document.querySelectorAll(".stat-item");
  statItems.forEach((item) => {
    counterObserver.observe(item);
  });
});

let konamiCode = [];
const konamiSequence = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  if (konamiCode.join(",") === konamiSequence.join(",")) {
    console.log("🎉 Root Access Granted! Scanning vulnerabilities...");
    document.body.style.filter = "hue-rotate(90deg)";
    setTimeout(() => {
      document.body.style.filter = "none";
    }, 3000);
    konamiCode = [];
  }
});

function showDevMessage() {
  console.log(`
    🚀 Lucio Ucha's Portfolio
    📚 Student at EPET Nº12
    💻 Specialization: Programming
    🔒 Future Cybersecurity Specialist
    
    Thanks for visiting my portfolio! Check out my source code.
    `);
}

document.addEventListener("DOMContentLoaded", showDevMessage);

function detectDarkMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("Dark mode detected - Perfect for coding! 🌙");
  }
}

detectDarkMode();