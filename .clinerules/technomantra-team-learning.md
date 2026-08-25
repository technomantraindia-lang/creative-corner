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

## Pattern 2: Responsive carousel / slider · service-detail-plant-care.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Plant Care Service | Service Details | Baroda Roses Farm & Nursery</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="stylesheet" href="css/service-detail-plant-care.css"><link rel="stylesheet" href="css/mobile.css"></head><body class="service-plant-care-page" data-page="services"><div class="spc-cursor-glow" id="spcCursorGlow" aria-hidden="true"></div><svg xmlns="http://www.w3.org/2000/svg" class="spc-sprite" aria-hidden="true"><symbol id="spc-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></symbol><symbol id="spc-whatsapp" viewBox="0 0 24 24"><path d="M12 3a8 8 0 00-6.9 12L3 21l6.2-2A8 8 0 1012 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 10.5c.4 1.2 1.6 2.8 3.3 3.5 1 .4 1.8.2 2.4-.4l.6-.6a1 1 0 011.3-.1l1.5 1.1a1 1 0 01.2 1.4l-.8 1.1c-.6.8-1.6 1.2-2.7 1-2.2-.4-4.8-2.5-6.2-5.1-.8-1.5-.9-2.8-.3-3.7l.7-1a1 1 0 011.3-.3l1.5.8a1 1 0 01.4 1.2l-.4.9c-.2.5-.1.9.3 1.2z" fill="currentColor" stroke="none"/></symbol><symbol id="spc-chevron-l" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-chevron-r" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-prune" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/></symbol><symbol id="spc-fertilize" viewBox="0 0 24 24"><path d="M12 3c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol><symbol id="spc-pest" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7 7l-1.5-1.5M18.5 18.5L17 17M7 17l-1.5 1.5M18.5 5.5L17 7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol><symbol id="spc-soil" viewBox="0 0 24 24"><path d="M4 18h16M6 18c0-4 2.5-7 6-7s6 3 6 7" fill="none" stroke="currentColor" stroke-width="1
```

## Pattern 3: Responsive carousel / slider · service-detail-terrace.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Terrace Gardening | Service Details | Baroda Roses Farm & Nursery</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="stylesheet" href="css/service-detail-terrace.css"><link rel="stylesheet" href="css/mobile.css"></head><body class="service-terrace-page" data-page="services"><div class="stg-cursor-glow" id="stgCursorGlow" aria-hidden="true"></div><svg xmlns="http://www.w3.org/2000/svg" class="stg-sprite" aria-hidden="true"><symbol id="stg-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="stg-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></symbol><symbol id="stg-whatsapp" viewBox="0 0 24 24"><path d="M12 3a8 8 0 00-6.9 12L3 21l6.2-2A8 8 0 1012 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 10.5c.4 1.2 1.6 2.8 3.3 3.5 1 .4 1.8.2 2.4-.4l.6-.6a1 1 0 011.3-.1l1.5 1.1a1 1 0 01.2 1.4l-.8 1.1c-.6.8-1.6 1.2-2.7 1-2.2-.4-4.8-2.5-6.2-5.1-.8-1.5-.9-2.8-.3-3.7l.7-1a1 1 0 011.3-.3l1.5.8a1 1 0 01.4 1.2l-.4.9c-.2.5-.1.9.3 1.2z" fill="currentColor" stroke="none"/></symbol><symbol id="stg-chevron-l" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="stg-chevron-r" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="stg-setup" viewBox="0 0 24 24"><path d="M3 21h18M6 21V9l6-4 6 4v12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol><symbol id="stg-plants" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol><symbol id="stg-soil" viewBox="0 0 24 24"><path d="M4 18h16M6 18c0-4 2.5-7 6-7s6 3 6 7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11c1-2 2.5-3 4-3s3 1 4 3" fill="none" stroke="currentColor" stroke-width="1.4"/></symbol><symbol id="stg-irrigation" viewBox="0 0 24 24"><path d="M12 3c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol><symbol id="stg-planters" viewBox="0 0 24 24"><path d="M8 14c0-3 2-5 4-5s4 2 4 5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 14h12v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" fill=
```

## Pattern 4: Responsive carousel / slider · service-detail-landscape.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Landscape Design | Service Details | Baroda Roses Farm & Nursery</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="stylesheet" href="css/service-detail-landscape.css"><link rel="stylesheet" href="css/mobile.css"></head><body class="service-landscape-page" data-page="services"><div class="sl-cursor-glow" id="slCursorGlow" aria-hidden="true"></div><svg xmlns="http://www.w3.org/2000/svg" class="sl-sprite" aria-hidden="true"><symbol id="sl-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="sl-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></symbol><symbol id="sl-whatsapp" viewBox="0 0 24 24"><path d="M12 3a8 8 0 00-6.9 12L3 21l6.2-2A8 8 0 1012 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 10.5c.4 1.2 1.6 2.8 3.3 3.5 1 .4 1.8.2 2.4-.4l.6-.6a1 1 0 011.3-.1l1.5 1.1a1 1 0 01.2 1.4l-.8 1.1c-.6.8-1.6 1.2-2.7 1-2.2-.4-4.8-2.5-6.2-5.1-.8-1.5-.9-2.8-.3-3.7l.7-1a1 1 0 011.3-.3l1.5.8a1 1 0 01.4 1.2l-.4.9c-.2.5-.1.9.3 1.2z" fill="currentColor" stroke="none"/></symbol><symbol id="sl-chevron-l" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="sl-chevron-r" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="sl-home" viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9H4v-9z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol><symbol id="sl-value" viewBox="0 0 24 24"><path d="M5 19V9M10 19V5M15 19v-7M20 19V11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4 19h17" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol><symbol id="sl-health" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol><symbol id="sl-calm" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 20v-1a5 5 0 0110 0v1" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 12c1 1 2.5 1 4 0M16 12c-1 1-2.5 1-4 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol><symbol id="sl-energy" viewBox="0 0 24 24"
```