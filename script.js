// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.hero-figure, .how-col, .how-statement, .work-head, .residence, .gal, .svc-head, .feature, .proc-card, .quote-big, .visit-grid'
);
revealEls.forEach(el => el.classList.add('rv'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

// Image-band list: highlight the line nearest viewport center (Casa-style)
const bandItems = document.querySelectorAll('.band-list li');
if (bandItems.length) {
  const onBand = () => {
    const mid = window.innerHeight / 2;
    let best = 0, bestDist = Infinity;
    bandItems.forEach((li, i) => {
      const r = li.getBoundingClientRect();
      const d = Math.abs((r.top + r.height / 2) - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    bandItems.forEach((li, i) => li.style.opacity = i === best ? '1' : '.5');
  };
  window.addEventListener('scroll', onBand, { passive: true });
  onBand();
}

// Lightbox
const tiles = Array.from(document.querySelectorAll('.tile'));
const lb = document.getElementById('lb');
const lbimg = document.getElementById('lbimg');
let idx = 0;

function openLb(i) {
  idx = (i + tiles.length) % tiles.length;
  lbimg.src = tiles[idx].dataset.full;
  lbimg.alt = tiles[idx].querySelector('img').alt;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
tiles.forEach((t, i) => t.addEventListener('click', () => openLb(i)));
document.getElementById('lbx').addEventListener('click', closeLb);
document.getElementById('lbn').addEventListener('click', () => openLb(idx + 1));
document.getElementById('lbp').addEventListener('click', () => openLb(idx - 1));
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') openLb(idx + 1);
  if (e.key === 'ArrowLeft') openLb(idx - 1);
});

// Demo form
function kwSubmit(e) {
  e.preventDefault();
  document.getElementById('vnote').hidden = false;
  e.target.querySelector('button[type="submit"]').textContent = 'Thank you';
  return false;
}
