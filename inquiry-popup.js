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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();