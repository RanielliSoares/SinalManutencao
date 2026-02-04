// ============================================
// CONFIGURAÇÃO GSAP
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// MOBILE MENU
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// ANIMATED BACKGROUND SHAPES
// ============================================
gsap.to('.shape-1', {
  x: 50,
  y: 30,
  rotation: 45,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.shape-2', {
  x: -30,
  y: 50,
  rotation: -30,
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.shape-3', {
  x: 40,
  y: -40,
  rotation: 60,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.shape-4', {
  x: -50,
  y: -30,
  rotation: -45,
  duration: 22,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('.shape-5', {
  x: 35,
  y: 45,
  rotation: 90,
  duration: 19,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// ============================================
// HERO ANIMATIONS
// ============================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
  .from('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.8
  })
  .from('.hero-line', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  }, '-=0.4')
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.4')
  .from('.stat-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
  }, '-=0.4')
  .from('.hero-cta .btn-primary, .hero-cta .btn-secondary', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  }, '-=0.3')
  .from('.hero-scroll', {
    opacity: 0,
    duration: 0.8
  }, '-=0.3');

// ============================================
// SECTION ANIMATIONS
// ============================================

// Sobre Section
gsap.from('.sobre-section .section-label', {
  scrollTrigger: {
    trigger: '.sobre-section',
    start: 'top 80%',
    once: true
  },
  x: -50,
  opacity: 0,
  duration: 0.8,
  clearProps: 'all'
});

gsap.from('.sobre-section .section-title', {
  scrollTrigger: {
    trigger: '.sobre-section',
    start: 'top 80%',
    once: true
  },
  x: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  clearProps: 'all'
});

gsap.from('.sobre-text p, .sobre-text .lead-text', {
  scrollTrigger: {
    trigger: '.sobre-text',
    start: 'top 75%',
    once: true
  },
  x: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  clearProps: 'all'
});

// Animação individual dos feature items
gsap.utils.toArray('.feature-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      once: true
    },
    x: -50,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.15,
    clearProps: 'all'
  });
});

// Animação individual dos visual cards
gsap.utils.toArray('.visual-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      once: true
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.2,
    clearProps: 'all'
  });
});

// ============================================
// NÚMEROS SECTION - COUNTER ANIMATION
// ============================================
const numeroCards = document.querySelectorAll('.numero-card');

numeroCards.forEach(card => {
  const valueElement = card.querySelector('.numero-value');
  const target = parseInt(valueElement.getAttribute('data-target'));
  
  ScrollTrigger.create({
    trigger: card,
    start: 'top 80%',
    onEnter: () => {
      gsap.to(valueElement, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power1.out',
        onUpdate: function() {
          valueElement.innerText = Math.ceil(valueElement.innerText);
        }
      });
    },
    once: true
  });
});

// Animação dos cards de números
gsap.utils.toArray('.numero-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.15,
    clearProps: 'all'
  });
});

// ============================================
// SERVIÇOS SECTION
// ============================================
gsap.from('.servicos-section .section-label', {
  scrollTrigger: {
    trigger: '.servicos-section',
    start: 'top 80%',
    once: true
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  clearProps: 'all'
});

gsap.from('.servicos-section .section-title', {
  scrollTrigger: {
    trigger: '.servicos-section',
    start: 'top 80%',
    once: true
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  clearProps: 'all'
});

// Animação individual dos cards de serviço
gsap.utils.toArray('.servico-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    clearProps: 'all'
  });
});

// Debug - verificar se elementos existem
console.log('Serviços cards encontrados:', document.querySelectorAll('.servico-card').length);
console.log('Serviços section:', document.querySelector('.servicos-section'));

// ============================================
// PORTFOLIO SECTION
// ============================================
gsap.from('.portfolio-section .section-header', {
  scrollTrigger: {
    trigger: '.portfolio-section',
    start: 'top 80%',
    once: true
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  clearProps: 'all'
});

// Animação individual de cada categoria de portfolio
gsap.utils.toArray('.portfolio-category').forEach((category, index) => {
  gsap.from(category, {
    scrollTrigger: {
      trigger: category,
      start: 'top 85%',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.2,
    clearProps: 'all'
  });
});

// ============================================
// CONTATO SECTION
// ============================================
gsap.from('.contato-info', {
  scrollTrigger: {
    trigger: '.contato-section',
    start: 'top 75%',
    toggleActions: 'play none none none'
  },
  x: -50,
  opacity: 0,
  duration: 0.8
});

gsap.from('.detail-item', {
  scrollTrigger: {
    trigger: '.contato-details',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  x: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15
});

gsap.from('.contato-form-wrapper', {
  scrollTrigger: {
    trigger: '.contato-section',
    start: 'top 75%',
    toggleActions: 'play none none none'
  },
  x: 50,
  opacity: 0,
  duration: 0.8
});

gsap.from('.form-group', {
  scrollTrigger: {
    trigger: '.contato-form',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1
});

// ============================================
// FOOTER ANIMATION
// ============================================
gsap.from('.footer-brand', {
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%',
    toggleActions: 'play none none none'
  },
  y: 30,
  opacity: 0,
  duration: 0.8
});

gsap.from('.footer-column', {
  scrollTrigger: {
    trigger: '.footer-links',
    start: 'top 90%',
    toggleActions: 'play none none none'
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// FORM SUBMISSION
// ============================================
const contatoForm = document.getElementById('contato-form');

if (contatoForm) {
  contatoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animação de sucesso
    const submitBtn = contatoForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>✓ Mensagem Enviada!</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // Reset form
    setTimeout(() => {
      contatoForm.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
    }, 3000);
  });
}

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 100,
  opacity: 0.5
});

// ============================================
// MOUSE MOVE EFFECT ON CARDS
// ============================================
const cards = document.querySelectorAll('.servico-card, .visual-card, .numero-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    gsap.to(card, {
      duration: 0.3,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: 'power1.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.5,
      rotationX: 0,
      rotationY: 0,
      ease: 'power2.out'
    });
  });
});

// ============================================
// CURSOR CUSTOM EFFECT (OPTIONAL)
// ============================================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.innerHTML = `
  .custom-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--verde-accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.2s ease;
    display: none;
  }
  
  @media (min-width: 1024px) {
    .custom-cursor {
      display: block;
    }
  }
  
  .custom-cursor.active {
    transform: scale(1.5);
    background: var(--verde-accent);
  }
`;
document.head.appendChild(cursorStyle);

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.2
  });
});

document.querySelectorAll('a, button, .servico-card, .numero-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// ============================================
// PORTFOLIO CAROUSELS
// ============================================
class Carousel {
  constructor(carouselId) {
    this.carouselId = carouselId;
    this.carousel = document.querySelector(`[data-carousel-id="${carouselId}"]`);
    if (!this.carousel) return;
    
    this.track = this.carousel.querySelector('.carousel-track');
    this.items = this.carousel.querySelectorAll('.carousel-item');
    this.prevBtn = document.querySelector(`[data-carousel="${carouselId}"].prev`);
    this.nextBtn = document.querySelector(`[data-carousel="${carouselId}"].next`);
    this.indicatorsContainer = document.querySelector(`[data-carousel-indicators="${carouselId}"]`);
    
    this.currentIndex = 0;
    this.totalItems = this.items.length;
    
    this.init();
  }
  
  init() {
    // Criar indicadores
    this.createIndicators();
    
    // Event listeners para botões
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    // Auto-play (opcional)
    this.startAutoPlay();
    
    // Parar auto-play ao hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    
    // Touch/swipe support
    this.addTouchSupport();
  }
  
  createIndicators() {
    this.items.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = 'carousel-indicator';
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => this.goTo(index));
      this.indicatorsContainer.appendChild(indicator);
    });
    this.indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
  }
  
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }
  
  goTo(index) {
    this.currentIndex = index;
    const offset = -100 * this.currentIndex;
    this.track.style.transform = `translateX(${offset}%)`;
    this.updateIndicators();
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.goTo(this.currentIndex);
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    this.goTo(this.currentIndex);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
  
  addTouchSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    this.carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.stopAutoPlay();
    });
    
    this.carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });
    
    this.carousel.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
      
      this.startAutoPlay();
    });
    
    // Mouse drag support (desktop)
    this.carousel.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = true;
      this.carousel.style.cursor = 'grabbing';
      this.stopAutoPlay();
    });
    
    this.carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
    });
    
    this.carousel.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      this.carousel.style.cursor = 'grab';
      
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
      
      this.startAutoPlay();
    });
    
    this.carousel.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        this.carousel.style.cursor = 'grab';
        this.startAutoPlay();
      }
    });
  }
}

// Inicializar todos os carrosséis
document.addEventListener('DOMContentLoaded', () => {
  new Carousel('estrutura');
  new Carousel('civil');
  new Carousel('eletrica');
  
  // Inicializar modal de imagens
  initImageModal();
});

// ============================================
// IMAGE MODAL / LIGHTBOX
// ============================================
function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.modal-close');
  
  // Adicionar evento de click em todas as imagens do carrossel
  const carouselItems = document.querySelectorAll('.carousel-item');
  
  carouselItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Abrir modal em todas as resoluções
      const img = this.querySelector('img');
      const caption = this.querySelector('.carousel-caption');
      
      modal.classList.add('active');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalCaption.textContent = caption.textContent;
      
      // Prevenir scroll do body quando modal está aberto
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Fechar modal ao clicar no X
  closeBtn.addEventListener('click', closeModal);
  
  // Fechar modal ao clicar fora da imagem
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Fechar modal com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Limpar imagem após animação
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modalImg.src = '';
        modalCaption.textContent = '';
      }
    }, 300);
  }
}

console.log('🚀 Sinal Engenharia - Website carregado com sucesso!');
