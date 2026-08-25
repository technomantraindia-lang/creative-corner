# Technomantra Team Learning (V4.8.1)

Use these as proven team references, not as instructions to copy blindly. Current user prompt and current-project conventions always win.

## Pattern 1: Responsive carousel / slider · CSST10I15-CSST10I10.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>DaTo CSST Screw Air Compressor | Datronix Autotech</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="DAS723.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="../index.html" aria-label="Datronix Autotech home">
        <img src="../photos/logo.png" alt="Datronix Autotech">
      </a>

      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" id="main-navigation" aria-label="Main navigation">
        <a href="../index.html">Home</a>
        <a href="../page/about.html">About Us</a>
        <div class="nav-dropdown">
          <button type="button" class="nav-drop-toggle active" aria-expanded="false" aria-haspopup="true" aria-controls="products-submenu">Products</button>
          <div class="dropdown-menu" id="products-submenu" role="menu">
            <a role="menuitem" href="../page/categori.html">All products</a>
            <a role="menuitem" href="DAS528.html">DAS528 DaTo Diagnostic Car Scanner</a>
            <a role="menuitem" href="DAS722.html">DAS722 Da To Diagnostic Car Scanner</a>
            <a role="menuitem" href="DASXG3.html">DAS X-G3 IMMO Programming</a>
            <a role="menuitem" href="DAS701.html">DaTo DAS701 Super Scanner</a>
            <a role="menuitem" href="DAS723.html">DaTo DAS723 PRO ULTRA</a>
            <a role="menuitem" href="DASG3.html">DaTo DASG3 Key Programmer</a>
            <a role="menuitem" href="DAS1026.html">Bluetooth OBD2 Scanner DAS1026</a>
            <a role="menuitem" href="ADAS-RADAR.html">ADAS RADAR Trio Cipher Calibration</a>
            <a role="menuitem" href="DAS825.html">DAS825 PRO MAX</a>
            <a role="menuitem" href="DAS623.html">EV SCANNER DaTo DAS623</a>
            <a role="menuitem" href="DIDS-101.html">DIDS-101 Diesel Injector Testing</a>
            <a role="menuitem" href="ACMAS301%E2%80%93AC.html">ACMAS301 AC Service Station</a>
            <a role="menuitem" href="ACMAS302.html">ACMAS302 AC Service Station</a>
            <a role="menuitem" href="DIGD603.html">DaTo DIGD603 GDI &amp; Piezo Injector Cleaner</a>
            <a role="menuitem" href="PTIW1001.html">DaTo PTIW1001 Air Impact Wrench</a>
            <a role="menuitem" href="PTIW1011.html">DaTo PTIW1011 1&Prime; Heavy Duty Impact Wrench</a>
            <a role="menuitem" href="CSST10I15-CSST10I10.html">DaTo CSST Screw Air Compressor</a>
            <a role="menuitem" href="DHP2050.html">DaTo DHP 2050 Shop Press &ndash; 50 Ton</a>
          </div>
        </div>
        <a href="../page/service.html">Services</a>
        <a href="../page/contact.html">Contact Us</a>
      </
```

## Pattern 2: Responsive carousel / slider · service-detail-bulk.css
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root{--sbs-green-dark:#1b4332;--sbs-green:#2d6a4f;--sbs-green-accent:#52b788;--sbs-green-bright:#7cb518;--sbs-green-pale:#e8f5e9;--sbs-green-soft:#f4f8f2;--sbs-beige:#f7f6f2;--sbs-white:#ffffff;--sbs-gray-100:#f3f5f3;--sbs-gray-400:#9ca3af;--sbs-gray-600:#4b5563;--sbs-gray-800:#1a1f2e;--sbs-font-serif:'Playfair Display',Georgia,serif;--sbs-font-sans:'Poppins',sans-serif;--sbs-pad-x:clamp(24px, 5vw, 80px);--sbs-shadow:0 8px 32px rgba(27, 67, 50, 0.1);--sbs-transition:0.35s cubic-bezier(0.4, 0, 0.2, 1)}body.service-bulk-page{font-family:var(--sbs-font-sans);font-size:calc(14px * var(--type-scale, 1.22));color:var(--sbs-gray-800);line-height:1.65;overflow-x:hidden;background:var(--sbs-white);-webkit-font-smoothing:antialiased}body.service-bulk-page .nav-list a.active{color:#7cb518}body.service-bulk-page .nav-list a.active::after{background:#7cb518}.sbs-sprite{position:absolute;width:0;height:0;overflow:hidden}.sbs-container{width:100%;max-width:100%;margin:0 auto;padding:0 var(--sbs-pad-x)}.sbs-svg-icon{display:block;flex-shrink:0;color:currentColor}.sbs-svg-icon--btn{width:18px;height:18px}.sbs-svg-icon--play{width:20px;height:20px}.sbs-svg-icon--check{width:14px;height:14px;color:var(--sbs-white)}.sbs-svg-icon--pill{width:22px;height:22px;color:var(--sbs-green)}.sbs-svg-icon--step{width:24px;height:24px;color:var(--sbs-green)}.sbs-label-leaf{width:22px;height:22px;object-fit:contain;flex-shrink:0}.sbs-label-leaf--center{display:block;margin:0 auto 10px}.sbs-icon-img{width:28px;height:28px;object-fit:contain;display:block}.sbs-section-label{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sbs-green-bright);margin-bottom:10px}.sbs-section-head{text-align:center;margin-bottom:clamp(28px,4vw,40px)}.sbs-section-head h2{font-family:var(--sbs-font-serif);font-size:clamp(26px, 3vw, 34px);font-weight:700;color:var(--sbs-green-dark);margin:0}.sbs-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;font-size:14px;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:inherit;text-decoration:none;transition:transform var(--sbs-transition),box-shadow var(--sbs-transition),background var(--sbs-transition);white-space:nowrap}.sbs-btn-primary{background:linear-gradient(135deg,#1b4332,#2d6a4f);color:var(--sbs-white)}.sbs-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(27,67,50,.25)}.sbs-btn-video{background:var(--sbs-white);color:var(--sbs-green-dark);border:1.5px solid var(--sbs-green-dark)}.sbs-btn-video:hover{border-color:var(--sbs-green-accent);transform:translateY(-2px)}.sbs-btn-white{background:var(--sbs-white);color:var(--sbs-green-dark)}.sbs-btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.12)}.sbs-btn-outline-white{background:0 0;color:var(--sbs-white);border:1.5px solid rgba(255,255,255,.85)}.sbs-btn-outline-white:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}.sbs-hero{position:relative;overflow:hidden;min-height:clamp(420px,42vw,520px);padding:clamp(120px,14vw,150px) 0 clamp(56px,7vw,72px);background:var(--sbs-white)}.sbs-hero-bg{positi
```

## Pattern 3: Responsive carousel / slider · services.css
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root{--sv-green-dark:#1b4332;--sv-green:#2d6a4f;--sv-green-accent:#52b788;--sv-green-bright:#7cb518;--sv-green-pale:#e8f5e9;--sv-white:#ffffff;--sv-gray-50:#f8f9fa;--sv-gray-100:#f0f2f0;--sv-gray-400:#9ca3af;--sv-gray-600:#6b7280;--sv-gray-800:#1f2937;--sv-shadow:0 4px 24px rgba(0, 0, 0, 0.08);--sv-shadow-lg:0 12px 40px rgba(0, 0, 0, 0.12);--sv-transition:0.3s ease;--sv-font-serif:'Playfair Display',Georgia,serif;--sv-font-sans:'Poppins',sans-serif;--sv-pad-x:clamp(24px, 5vw, 80px)}body.services-page{font-family:var(--sv-font-sans);font-size:calc(13px * var(--type-scale, 1.22));color:var(--sv-gray-800);line-height:1.65;overflow-x:hidden;background:var(--sv-white)}.sv-cta,.sv-hero,.sv-premium,.sv-process,.sv-testimonials,.sv-why{width:100%}.sv-sprite{position:absolute;width:0;height:0;overflow:hidden}.sv-svg-icon{display:block;flex-shrink:0;color:currentColor}.sv-svg-icon--btn{width:18px;height:18px}.sv-svg-icon--sm{width:14px;height:14px}.sv-svg-icon--play{width:20px;height:20px}.sv-container{width:100%;max-width:100%;margin:0 auto;padding:0 var(--sv-pad-x)}body.services-page .nav-list a.active{color:#7cb518}body.services-page .nav-list a.active::after{background:#7cb518}.sv-section-label{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sv-green-bright);margin-bottom:14px}.sv-section-label--center{justify-content:center;width:100%}.sv-section-label--hero{color:var(--sv-green-bright)}.sv-section-label--light{color:var(--sv-green-accent)}.sv-label-leaf{width:22px;height:22px;object-fit:contain}.sv-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 24px;font-size:14px;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:inherit;transition:transform var(--sv-transition),box-shadow var(--sv-transition),background var(--sv-transition);white-space:nowrap}.sv-btn-primary{background:linear-gradient(135deg,#1b4332,#2d6a4f);color:var(--sv-white)}.sv-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(27,67,50,.28)}.sv-btn-video{background:rgba(255,255,255,.12);color:var(--sv-white);border:1.5px solid rgba(255,255,255,.55)}.sv-btn-video:hover{background:rgba(255,255,255,.2)}.sv-btn-wa{background:var(--sv-white);color:var(--sv-green-dark);border:2px solid var(--sv-green-accent)}.sv-btn-wa:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.12)}.sv-btn-outline{background:0 0;color:var(--sv-white);border:1.5px solid rgba(255,255,255,.88)}.sv-btn-outline:hover{background:rgba(255,255,255,.1)}.sv-section-head{text-align:center;max-width:640px;margin:0 auto clamp(36px,5vw,52px)}.sv-section-head h2{font-family:var(--sv-font-serif);font-size:clamp(28px, 3.5vw, 38px);font-weight:700;color:var(--sv-green-dark);line-height:1.2;margin-bottom:12px}.sv-section-head--light .sv-section-desc,.sv-section-head--light h2{color:var(--sv-white);text-shadow:0 2px 16px rgba(0,0,0,.5)}.sv-section-desc{font-size:15px;color:var(--sv-gray-600);line-height:1.6;margin:0}.sv-hero{position:relative;min-height:clamp(520px,58vw,680px);display:flex;align-items:center;overflow:visible;padding-bottom:clamp(60px,8vw
```

## Pattern 4: Styling / layout system · responsive.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
@media (max-width: 1200px) {
  .site-footer__grid { grid-template-columns: 1fr 1fr 1fr; }
  .marketplace-preview__hero {
    grid-template-columns: 1fr;
  }
  .marketplace-preview__collage {
    min-height: 300px;
    order: -1;
  }
  .marketplace-preview__grid { grid-template-columns: 1fr 1fr; }
  .tech-board__panel--wide { grid-column: span 12; }
  .tech-board__panel { grid-column: span 6; }
  .pillars-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 1024px) {
  .site-nav, .site-nav__actions .btn-ghost { display: none; }
  .nav-toggle { display: flex; }
  .hero--cinematic .hero__headline,
  .hero--banner .hero__headline { font-size: clamp(2rem, 8vw, 2.75rem); }
  .hero__content-wrap { padding-bottom: clamp(3rem, 8vh, 5rem); }
  .hero--video .hero__video {
    object-position: center 45%;
  }
  .journey-steps { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: 1fr 1fr; }
  .integrity-layout,
  .portfolio-showcase,
  .media-split--tech { grid-template-columns: 1fr; }
  .integrity-layout__image,
  .portfolio-showcase__image { order: -1; min-height: 240px; }
  .integrity-layout__image img,
  .portfolio-showcase__image img { min-height: 240px; }
  .why-grid--compact { grid-template-columns: 1fr 1fr; }
  .tech-board__panel--wide { grid-column: span 12; }
  .tech-board__panel { grid-column: span 6; }
  .markets-split { grid-template-columns: 1fr; }
  .markets-hub { order: -1; margin-inline: auto; }
  .insights-preview__grid { grid-template-columns: 1fr; }
  .media-split { grid-template-columns: 1fr; }
  .media-split__image { order: -1; min-height: 220px; }
  .auth-layout { grid-template-columns: 1fr; }
  .auth-visual { display: none; }
  .legal-layout { grid-template-columns: 1fr; }
  .legal-toc { position: static; }
  .marketplace-stats { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  :root { --header-height: 72px; }
  .site-footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .journey-steps { grid-template-columns: 1fr; }
  .marketplace-preview__grid { grid-template-columns: 1fr; }
  .audience-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .integrity-grid { grid-template-columns: 1fr; }
  .integrity-step--wide { grid-column: auto; }
  .portfolio-board__grid { grid-template-columns: 1fr; }
  .tech-board { grid-template-columns: 1fr; }
  .tech-board__panel,
  .tech-board__panel--wide { grid-column: span 1; }
  .pillars-grid { grid-template-columns: 1fr; }
  .marketplace-filters { grid-template-columns: 1fr; }
  .marketplace-stats { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .trust-strip__list { gap: 2rem; padding-bottom: 0.5rem; }
  .hero { min-height: auto; padding-block: calc(var(--header-height) + 1.5rem) 3rem; }
  .btn { min-height: 44px; }
  .compare-drawer { max-height: 85vh; }
}

@media (max-width: 520px) {
  .site-footer__grid { grid-template-columns: 1fr; }
  .hero__actions { flex-direction: column; }
  .hero__actions .btn { width: 100%; }
  .cta-section__actions { flex-direction: column; }
  .cta-section__actions .btn { width: 100%; }
  .cookie-banner__inner { flex-direction: 
```