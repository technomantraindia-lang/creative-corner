/* Creative Corner Hub – Inquiry Popup
   Self-contained: injects styles + modal, binds all .inquiry-btn clicks. */
(function () {
  'use strict';

  var CSS = `
  .iq-overlay{position:fixed;inset:0;background:rgba(15,12,30,.6);backdrop-filter:blur(6px);
    display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;visibility:hidden;
    transition:opacity .3s ease,visibility .3s ease;padding:20px;}
  .iq-overlay.open{opacity:1;visibility:visible;}
  .iq-modal{background:#fff;border-radius:20px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;
    padding:32px;position:relative;transform:translateY(24px) scale(.97);transition:transform .3s ease;
    box-shadow:0 24px 60px rgba(80,60,180,.25);font-family:'Inter',sans-serif;}
  .iq-overlay.open .iq-modal{transform:translateY(0) scale(1);}
  .iq-close{position:absolute;top:16px;right:16px;width:36px;height:36px;border:none;border-radius:50%;
    background:#f3f3f1;color:#333;font-size:18px;cursor:pointer;display:flex;align-items:center;
    justify-content:center;transition:background .2s;}
  .iq-close:hover{background:#ececec;}
  .iq-badge{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#8b5cf6,#3b82f6);
    -webkit-background-clip:text;background-clip:text;color:transparent;font-weight:700;font-size:13px;
    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
  .iq-title{font-size:24px;font-weight:800;color:#1a1a1a;margin:0 0 6px;}
  .iq-sub{font-size:14px;color:#666;margin:0 0 22px;line-height:1.5;}
  .iq-group{margin-bottom:16px;}
  .iq-group label{display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:6px;}
  .iq-group input,.iq-group select,.iq-group textarea{width:100%;padding:11px 14px;border:1.5px solid #e5e5e5;
    border-radius:10px;font-size:14px;font-family:inherit;color:#1a1a1a;background:#fbfbfa;
    transition:border-color .2s,box-shadow .2s;box-sizing:border-box;}
  .iq-group textarea{resize:vertical;min-height:88px;}
  .iq-group input:focus,.iq-group select:focus,.iq-group textarea:focus{outline:none;border-color:#8b5cf6;
    box-shadow:0 0 0 3px rgba(139,92,246,.15);background:#fff;}
  .iq-submit{width:100%;padding:13px;border:none;border-radius:12px;cursor:pointer;
    background:linear-gradient(135deg,#8b5cf6,#3b82f6);color:#fff;font-size:15px;font-weight:700;
    font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px;
    transition:transform .2s,box-shadow .2s;margin-top:4px;}
  .iq-submit:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(139,92,246,.35);}
  .iq-success{text-align:center;padding:28px 8px;display:none;}
  .iq-success.show{display:block;}
  .iq-success-icon{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#3b82f6);
    display:flex;align-items:center;justify-content:center;margin:0 auto 18px;color:#fff;font-size:28px;}
  @media(max-width:520px){.iq-modal{padding:24px 20px;}.iq-title{font-size:21px;}}
  body.iq-lock{overflow:hidden;}
  `;

  function buildModal() {
    var overlay = document.createElement('div');
    overlay.className = 'iq-overlay';
    overlay.id = 'iqOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'iqTitle');
    overlay.innerHTML =
      '<div class="iq-modal">' +
        '<button class="iq-close" id="iqClose" aria-label="Close inquiry form">&#10005;</button>' +
        '<div id="iqFormWrap">' +
          '<div class="iq-badge">&#10022; Start Your Project</div>' +
          '<h2 class="iq-title" id="iqTitle">Send an Inquiry</h2>' +
          '<p class="iq-sub">Tell us about your project and we\'ll get back to you within 24 hours.</p>' +
          '<form id="iqForm">' +
            '<div class="iq-group"><label for="iqName">Full Name</label>' +
              '<input type="text" id="iqName" placeholder="Your name" required></div>' +
            '<div class="iq-group"><label for="iqEmail">Email Address</label>' +
              '<input type="email" id="iqEmail" placeholder="you@example.com" required></div>' +
            '<div class="iq-group"><label for="iqService">Service Needed</label>' +
              '<select id="iqService">' +
                '<option>Website Design</option><option>Packaging Design</option>' +
                '<option>Brochure Design</option><option>Flyer Designing</option>' +
                '<option>Banner Designing</option><option>ID Card Design</option>' +
                '<option>Menu Card Design</option><option>Name Plate Design</option>' +
                '<option>T Shirt Designing</option><option>Explainer Video</option>' +
                '<option>Other</option></select></div>' +
            '<div class="iq-group"><label for="iqMessage">Project Details</label>' +
              '<textarea id="iqMessage" placeholder="Describe your project..." required></textarea></div>' +
            '<button type="submit" class="iq-submit">Send Inquiry' +
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
            '</button>' +
          '</form>' +
        '</div>' +
        '<div class="iq-success" id="iqSuccess">' +
          '<div class="iq-success-icon">&#10003;</div>' +
          '<h2 class="iq-title">Inquiry Sent!</h2>' +
          '<p class="iq-sub">Thank you! Our team will reach out to you shortly.</p>' +
          '<button type="button" class="iq-submit" id="iqDone">Done</button>' +
        '</div>' +
      '</div>';
    return overlay;
  }

  function init() {
    // Inject styles once
    if (!document.getElementById('iqStyles')) {
      var s = document.createElement('style');
      s.id = 'iqStyles';
      s.textContent = CSS;
      document.head.appendChild(s);
    }

    initMobileNav();

    var overlay = buildModal();
    document.body.appendChild(overlay);

    var closeBtn = overlay.querySelector('#iqClose');
    var doneBtn = overlay.querySelector('#iqDone');
    var form = overlay.querySelector('#iqForm');
    var formWrap = overlay.querySelector('#iqFormWrap');
    var success = overlay.querySelector('#iqSuccess');

    function open(e) {
      if (e) e.preventDefault();
      formWrap.style.display = '';
      success.classList.remove('show');
      overlay.classList.add('open');
      document.body.classList.add('iq-lock');
      var first = overlay.querySelector('#iqName');
      if (first) setTimeout(function () { first.focus(); }, 300);
    }
    function close() {
      overlay.classList.remove('open');
      document.body.classList.remove('iq-lock');
    }

    // Bind every current and future inquiry button
    document.querySelectorAll('.inquiry-btn').forEach(function (btn) {
      btn.addEventListener('click', open);
    });

    closeBtn.addEventListener('click', close);
    doneBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formWrap.style.display = 'none';
      success.classList.add('show');
      form.reset();
    });

    // Inject floating WhatsApp & Call buttons CSS
    if (!document.getElementById('ccFloatingStyles')) {
      var s = document.createElement('style');
      s.id = 'ccFloatingStyles';
      s.textContent = 
        '.cc-floating-wrap { position: fixed; bottom: 24px; right: 24px; display: flex; flex-direction: column; gap: 12px; z-index: 9998; }' +
        '.cc-floating-btn { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.25); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, background-color 0.2s; color: #fff; text-decoration: none; position: relative; }' +
        '.cc-floating-btn:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }' +
        '.cc-floating-btn svg { width: 28px; height: 28px; fill: #fff; }' +
        '.cc-btn-whatsapp { background-color: #25D366; }' +
        '.cc-btn-whatsapp:hover { background-color: #20ba5a; }' +
        '.cc-btn-call { background-color: #0f83ff; }' +
        '.cc-btn-call:hover { background-color: #0071e3; }' +
        '.cc-floating-btn::before { content: attr(data-tooltip); position: absolute; right: 70px; top: 50%; transform: translateY(-50%) translateX(10px); background: rgba(15, 12, 30, 0.9); color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-family: "Inter", sans-serif; font-weight: 500; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }' +
        '.cc-floating-btn:hover::before { opacity: 1; transform: translateY(-50%) translateX(0); }' +
        '@media (max-width: 768px) { .cc-floating-wrap { bottom: 14px; right: 10px; gap: 8px; } .cc-floating-btn { width: 44px; height: 44px; } .cc-floating-btn svg { width: 22px; height: 22px; } .cc-floating-btn::before { display: none; } body.astro-body .cc-floating-wrap { right: 8px; gap: 7px; } body.astro-body .cc-floating-btn { width: 40px; height: 40px; } body.astro-body .cc-floating-btn svg { width: 20px; height: 20px; } }' +
        '@media (max-width: 420px) { .cc-floating-wrap { right: 8px; } .cc-floating-btn { width: 40px; height: 40px; } .cc-floating-btn svg { width: 20px; height: 20px; } body.astro-body .cc-floating-wrap { right: 6px; } body.astro-body .cc-floating-btn { width: 38px; height: 38px; } body.astro-body .cc-floating-btn svg { width: 19px; height: 19px; } }';
      document.head.appendChild(s);
    }

    // Inject floating WhatsApp & Call buttons HTML
    if (!document.getElementById('ccFloatingWrap')) {
      var wrap = document.createElement('div');
      wrap.className = 'cc-floating-wrap';
      wrap.id = 'ccFloatingWrap';
      wrap.innerHTML = 
        '<a href="https://wa.me/919157413030" class="cc-floating-btn cc-btn-whatsapp" target="_blank" rel="noopener noreferrer" data-tooltip="WhatsApp Us">' +
          '<svg viewBox="0 0 16 16" fill="currentColor" class="bi bi-whatsapp">' +
            '<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>' +
          '</svg>' +
        '</a>' +
        '<a href="tel:+919157413030" class="cc-floating-btn cc-btn-call" data-tooltip="Call Us">' +
          '<svg viewBox="0 0 24 24">' +
            '<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.56 11.56 0 0 1 8.82 4c0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 12.19 9.81 19 18 19c.55 0 1-.45 1-1v-2.62c0-.55-.45-1-1-.1z"/>' +
          '</svg>' +
        '</a>';
      document.body.appendChild(wrap);
    }
  }

  function initMobileNav() {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelector('.nav-links');
    if (!navbar || !navLinks || navbar.querySelector('.nav-toggle')) return;

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';

    var actions = navbar.querySelector('.nav-actions');
    navbar.insertBefore(toggle, actions || null);

    function closeMenu() {
      navbar.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-lock');
    }

    toggle.addEventListener('click', function () {
      var isOpen = navbar.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-lock', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var isMobile = window.matchMedia('(max-width: 820px)').matches;
        if (isMobile && link.classList.contains('nav-dropdown-toggle')) {
          var dropdown = link.closest('.nav-dropdown');
          if (dropdown) {
            event.preventDefault();
            dropdown.classList.toggle('dropdown-open');
            link.setAttribute('aria-expanded', dropdown.classList.contains('dropdown-open') ? 'true' : 'false');
          }
          return;
        }
        closeMenu();
      });
    });

    document.addEventListener('click', function (event) {
      if (!navbar.classList.contains('nav-open')) return;
      if (!navbar.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
