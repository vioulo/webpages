// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 导航栏滚动效果
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.boxShadow = 'none';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }

  lastScroll = currentScroll;
});

// 卡片悬停效果增强
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// 时间轴动画
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-50px)';
  item.style.transition = 'all 0.6s ease';
  observer.observe(item);
});

// 卡片集悬停效果
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// 友链悬停效果
document.querySelectorAll('.friend-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))';
  });

  link.addEventListener('mouseleave', function() {
    this.style.background = 'var(--bg-card)';
  });
});

// 添加页面加载动画
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// 代码块复制功能（如果有代码块）
document.querySelectorAll('pre code').forEach(block => {
  const button = document.createElement('button');
  button.textContent = '复制';
  button.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
  `;

  const pre = block.parentElement;
  pre.style.position = 'relative';
  pre.appendChild(button);

  button.addEventListener('click', () => {
    navigator.clipboard.writeText(block.textContent);
    button.textContent = '已复制!';
    setTimeout(() => {
      button.textContent = '复制';
    }, 2000);
  });
});

// 响应式导航菜单（移动端）
const createMobileMenu = () => {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.cssText = `
      display: block;
      background: none;
      border: none;
      color: var(--text);
      font-size: 1.5rem;
      cursor: pointer;
    `;

    nav.appendChild(menuBtn);

    menuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--bg-card)';
      navLinks.style.padding = '1rem';
    });
  }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

console.log('✨ 星辰博客已加载完成');
