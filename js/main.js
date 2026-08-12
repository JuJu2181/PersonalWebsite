// Theme, nav, and interactive-section behavior for the portfolio site.
// Data arrays (TIMELINE, RESEARCH, PROJECTS, BLOG_POSTS, CURRENT_BOOKS, PAST_BOOKS, NAV_ITEMS, BADGES)
// come from js/data.js, loaded before this file.

const THEME_KEY = 'anish-portfolio-theme';

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function initTheme() {
  applyTheme(getStoredTheme());
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function renderNav() {
  const nav = document.getElementById('nav-links');
  nav.innerHTML = NAV_ITEMS.map(([id, label]) =>
    `<a href="#${id}" data-section="${id}">${label}</a>`
  ).join('');
}

function initActiveSectionObserver() {
  const ids = NAV_ITEMS.map(([id]) => id);
  const links = document.querySelectorAll('#nav-links a');
  const setActive = (id) => {
    links.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  };
  const els = ids.map(id => document.getElementById(id)).filter(Boolean);
  if (!els.length || typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  els.forEach(el => observer.observe(el));
}

function initIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  setTimeout(() => overlay.classList.add('intro-done'), 1900);
}

function initCursor() {
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  if (!ring || !dot || window.matchMedia('(pointer: coarse)').matches) return;

  window.addEventListener('mousemove', (e) => {
    ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  window.addEventListener('mouseover', (e) => {
    const interactive = e.target.closest && e.target.closest('a, button, input, textarea');
    if (interactive) {
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.margin = '-26px 0 0 -26px';
      ring.style.background = 'var(--accent-soft)';
    } else {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.margin = '-17px 0 0 -17px';
      ring.style.background = 'transparent';
    }
  });
}

function renderSkills() {
  const el = document.getElementById('skills-list');
  if (!el) return;
  el.innerHTML = SKILLS.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
}

function renderBadges() {
  const el = document.getElementById('hero-badges');
  el.innerHTML = BADGES.map(b => `
    <div class="badge">
      <span class="badge-icon">${b.icon}</span>
      <div>
        <div class="badge-label">${b.label}</div>
        <div class="badge-sub">${b.sub}</div>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = TIMELINE.map((t, i) => `
    <div class="timeline-item${t.isEducation ? ' is-education' : ''}" data-idx="${i}">
      <span class="timeline-dot"></span>
      <div class="timeline-head">
        <h3>${t.role} &middot; ${t.org}</h3>
        <span class="timeline-dates">${t.dates}</span>
      </div>
      <p class="timeline-location">${t.location}</p>
      <p class="timeline-summary">${t.summary}</p>
      <ul class="timeline-bullets">
        ${t.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <button class="timeline-toggle" type="button">Expand</button>
    </div>
  `).join('');

  el.addEventListener('click', (e) => {
    if (!e.target.classList.contains('timeline-toggle')) return;
    const item = e.target.closest('.timeline-item');
    const expanded = item.classList.toggle('expanded');
    e.target.textContent = expanded ? 'Show less' : 'Expand';
  });
}

function renderResearch() {
  const el = document.getElementById('research-grid');
  el.innerHTML = RESEARCH.map(r => `
    <div class="research-card">
      <div class="card-top">
        <span class="pill-research">Research</span>
        <div class="card-top-right">
          <span class="status-label status-${r.statusKind}">${r.status}</span>
          ${r.githubHref !== '#' ? `<a href="${r.githubHref}" target="_blank" rel="noopener" aria-label="View on GitHub" class="gh-link">${GH_ICON(16)}</a>` : ''}
        </div>
      </div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="tool-tags">${r.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}</div>
    </div>
  `).join('');
}

function GH_ICON(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"></path></svg>`;
}

let projectFilter = 'all';

function renderProjects() {
  const chipsEl = document.getElementById('filter-chips');
  const chips = [['all', 'All'], ['work', 'Work'], ['personal', 'Personal']];
  chipsEl.innerHTML = chips.map(([key, label]) =>
    `<button class="chip${projectFilter === key ? ' active' : ''}" data-filter="${key}" type="button">${label}</button>`
  ).join('');

  const filtered = PROJECTS.filter(p => projectFilter === 'all' || p.category === projectFilter);
  const gridEl = document.getElementById('projects-grid');
  gridEl.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="card-top">
        <span class="pill-category ${p.category}">${p.categoryLabel}</span>
        ${p.githubHref !== '#' ? `<a href="${p.githubHref}" target="_blank" rel="noopener" aria-label="View on GitHub" class="gh-link">${GH_ICON(18)}</a>` : ''}
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tool-tags">${p.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}</div>
    </div>
  `).join('');

  chipsEl.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      projectFilter = chip.dataset.filter;
      renderProjects();
    });
  });
}

let activeTab = 'research';

function renderTabs() {
  document.getElementById('tab-research').classList.toggle('active', activeTab === 'research');
  document.getElementById('tab-projects').classList.toggle('active', activeTab === 'projects');
  document.getElementById('research-panel').style.display = activeTab === 'research' ? '' : 'none';
  document.getElementById('projects-panel').style.display = activeTab === 'projects' ? '' : 'none';
}

function initTabs() {
  document.getElementById('tab-research').addEventListener('click', () => { activeTab = 'research'; renderTabs(); });
  document.getElementById('tab-projects').addEventListener('click', () => { activeTab = 'projects'; renderTabs(); });
  renderTabs();
}

function renderBlog() {
  const el = document.getElementById('blog-grid');
  el.innerHTML = BLOG_POSTS.map(post => `
    <a href="${post.href}" target="_blank" rel="noopener" class="blog-card">
      <span class="blog-card-meta">${post.date}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <span class="blog-card-more">Read more &rarr;</span>
    </a>
  `).join('');
}

function renderPhotos() {
  const el = document.getElementById('photo-grid');
  if (!el || typeof PINTEREST_PHOTOS === 'undefined') return;
  el.innerHTML = PINTEREST_PHOTOS.map(p => `
    <a href="${p.href}" target="_blank" rel="noopener">
      <img src="${p.src}" alt="Photo from Pinterest" loading="lazy">
    </a>
  `).join('');
}

const DEFAULT_BOOK_COVER = 'assets/images/book-cover-default.svg';

function bookRow(book) {
  return `
    <div class="book-row">
      <img class="book-cover" id="${book.slotId}" src="${DEFAULT_BOOK_COVER}" alt="${book.title} cover">
      <div>
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
      </div>
    </div>
  `;
}

async function fetchBookCover(book) {
  try {
    const query = new URLSearchParams({ title: book.title, author: book.author, limit: '1' });
    const res = await fetch(`https://openlibrary.org/search.json?${query}`);
    if (!res.ok) return;
    const data = await res.json();
    const coverId = data.docs && data.docs[0] && data.docs[0].cover_i;
    if (!coverId) return;
    const slot = document.getElementById(book.slotId);
    if (!slot) return;
    slot.src = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  } catch (e) {
    // Leave the default cover in place — cover lookup failing shouldn't break the page.
  }
}

function renderBooks() {
  document.getElementById('current-books').innerHTML = CURRENT_BOOKS.map(bookRow).join('');
  document.getElementById('past-books').innerHTML = PAST_BOOKS.map(bookRow).join('');
  [...CURRENT_BOOKS, ...PAST_BOOKS].forEach(fetchBookCover);
}

function initContactForm() {
  if (typeof EMAILJS_CONFIG === 'undefined') {
    console.error('js/config.js missing — run `node scripts/generate-config.js` first.');
    return;
  }
  emailjs.init(EMAILJS_CONFIG.publicKey);

  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending...';
    status.textContent = '';

    emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form)
      .then(() => {
        status.textContent = 'Message sent — thanks for reaching out!';
        form.reset();
      })
      .catch(() => {
        status.textContent = 'Something went wrong. Please email me directly instead.';
      })
      .finally(() => {
        button.disabled = false;
        button.textContent = 'Send message';
      });
  });
}

function renderFooterYear() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initCursor();
  initTheme();
  renderNav();
  renderBadges();
  renderSkills();
  renderTimeline();
  renderResearch();
  renderProjects();
  initTabs();
  renderBlog();
  renderPhotos();
  renderBooks();
  initContactForm();
  renderFooterYear();
  initActiveSectionObserver();
});
