// Navegación móvil
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle del menú móvil
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Cerrar menú al hacer click en un enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })
})

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observar elementos para animaciones
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".section, .project-card, .skill-item, .cyber-card, .stat-item")

  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Efecto de escritura para el hero
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Inicializar efecto de escritura
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    const text = 'console.log("Hola, soy Lucio");'
    setTimeout(() => {
      typeWriter(typingElement, text, 80)
    }, 1000)
  }
})

// Cambio de color del header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  const scrolled = window.pageYOffset

  if (scrolled > 100) {
    header.style.background = "rgba(31, 41, 55, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(31, 41, 55, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Resaltar enlace activo en la navegación
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const sectionHeight = section.clientHeight

    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Animación de contadores en las estadísticas
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }

  updateCounter()
}

// Inicializar contadores cuando sean visibles
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector(".stat-number")
        const target = counter.textContent

        if (!isNaN(target)) {
          animateCounter(counter, Number.parseInt(target))
        }

        counterObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener("DOMContentLoaded", () => {
  const statItems = document.querySelectorAll(".stat-item")
  statItems.forEach((item) => {
    counterObserver.observe(item)
  })
})

// Efecto parallax sutil en el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")

  if (hero) {
    const speed = scrolled * 0.5
    hero.style.transform = `translateY(${speed}px)`
  }
})

// Función para copiar texto al portapapeles (para futuro uso)
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado al portapapeles")
    })
    .catch((err) => {
      console.error("Error al copiar texto: ", err)
    })
}

// Easter egg: Konami Code
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    console.log("🎉 ¡Código Konami activado! ¡Eres un verdadero programador!")
    document.body.style.filter = "hue-rotate(180deg)"
    setTimeout(() => {
      document.body.style.filter = "none"
    }, 3000)
    konamiCode = []
  }
})

// Función para mostrar mensaje de desarrollo
function showDevMessage() {
  console.log(`
    🚀 Portfolio de Lucio Ucha
    📚 Estudiante en EPET Nº12
    💻 Especialidad: Programación
    🔒 Futuro especialista en Ciberseguridad
    
    ¡Gracias por visitar mi portfolio!
    `)
}

// Mostrar mensaje al cargar la página
document.addEventListener("DOMContentLoaded", showDevMessage)

// Función para detectar modo oscuro del sistema
function detectDarkMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("Modo oscuro detectado - ¡Perfecto para programar! 🌙")
  }
}

detectDarkMode()

// Prevenir click derecho en imágenes (opcional)
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault()
  }
})

// Función para lazy loading de imágenes (para futuro uso)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Inicializar lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)
