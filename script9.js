// ===============================
// FILTER FUNCTION
// ===============================
function filterItems(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const items = Array.from(list.getElementsByTagName("li"));
  const filter = input.value.toLowerCase();

  items.forEach(item => item.style.display = "none");

  if (!filter) { items.forEach(item => item.style.display = ""); return; }

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.startsWith(filter)) item.style.display = "";
  });
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (!text.startsWith(filter) && text.includes(filter)) item.style.display = "";
  });
}

// ===============================
// SHOW DROPDOWN
// ===============================
function showList(listId) {
  document.querySelectorAll(".dropdown").forEach(list => list.style.display = "none");
  const list = document.getElementById(listId);
  list.style.display = "block";
}

// ===============================
// CLICK ON LI
// ===============================
document.addEventListener("click", function (e) {
  if (e.target.tagName === "LI" && e.target.closest(".dropdown")) {
    const input = e.target.closest(".input-wrapper").querySelector("input");
    input.value = e.target.textContent;
    e.target.closest(".dropdown").style.display = "none";
  }
  const isInside = [...document.querySelectorAll(".input-wrapper")].some(wrapper => wrapper.contains(e.target));
  if (!isInside) {
    setTimeout(() => document.querySelectorAll(".dropdown").forEach(list => list.style.display = "none"), 100);
  }
});

// =============================== //
// SIDEBAR LOGIC - COMBINED VERSION //
// =============================== //
document.addEventListener('DOMContentLoaded', function () {
  // Your original code
  const openLabel_e = document.getElementById('openLabel_e');
  const openImage_e = document.getElementById('openLabel1_e');
  const sideMenu_e = document.getElementById('sideMenu_e');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_e.style.right = (sideMenu_e.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_e) openLabel_e.addEventListener('click', toggleSidebar);
  if (openImage_e) openImage_e.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_e.style.right = '-350px');
  if (sideMenu_e) sideMenu_e.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_q = document.getElementById('openLabel_q');
  const openImage_q = document.getElementById('openLabel1_q');
  const sideMenu_q = document.getElementById('sideMenu_q');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_q.style.right = (sideMenu_q.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_q) openLabel_q.addEventListener('click', toggleSidebar);
  if (openImage_q) openImage_q.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_q.style.right = '-350px');
  if (sideMenu_q) sideMenu_q.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_d = document.getElementById('openLabel_d');
  const openImage_d = document.getElementById('openLabel1_d');
  const sideMenu_d = document.getElementById('sideMenu_d');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_d.style.right = (sideMenu_d.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_d) openLabel_d.addEventListener('click', toggleSidebar);
  if (openImage_d) openImage_d.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_d.style.right = '-350px');
  if (sideMenu_d) sideMenu_d.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_g = document.getElementById('openLabel_g');
  const openImage_g = document.getElementById('openLabel1_g');
  const sideMenu_g = document.getElementById('sideMenu_g');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_g.style.right = (sideMenu_g.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_g) openLabel_g.addEventListener('click', toggleSidebar);
  if (openImage_g) openImage_g.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_g.style.right = '-350px');
  if (sideMenu_g) sideMenu_g.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_a = document.getElementById('openLabel_a');
  const openImage_a = document.getElementById('openLabel1_a');
  const sideMenu_a = document.getElementById('sideMenu_a');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_a.style.right = (sideMenu_a.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_a) openLabel_a.addEventListener('click', toggleSidebar);
  if (openImage_a) openImage_a.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_a.style.right = '-350px');
  if (sideMenu_a) sideMenu_a.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_b = document.getElementById('openLabel_b');
  const openImage_b = document.getElementById('openLabel1_b');
  const sideMenu_b = document.getElementById('sideMenu_b');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_b.style.right = (sideMenu_b.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_b) openLabel_b.addEventListener('click', toggleSidebar);
  if (openImage_b) openImage_b.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_b.style.right = '-350px');
  if (sideMenu_b) sideMenu_b.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_c = document.getElementById('openLabel_c');
  const openImage_c = document.getElementById('openLabel1_c');
  const sideMenu_c = document.getElementById('sideMenu_c');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_c.style.right = (sideMenu_c.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_c) openLabel_c.addEventListener('click', toggleSidebar);
  if (openImage_c) openImage_c.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_c.style.right = '-350px');
  if (sideMenu_c) sideMenu_c.addEventListener('click', e => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', function () {
  const openLabel_f = document.getElementById('openLabel_f');
  const openImage_f = document.getElementById('openLabel1_f');
  const sideMenu_f = document.getElementById('sideMenu_f');
  function toggleSidebar(e) {
    e.stopPropagation();
    sideMenu_f.style.right = (sideMenu_f.style.right === '0px') ? '-350px' : '0';
  }
  if (openLabel_f) openLabel_f.addEventListener('click', toggleSidebar);
  if (openImage_f) openImage_f.addEventListener('click', toggleSidebar);
  document.addEventListener('click', () => sideMenu_f.style.right = '-350px');
  if (sideMenu_f) sideMenu_f.addEventListener('click', e => e.stopPropagation());
});

// =============================== //
// ENHANCED FUNCTIONALITY - AUTO CLOSE OTHER SIDEBARS //
// =============================== //
document.addEventListener('DOMContentLoaded', function () {
  // Store all side menu elements
  const allSideMenus = [
    'sideMenu_e', 'sideMenu_q', 'sideMenu_d', 'sideMenu_g',
    'sideMenu_a', 'sideMenu_b', 'sideMenu_c', 'sideMenu_f'
  ];

  // Function to close all sidebars except the specified one
  function closeOtherSidebars(exceptMenuId) {
    allSideMenus.forEach(menuId => {
      if (menuId !== exceptMenuId) {
        const menu = document.getElementById(menuId);
        if (menu) {
          menu.style.right = '-350px';
        }
      }
    });
  }
  
  // Override the existing toggle functions to include auto-close
  function enhanceSidebarBehavior(openElements, menuId) {
    if (!openElements || !openElements.length) return;

    openElements.forEach(element => {
      if (element) {
        // Remove existing click listeners and add enhanced ones
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);

        newElement.addEventListener('click', function (e) {
          e.stopPropagation();
          const menu = document.getElementById(menuId);
          if (menu) {
            const isOpening = menu.style.right !== '0px';
            if (isOpening) {
              // Close all other sidebars
              closeOtherSidebars(menuId);
              // Open this sidebar
              menu.style.right = '0px';
            } else {
              // Close this sidebar
              menu.style.right = '-350px';
            }
          }
        });
      }
    });
  }
  
  // Enhance all sidebars
  enhanceSidebarBehavior([document.getElementById('openLabel_e'), document.getElementById('openLabel1_e')], 'sideMenu_e');
  enhanceSidebarBehavior([document.getElementById('openLabel_q'), document.getElementById('openLabel1_q')], 'sideMenu_q');
  enhanceSidebarBehavior([document.getElementById('openLabel_d'), document.getElementById('openLabel1_d')], 'sideMenu_d');
  enhanceSidebarBehavior([document.getElementById('openLabel_g'), document.getElementById('openLabel1_g')], 'sideMenu_g');
  enhanceSidebarBehavior([document.getElementById('openLabel_a'), document.getElementById('openLabel1_a')], 'sideMenu_a');
  enhanceSidebarBehavior([document.getElementById('openLabel_b'), document.getElementById('openLabel1_b')], 'sideMenu_b');
  enhanceSidebarBehavior([document.getElementById('openLabel_c'), document.getElementById('openLabel1_c')], 'sideMenu_c');
  enhanceSidebarBehavior([document.getElementById('openLabel_f'), document.getElementById('openLabel1_f')], 'sideMenu_f');
  
  // Enhanced document click to close all sidebars
  document.addEventListener('click', function () {
    allSideMenus.forEach(menuId => {
      const menu = document.getElementById(menuId);
      if (menu) {
        menu.style.right = '-350px';
      }
    });
  });
});

// ===============================
// SWAP BOXES
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const swapIcon = document.querySelector(".symbol2");
  if (swapIcon) swapIcon.addEventListener("click", () => {
    const fromBox = document.getElementById("fromBox");
    const toBox = document.getElementById("toBox");
    [fromBox.value, toBox.value] = [toBox.value, fromBox.value];
    swapIcon.classList.add("rotate-once");
    swapIcon.addEventListener("animationend", () => swapIcon.classList.remove("rotate-once"), { once: true });
  });
});

// ===============================
// LEAFLET MAP
// ===============================
let map;
let currentPathAnimation = null;
let currentBorder = null;
let startMarker = null;
let destMarker = null;
let userLocationMarker = null;

// Global variables for tracking map elements
window.currentPolyline = null;
window.mapInitialized = false;

// Campus locations
const locations = {
  "Front Gate": [11.034759, 77.033850],
  "Back Gate": [11.031830, 77.036535],
  "Admission Office": [11.032767, 77.033617],
  "Library": [11.033661, 77.033429],
  "Principal Office": [11.033275, 77.033850],
  "S F Office": [11.033115, 77.033413],
  "Aided Office": [11.033251, 77.034202],
  "Hostel Office": [11.032699, 77.035435],
  "Canteen 1": [11.033694, 77.034304],
  "Canteen 2": [11.032101, 77.032651],
  "GRD Auditorium": [11.032417, 77.033284],
  "B Block": [11.033248, 77.033051],
  "A Block": [11.033237, 77.032509],
  "C Block": [11.032633, 77.033866],
  "D Block": [11.033298, 77.034564],
  "E Block": [11.032851, 77.034357],
  "F Block": [11.032583, 77.033890],
  "G Block": [11.032615, 77.034720],
  "Q Block": [11.034033, 77.034548],
  "Current Location": null
};

// Multi-point turning routes (your existing routes object remains the same)
const routes = {
  "Front Gate>Back Gate": [
    [11.034759, 77.033850],
    [11.034288, 77.033858],
    [11.034388, 77.035532],
    [11.033969, 77.035545],
    [11.034019, 77.035967],
    [11.034019, 77.036085],
    [11.033959, 77.036216],
    [11.033840, 77.036347],
    [11.033525, 77.036412],
    [11.032705, 77.036465],
    [11.031830, 77.036535]
  ],
  "Back Gate>Front Gate": [
    [11.031830, 77.036535],
    [11.032705, 77.036465],
    [11.033525, 77.036412],
    [11.033840, 77.036347],
    [11.033959, 77.036216],
    [11.034019, 77.036085],
    [11.034019, 77.035967],
    [11.033969, 77.035545],
    [11.034388, 77.035532],
    [11.034288, 77.033858],
    [11.034759, 77.033850]
  ],
  "Front Gate>E Block": [
    [11.034759, 77.033850],
    [11.033670, 77.033853],
    [11.033688, 77.034312],
    [11.032851, 77.034357]
  ],
  "E Block>Front Gate": [
    [11.032851, 77.034357],
    [11.033688, 77.034312],
    [11.033670, 77.033853],
    [11.034759, 77.033850]
  ],
  "Front Gate>Canteen 1": [
    [11.034759, 77.033850],
    [11.033670, 77.033853],
    [11.033694, 77.034304]
  ],
  "Canteen 1>Front Gate": [
    [11.033694, 77.034304],
    [11.033670, 77.033853],
    [11.034759, 77.033850]
  ], "Front Gate>Canteen 2": [
    [11.034759, 77.033850],
    [11.033670, 77.033853],
    [11.033403, 77.033864],
    [11.033266, 77.033746],
    [11.033253, 77.033416],
    [11.032574, 77.033426],
    [11.032545, 77.032686],
    [11.032110, 77.032702],
    [11.032101, 77.032651]],
  "Canteen 2>Front Gate": [
    [11.032101, 77.032651],
    [11.032110, 77.032702],
    [11.032545, 77.032686],
    [11.032574, 77.033426],
    [11.033253, 77.033416],
    [11.033266, 77.033746],
    [11.033403, 77.033864],
    [11.033670, 77.033853],
    [11.034759, 77.033850]],
  "Front Gate>Admission Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033264, 77.033754],
    [11.033264, 77.033416],
    [11.032574, 77.033430],
    [11.032574, 77.033430],
    [11.032590, 77.033872],
    [11.032782, 77.033861],
    [11.032767, 77.033617]
  ], "Admission Office>Front Gate": [
    [11.032767, 77.033617],
    [11.032782, 77.033861],
    [11.032590, 77.033872],
    [11.032574, 77.033430],
    [11.032574, 77.033430],
    [11.033264, 77.033416],
    [11.033264, 77.033754],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ], "Front Gate>Library": [
    [11.034759, 77.033850],
    [11.033677, 77.033856],
    [11.033661, 77.033429]
  ],
  "Library>Front Gate": [
    [11.033661, 77.033429],
    [11.033677, 77.033856],
    [11.034759, 77.033850]
  ],
  "Front Gate>S F Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033264, 77.033754],
    [11.033256, 77.033411],
    [11.033115, 77.033413]
  ],
  "S F Office>Front Gate": [
    [11.033115, 77.033413],
    [11.033256, 77.033411],
    [11.033264, 77.033754],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ], "Front Gate>GRD Auditorium": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033264, 77.033754],
    [11.033256, 77.033411],
    [11.033115, 77.033413],
    [11.032421, 77.033430],
    [11.032417, 77.033284]
  ],
  "GRD Auditorium>Front Gate": [
    [11.032417, 77.033284],
    [11.032421, 77.033430],
    [11.033115, 77.033413],
    [11.033256, 77.033411],
    [11.033264, 77.033754],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ],
  "Front Gate>Aided Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033275, 77.033950],
    [11.033282, 77.034204],
    [11.033251, 77.034202]
  ],
  "Aided Office>Front Gate": [
    [11.033251, 77.034202],
    [11.033282, 77.034204],
    [11.033275, 77.033950],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ],
  "Front Gate>Principal Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033275, 77.033950],
    [11.033275, 77.033850]
  ],
  "Principal Office>Front Gate": [
    [11.033275, 77.033850],
    [11.033275, 77.033950],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ],
  "Front Gate>Hostel Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033275, 77.033950],
    [11.033279, 77.034331],
    [11.032608, 77.034355],
    [11.032650, 77.035436],
    [11.032699, 77.035435]
  ],
  "Hostel Office>Front Gate": [
    [11.032699, 77.035435],
    [11.032650, 77.035436],
    [11.032608, 77.034355],
    [11.033279, 77.034331],
    [11.033275, 77.033950],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ],
  "Front Gate>B Block": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033264, 77.033754],
    [11.033256, 77.033411],
    [11.033248, 77.033051]
  ],
  "B Block>Front Gate": [
    [11.033248, 77.033051],
    [11.033256, 77.033411],
    [11.033264, 77.033754],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ],
  "Front Gate>A Block": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033264, 77.033754],
    [11.033256, 77.033411],
    [11.033237, 77.032509]
  ],
  "A Block>Front Gate": [
    [11.033237, 77.032509],
    [11.033256, 77.033411],
    [11.033264, 77.033754],
    [11.033398, 77.033861],
    [11.034759, 77.033850]],
  "Front Gate>Q Block": [
    [11.034759, 77.033850],
    [11.034286, 77.033850],
    [11.034327, 77.034368],
    [11.034203, 77.034379],
    [11.034159, 77.034486],
    [11.034048, 77.034500],
    [11.034033, 77.034548]],
  "Q Block>Front Gate": [
    [11.034033, 77.034548],
    [11.034048, 77.034500],
    [11.034159, 77.034486],
    [11.034203, 77.034379],
    [11.034327, 77.034368],
    [11.034286, 77.033850],
    [11.034759, 77.033850]],
  "Front Gate>Hostel Office": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033275, 77.033950],
    [11.033279, 77.034331],
    [11.032608, 77.034355],
    [11.032650, 77.035436],
    [11.032699, 77.035435]
  ], "Front Gate>G Block": [
    [11.034759, 77.033850],
    [11.033398, 77.033861],
    [11.033275, 77.033950],
    [11.033279, 77.034331],
    [11.032608, 77.034355],
    [11.032624, 77.034717]],
  "G Block>Front Gate": [
    [11.032624, 77.034717],
    [11.032608, 77.034355],
    [11.033279, 77.034331],
    [11.033275, 77.033950],
    [11.033398, 77.033861],
    [11.034759, 77.033850]
  ], "Front Gate>D Block": [
    [11.034759, 77.033850],
    [11.033670, 77.033853],
    [11.033696, 77.034312],
    [11.033285, 77.034331],
    [11.033298, 77.034564]],
  "D Block>Front Gate": [
    [11.033298, 77.034564],
    [11.033285, 77.034331],
    [11.033696, 77.034312],
    [11.033670, 77.033853],
    [11.034759, 77.033850]],
  "E Block>GRD Auditorium": [
    [11.032851, 77.034357],
    [11.032609, 77.034355],
    [11.032575, 77.033426],
    [11.032420, 77.033429],
    [11.032417, 77.033284]],
  "GRD Auditorium>E Block": [
    [11.032417, 77.033284],
    [11.032420, 77.033429],
    [11.032575, 77.033426],
    [11.032609, 77.034355],
    [11.032851, 77.034357]],
  "E Block>S F Office": [
    [11.032851, 77.034357],
    [11.032609, 77.034355],
    [11.032575, 77.033426],
    [11.033115, 77.033413]],
  "S F Office>E Block": [
    [11.033115, 77.033413],
    [11.032575, 77.033426],
    [11.032609, 77.034355],
    [11.032851, 77.034357]
  ], "E Block>Aided Office": [
    [11.032851, 77.034357],
    [11.033286, 77.034333],
    [11.033285, 77.034215],
    [11.033251, 77.034202]],
  "Aided Office>E Block": [
    [11.033251, 77.034202],
    [11.033285, 77.034215],
    [11.033286, 77.034333],
    [11.032851, 77.034357]],
  "E Block>Principal Office": [
    [11.032851, 77.034357],
    [11.033286, 77.034333],
    [11.033275, 77.033850]],
  "Principal Office>E Block": [
    [11.033275, 77.033850],
    [11.033286, 77.034333],
    [11.032851, 77.034357]],
  "E Block>Admission Office": [
    [11.032851, 77.034357],
    [11.032609, 77.034355],
    [11.032590, 77.033850],
    [11.032779, 77.033848],
    [11.032767, 77.033617]],
  "Admission Office>E Block": [
    [11.032767, 77.033617],
    [11.032779, 77.033848],
    [11.032590, 77.033850],
    [11.032609, 77.034355],
    [11.032851, 77.034357]],
  "E Block>Hostel Office": [
    [11.032851, 77.034357],
    [11.032608, 77.034360],
    [11.032650, 77.035436],
    [11.032699, 77.035435]],
  "Hostel Office>E Block": [
    [11.032699, 77.035435],
    [11.032650, 77.035436],
    [11.032608, 77.034360],
    [11.032851, 77.034357]],
  "E Block>Back Gate": [
    [11.032851, 77.034357],
    [11.032608, 77.034360],
    [11.032685, 77.036460],
    [11.031830, 77.036535]],
  "Back Gate>E Block": [
    [11.031830, 77.036535],
    [11.032685, 77.036460],
    [11.032608, 77.034360],
    [11.032851, 77.034357]],
  "E Block>Canteen 2": [
    [11.032851, 77.034357],
    [11.032609, 77.034355],
    [11.032550, 77.032686],
    [11.032105, 77.032702],
    [11.032101, 77.032651]
  ], "Canteen 2>E Block": [
    [11.032101, 77.032651],
    [11.032105, 77.032702],
    [11.032550, 77.032686],
    [11.032609, 77.034355],
    [11.032851, 77.034357]],
  "E Block>Library": [
    [11.032851, 77.034357],
    [11.033277, 77.034330],
    [11.033285, 77.033955],
    [11.033409, 77.033861],
    [11.033672, 77.033848],
    [11.033661, 77.033429]],
  "Library>E Block": [
    [11.033661, 77.033429],
    [11.033672, 77.033848],
    [11.033409, 77.033861],
    [11.033285, 77.033955],
    [11.033277, 77.034330],
    [11.032851, 77.034357]],
  "E Block>B Block": [
    [11.032851, 77.034357],
    [11.033277, 77.034330],
    [11.033248, 77.033051]],
  "B Block>E Block": [
    [11.033248, 77.033051],
    [11.033277, 77.034330],
    [11.032851, 77.034357]],
  "E Block>A Block": [
    [11.032851, 77.034357],
    [11.033277, 77.034330],
    [11.033237, 77.032509]],
  "A Block>E Block": [
    [11.033237, 77.032509],
    [11.033277, 77.034330],
    [11.032851, 77.034357]],
  "E Block>D Block": [
    [11.032851, 77.034357],
    [11.033303, 77.034333],
    [11.033298, 77.034564]],
  "D Block>E Block": [
    [11.033298, 77.034564],
    [11.033303, 77.034333],
    [11.032851, 77.034357]],
  "E Block>Q Block": [
    [11.032851, 77.034357],
    [11.033696, 77.034317],
    [11.033701, 77.034505],
    [11.034033, 77.034499],
    [11.034033, 77.034548]],
  "Q Block>E Block": [
    [11.034033, 77.034548],
    [11.034033, 77.034499],
    [11.033701, 77.034505],
    [11.033696, 77.034317],
    [11.032851, 77.034357]],
  "E Block>G Block": [
    [11.032851, 77.034357],
    [11.032608, 77.034357],
    [11.032615, 77.034720]],
  "G Block>E Block": [
    [11.032615, 77.034720],
    [11.032608, 77.034357],
    [11.032851, 77.034357]
  ], "E Block>C Block": [
    [11.032851, 77.034357],
    [11.032608, 77.034357],
    [11.032590, 77.033869],
    [11.032633, 77.033866]],
  "C Block>E Block": [
    [11.032633, 77.033866],
    [11.032590, 77.033869],
    [11.032608, 77.034357],
    [11.032851, 77.034357]],
  "S F Office>Library": [
    [11.033115, 77.033413],
    [11.033648, 77.033410],
    [11.033661, 77.033429]],
  "Library>S F Office": [
    [11.033661, 77.033429],
    [11.033648, 77.033410],
    [11.033115, 77.033413]],
  "S F Office>Admission Office": [
    [11.033115, 77.033413],
    [11.032576, 77.033421],
    [11.032590, 77.033850],
    [11.032779, 77.033848],
    [11.032767, 77.033617]],
  "Admission Office>S F Office": [
    [11.032767, 77.033617],
    [11.032779, 77.033848],
    [11.032590, 77.033850],
    [11.032576, 77.033421],
    [11.033115, 77.033413]],
  "S F Office>Hostel Office": [
    [11.033115, 77.033413],
    [11.032576, 77.033421],
    [11.032653, 77.035435],
    [11.032699, 77.035435]],
  "Hostel Office>S F Office": [
    [11.032699, 77.035435],
    [11.032653, 77.035435],
    [11.032576, 77.033421],
    [11.033115, 77.033413]],
  "S F Office>Back Gate": [
    [11.033115, 77.033413],
    [11.032576, 77.033421],
    [11.032682, 77.036465],
    [11.031830, 77.036535]],
  "Back Gate>S F Office": [
    [11.031830, 77.036535],
    [11.032682, 77.036465],
    [11.032576, 77.033421],
    [11.033115, 77.033413]],
  "S F Office>Principal Office": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033275, 77.033850]],
  "Principal Office>S F Office": [
    [11.033275, 77.033850],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>Aided Office": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033280, 77.034204],
    [11.033251, 77.034202]],
  "Aided Office>S F Office": [
    [11.033251, 77.034202],
    [11.033280, 77.034204],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>Canteen 1": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033269, 77.033746],
    [11.033417, 77.033861],
    [11.033680, 77.033856],
    [11.033694, 77.034304]],
  "Canteen 1>S F Office": [
    [11.033694, 77.034304],
    [11.033680, 77.033856],
    [11.033417, 77.033861],
    [11.033269, 77.033746],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>B Block": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033248, 77.033051]],
  "B Block>S F Office": [
    [11.033248, 77.033051],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>A Block": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033237, 77.032509]],
  "A Block>S F Office": [
    [11.033237, 77.032509],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>Q Block": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033269, 77.033746],
    [11.033417, 77.033861],
    [11.033680, 77.033856],
    [11.033701, 77.034502],
    [11.034035, 77.034499],
    [11.034033, 77.034548]],
  "Q Block>S F Office": [
    [11.034033, 77.034548],
    [11.034035, 77.034499],
    [11.033701, 77.034502],
    [11.033680, 77.033856],
    [11.033417, 77.033861],
    [11.033269, 77.033746],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>D Block": [
    [11.033115, 77.033413],
    [11.033251, 77.033408],
    [11.033298, 77.034564]],
  "D Block>S F Office": [
    [11.033298, 77.034564],
    [11.033251, 77.033408],
    [11.033115, 77.033413]],
  "S F Office>GRD Auditorium": [
    [11.033115, 77.033413],
    [11.032421, 77.033429],
    [11.032417, 77.033284]],
  "GRD Auditorium>S F Office": [
    [11.032417, 77.033284],
    [11.032421, 77.033429],
    [11.033115, 77.033413]],
  "S F Office>Canteen 2": [
    [11.033115, 77.033413],
    [11.032574, 77.033426],
    [11.032545, 77.032686],
    [11.032110, 77.032702],
    [11.032101, 77.032651]],
  "Canteen 2>S F Office": [
    [11.032101, 77.032651],
    [11.032110, 77.032702],
    [11.032545, 77.032686],
    [11.032574, 77.033426],
    [11.033115, 77.033413]],
  "S F Office>G Block": [
    [11.033115, 77.033413],
    [11.032574, 77.033426],
    [11.032615, 77.034720]],
  "G Block>S F Office": [
    [11.032615, 77.034720],
    [11.032574, 77.033426],
    [11.033115, 77.033413]],
  "Q Block>Canteen 1": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033694, 77.034304]],
  "Canteen 1>Q Block": [
    [11.033694, 77.034304],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Aided Office": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033690, 77.034317],
    [11.033290, 77.034325],
    [11.033285, 77.034207],
    [11.033251, 77.034202]],
  "Aided Office>Q Block": [
    [11.033251, 77.034202],
    [11.033285, 77.034207],
    [11.033290, 77.034325],
    [11.033690, 77.034317],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Back Gate": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033717, 77.035521],
    [11.032653, 77.0355510],
    [11.032682, 77.036460],
    [11.031830, 77.036535]],
  "Back Gate>Q Block": [
    [11.031830, 77.036535],
    [11.032682, 77.036460],
    [11.032653, 77.0355510],
    [11.033717, 77.035521],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Admission Office": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033690, 77.034312],
    [11.032610, 77.034360],
    [11.032590, 77.033864],
    [11.032774, 77.033858],
    [11.032767, 77.033617]],
  "Admission Office>Q Block": [
    [11.032767, 77.033617],
    [11.032774, 77.033858],
    [11.032590, 77.033864],
    [11.032610, 77.034360],
    [11.033690, 77.034312],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>GRD Auditorium": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033677, 77.033858],
    [11.033414, 77.033864],
    [11.033272, 77.033751],
    [11.033259, 77.033410],
    [11.032421, 77.033429],
    [11.032417, 77.033284]],
  "GRD Auditorium>Q Block": [
    [11.032417, 77.033284],
    [11.032421, 77.033429],
    [11.033259, 77.033410],
    [11.033272, 77.033751],
    [11.033414, 77.033864],
    [11.033677, 77.033858],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Principal Office": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033693, 77.034309],
    [11.033293, 77.034330],
    [11.033275, 77.033850]],
  "Principal Office>Q Block": [
    [11.033275, 77.033850],
    [11.033293, 77.034330],
    [11.033693, 77.034309],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Hostel Office": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033709, 77.035073],
    [11.032637, 77.035111],
    [11.032650, 77.035435],
    [11.032699, 77.035435]],
  "Hostel Office>Q Block": [
    [11.032699, 77.035435],
    [11.032650, 77.035435],
    [11.032637, 77.035111],
    [11.033709, 77.035073],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>Canteen 2": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033677, 77.033858],
    [11.033414, 77.033864],
    [11.033272, 77.033751],
    [11.033259, 77.033410],
    [11.032574, 77.033426],
    [11.032550, 77.032686],
    [11.032105, 77.032702],
    [11.032101, 77.032651]],
  "Canteen 2>Q Block": [
    [11.032101, 77.032651],
    [11.032105, 77.032702],
    [11.032550, 77.032686],
    [11.032574, 77.033426],
    [11.033259, 77.033410],
    [11.033272, 77.033751],
    [11.033414, 77.033864],
    [11.033677, 77.033858],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>B Block": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033677, 77.033858],
    [11.033414, 77.033864],
    [11.033272, 77.033751],
    [11.033248, 77.033051]],
  "B Block>Q Block": [
    [11.033248, 77.033051],
    [11.033272, 77.033751],
    [11.033414, 77.033864],
    [11.033677, 77.033858],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>A Block": [
    [11.034033, 77.034548],
    [11.034030, 77.034502],
    [11.033696, 77.034499],
    [11.033677, 77.033858],
    [11.033414, 77.033864],
    [11.033272, 77.033751],
    [11.033237, 77.032509]],
  "A Block>Q Block": [
    [11.033237, 77.032509],
    [11.033272, 77.033751],
    [11.033414, 77.033864],
    [11.033677, 77.033858],
    [11.033696, 77.034499],
    [11.034030, 77.034502],
    [11.034033, 77.034548]],
  "Q Block>G Block": [
    [11.034033, 77.034548],
    [11.034033, 77.034499],
    [11.033701, 77.034505],
    [11.033696, 77.034317],
    [11.032851, 77.034357],
    [11.032606, 77.034357],
    [11.032615, 77.034720]],
  "G Block>Q Block": [
    [11.032615, 77.034720],
    [11.032606, 77.034357],
    [11.032851, 77.034357],
    [11.033696, 77.034317],
    [11.033701, 77.034505],
    [11.034033, 77.034499],
    [11.034033, 77.034548]],
  "D Block>Library": [
    [11.033298, 77.034564],
    [11.033272, 77.033947],
    [11.033415, 77.033864],
    [11.033675, 77.033850],
    [11.033661, 77.033429]
  ], "D Block>Admission Office": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032583, 77.033890],
    [11.032780, 77.033877],
    [11.032767, 77.033617]
  ], "Admission Office>D Block": [
    [11.032767, 77.033617],
    [11.032780, 77.033877],
    [11.032583, 77.033890],
    [11.032604, 77.034349],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>Canteen 1": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.033694, 77.034320],
    [11.033694, 77.034304]
  ], "Canteen 1>D Block": [
    [11.033694, 77.034304],
    [11.033694, 77.034320],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>Hostel Office": [
    [11.033298, 77.034564],
    [11.033295, 77.034478],
    [11.033125, 77.034484],
    [11.033141, 77.035096],
    [11.032643, 77.035106],
    [11.032654, 77.035440],
    [11.032699, 77.035435]
  ], "Hostel Office>D Block": [
    [11.032699, 77.035435],
    [11.032654, 77.035440],
    [11.032643, 77.035106],
    [11.033141, 77.035096],
    [11.033125, 77.034484],
    [11.033295, 77.034478],
    [11.033298, 77.034564]
  ], "D Block>Back Gate": [
    [11.033298, 77.034564],
    [11.033295, 77.034478],
    [11.033125, 77.034484],
    [11.033141, 77.035096],
    [11.032643, 77.035110],
    [11.032685, 77.036460],
    [11.031830, 77.036535]
  ], "Back Gate>D Block": [
    [11.031830, 77.036535],
    [11.032685, 77.036460],
    [11.032643, 77.035110],
    [11.033141, 77.035096],
    [11.033125, 77.034484],
    [11.033295, 77.034478],
    [11.033298, 77.034564]
  ], "D Block>Canteen 2": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032583, 77.033890],
    [11.032551, 77.032686],
    [11.032106, 77.032708],
    [11.032106, 77.032651]
  ], "Canteen 2>D Block": [
    [11.032106, 77.032651],
    [11.032106, 77.032708],
    [11.032551, 77.032686],
    [11.032583, 77.033890],
    [11.032604, 77.034349],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>GRD Auditorium": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032580, 77.033426],
    [11.032420, 77.033432],
    [11.032417, 77.033284]
  ], "GRD Auditorium>D Block": [
    [11.032417, 77.033284],
    [11.032420, 77.033432],
    [11.032580, 77.033426],
    [11.032604, 77.034349],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>C Block": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032583, 77.033890],
  ], "C Block>D Block": [
    [11.032583, 77.033890],
    [11.032604, 77.034349],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>G Block": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032615, 77.034720]
  ], "G Block>D Block": [
    [11.032615, 77.034720],
    [11.032604, 77.034349],
    [11.033286, 77.034336],
    [11.033298, 77.034564]
  ], "D Block>Q Block": [
    [11.033298, 77.034564],
    [11.033298, 77.034623],
    [11.033701, 77.034610],
    [11.033700, 77.034499],
    [11.034033, 77.034497],
    [11.034033, 77.034548]
  ], "Q Block>D Block": [
    [11.034033, 77.034548],
    [11.034033, 77.034497],
    [11.033700, 77.034499],
    [11.033701, 77.034610],
    [11.033298, 77.034623],
    [11.033298, 77.034564]
  ], "D Block>F Block": [
    [11.033298, 77.034564],
    [11.033286, 77.034336],
    [11.032604, 77.034349],
    [11.032583, 77.033890]
  ], "A Block>Admission Office": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888],
    [11.032777, 77.033878],
    [11.032767, 77.033617]
  ], "A Block>Library": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.033643, 77.033402],
    [11.033661, 77.033429]
  ], "A Block>Aided Office": [
    [11.033237, 77.032509],
    [11.033282, 77.034200],
    [11.033251, 77.034202]
  ], "A Block>Hostel Office": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.032570, 77.033424],
    [11.032642, 77.035440],
    [11.032699, 77.035435]
  ], "A Block>C Block": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888],
  ], "A Block>F Block": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888],
  ], "A Block>G Block": [
    [11.033237, 77.032509],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032615, 77.034720]
  ], "A Block>GRD Auditorium": [
    [11.033237, 77.032509],
    [11.032545, 77.032565],
    [11.032567, 77.033212],
    [11.032425, 77.033215]
  ], "A Block>Canteen 2": [
    [11.033237, 77.032509],
    [11.032545, 77.032549],
    [11.032551, 77.032681],
    [11.032120, 77.032705],
    [11.032121, 77.032651]
  ], "A Block>Canteen 1": [
    [11.033237, 77.032509],
    [11.033267, 77.033748],
    [11.033420, 77.033864],
    [11.033678, 77.033853],
    [11.033694, 77.034304]
  ], "A Block>Back Gate": [
    [11.033237, 77.032509],
    [11.032542, 77.032561],
    [11.032683, 77.036463],
    [11.031830, 77.036535]
  ], "B Block>Admission Office": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888],
    [11.032777, 77.033878],
    [11.032767, 77.033617]
  ],
  "B Block>Library": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.033643, 77.033402],
    [11.033661, 77.033429]
  ],
  "B Block>Aided Office": [
    [11.033248, 77.033051],
    [11.033282, 77.034200],
    [11.033251, 77.034202]
  ],
  "B Block>Hostel Office": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.032570, 77.033424],
    [11.032642, 77.035440],
    [11.032699, 77.035435]
  ],
  "B Block>C Block": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888]
  ],
  "B Block>F Block": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032590, 77.033888]
  ],
  "B Block>G Block": [
    [11.033248, 77.033051],
    [11.033250, 77.033413],
    [11.032575, 77.033421],
    [11.032615, 77.034720]
  ],
  "B Block>GRD Auditorium": [
    [11.033248, 77.033051],
    [11.032560, 77.033090],
    [11.032567, 77.033212],
    [11.032425, 77.033215]
  ],
  "B Block>Canteen 2": [
    [11.033248, 77.033051],
    [11.032555, 77.033080],
    [11.032551, 77.032681],
    [11.032120, 77.032705],
    [11.032121, 77.032651]
  ],
  "B Block>Canteen 1": [
    [11.033248, 77.033051],
    [11.033267, 77.033748],
    [11.033420, 77.033864],
    [11.033678, 77.033853],
    [11.033694, 77.034304]
  ],
  "B Block>Back Gate": [
    [11.033248, 77.033051],
    [11.032557, 77.033085],
    [11.032683, 77.036463],
    [11.031830, 77.036535]
  ], "C Block>GRD Auditorium": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032575, 77.033429],
    [11.032417, 77.033432],
    [11.032417, 77.033284]
  ], "C Block>Front Gate": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032575, 77.033429],
    [11.033259, 77.033410],
    [11.033268, 77.033754],
    [11.033422, 77.033866],
    [11.034759, 77.033850]
  ], "C Block>Admission Office": [
    [11.032633, 77.033866],
    [11.032775, 77.033858],
    [11.032767, 77.033617]
  ], "C Block>Library": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032575, 77.033429],
    [11.033630, 77.033405],
    [11.033661, 77.033429]
  ], "C Block>S F Office": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032575, 77.033429],
    [11.033115, 77.033413]
  ], "C Block>Aided Office": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032608, 77.034346],
    [11.033284, 77.034330],
    [11.033280, 77.034202],
    [11.033251, 77.034202]
  ], "C Block>Hostel Office": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032654, 77.035442],
    [11.032699, 77.035435]
  ], "C Block>Canteen 1": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032608, 77.034346],
    [11.033694, 77.034324]
  ], "C Block>Canteen 2": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032546, 77.032686],
    [11.032101, 77.032705],
    [11.032101, 77.032651]
  ], "C Block>G Block": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032615, 77.034720]
  ], "C Block>Q Block": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032608, 77.034346],
    [11.033694, 77.034324],
    [11.033695, 77.034499],
    [11.034032, 77.034502],
    [11.034033, 77.034548]
  ], "C Block>Back Gate": [
    [11.032633, 77.033866],
    [11.032582, 77.033868],
    [11.032680, 77.036460],
    [11.031830, 77.036535]
  ], "F Block>GRD Auditorium": [
    [11.032583, 77.033890],
    [11.032575, 77.033429],
    [11.032417, 77.033432],
    [11.032417, 77.033284]
  ], "F Block>Front Gate": [
    [11.032583, 77.033890],
    [11.032575, 77.033429],
    [11.033259, 77.033410],
    [11.033268, 77.033754],
    [11.033422, 77.033866],
    [11.034759, 77.033850]
  ], "F Block>Admission Office": [
    [11.032583, 77.033890],
    [11.032775, 77.033858],
    [11.032767, 77.033617]
  ], "F Block>Library": [
    [11.032583, 77.033890],
    [11.032575, 77.033429],
    [11.033630, 77.033405],
    [11.033661, 77.033429]
  ], "F Block>S F Office": [
    [11.032583, 77.033890],
    [11.032575, 77.033429],
    [11.033115, 77.033413]
  ], "F Block>Aided Office": [
    [11.032583, 77.033890],
    [11.032608, 77.034346],
    [11.033284, 77.034330],
    [11.033280, 77.034202],
    [11.033251, 77.034202]
  ], "F Block>Hostel Office": [
    [11.032583, 77.033890],
    [11.032654, 77.035442],
    [11.032699, 77.035435]
  ], "F Block>Canteen 1": [
    [11.032583, 77.033890],
    [11.032608, 77.034346],
    [11.033694, 77.034324]
  ], "F Block>Canteen 2": [
    [11.032583, 77.033890],
    [11.032546, 77.032686],
    [11.032101, 77.032705],
    [11.032101, 77.032651]
  ], "F Block>G Block": [
    [11.032583, 77.033890],
    [11.032615, 77.034720]
  ], "F Block>Q Block": [
    [11.032583, 77.033890],
    [11.032608, 77.034346],
    [11.033694, 77.034324],
    [11.033695, 77.034499],
    [11.034032, 77.034502],
    [11.034033, 77.034548]
  ], "F Block>Back Gate": [
    [11.032583, 77.033890],
    [11.032680, 77.036460],
    [11.031830, 77.036535]
  ], "F Block>E Block": [
    [11.032583, 77.033890],
    [11.032600, 77.034349],
    [11.032851, 77.034347]
  ], "Admission Office>Library": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032569, 77.033420],
    [11.033645, 77.033410],
    [11.033661, 77.033429]
  ], "Admission Office>Principal Office": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.033275, 77.033850]
  ], "Admission Office>Aided Office": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.033275, 77.033850],
    [11.033280, 77.034202],
    [11.033251, 77.034202]
  ], "Admission Office>Hostel Office": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032655, 77.035441],
    [11.032699, 77.035435]
  ], "Admission Office>Canteen 1": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032610, 77.034349],
    [11.033694, 77.034314]
  ], "Admission Office>Canteen 2": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032547, 77.032687],
    [11.032100, 77.032705],
    [11.032101, 77.032651]
  ], "Admission Office>GRD Auditorium": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032574, 77.033426],
    [11.032418, 77.033432],
    [11.032417, 77.033284]
  ], "Admission Office>Back Gate": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032680, 77.036459],
    [11.031830, 77.036535]
  ], "Admission Office>G Block": [
    [11.032767, 77.033617],
    [11.032778, 77.033865],
    [11.032590, 77.033880],
    [11.032615, 77.034720]
  ], "Library>Principal Office": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.033258, 77.033416],
    [11.033275, 77.033850]
  ], "Library>Canteen 2": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.032574, 77.033424],
    [11.032550, 77.032683],
    [11.032100, 77.032705],
    [11.032101, 77.032651]
  ], "Library>Hostel Office": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.032574, 77.033424],
    [11.032655, 77.035441],
    [11.032699, 77.035435]
  ], "Library>GRD Auditorium": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.032574, 77.033424],
    [11.032420, 77.033430],
    [11.032417, 77.033284],
  ], "Library>G Block": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.032574, 77.033424],
    [11.032615, 77.034720]
  ], "Library>Q Block": [
    [11.033661, 77.033429],
    [11.033690, 77.034502],
    [11.034020, 77.034502],
    [11.034020, 77.034548]
  ], "Library>Back Gate": [
    [11.033661, 77.033429],
    [11.033645, 77.033410],
    [11.032574, 77.033424],
    [11.032680, 77.036459],
    [11.031830, 77.036535]
  ], "Hostel Office>Aided Office": [
    [11.032699, 77.035435],
    [11.032655, 77.035441],
    [11.032614, 77.034346],
    [11.033280, 77.034338],
    [11.033280, 77.034202],
    [11.033251, 77.034202]
  ], "Hostel Office>Canteen 1": [
    [11.032699, 77.035435],
    [11.032650, 77.035441],
    [11.032608, 77.034346],
    [11.033694, 77.034314]
  ], "Hostel Office>Canteen 2": [
    [11.032699, 77.035435],
    [11.032650, 77.035441],
    [11.032540, 77.032683],
    [11.032100, 77.032705],
    [11.032101, 77.032651]
  ], "Hostel Office>GRD Auditorium": [
    [11.032699, 77.035435],
    [11.032650, 77.035441],
    [11.032582, 77.033431],
    [11.032424, 77.033432],
    [11.032417, 77.033284]
  ], "Hostel Office>Back Gate": [
    [11.032699, 77.035435],
    [11.032650, 77.035441],
    [11.032675, 77.036460],
    [11.031830, 77.036535]
  ], "Aided Office>Back Gate": [
    [11.033251, 77.034202],
    [11.033280, 77.034202],
    [11.033284, 77.034338],
    [11.032610, 77.034345],
    [11.032675, 77.036460],
    [11.031830, 77.036535]
  ], "Aided Office>Canteen 1": [
    [11.033251, 77.034202],
    [11.033280, 77.034202],
    [11.033284, 77.034338],
    [11.033694, 77.034314]
  ], "Aided Office>Canteen 2": [
    [11.033251, 77.034202],
    [11.033280, 77.034202],
    [11.033253, 77.033410],
    [11.032569, 77.033426],
    [11.032540, 77.032683],
    [11.032100, 77.032705],
    [11.032101, 77.032651]
  ], "Aided Office>GRD Auditorium": [
    [11.033251, 77.034202],
    [11.033280, 77.034202],
    [11.033253, 77.033410],
    [11.032421, 77.033432],
    [11.032417, 77.033284]
  ], "Aided Office>Library": [
    [11.033251, 77.034202],
    [11.033280, 77.034202],
    [11.033253, 77.033410],
    [11.033645, 77.033410],
    [11.033661, 77.033429]
  ], "Canteen 1>Back Gate": [
    [11.033694, 77.034314],
    [11.032610, 77.034345],
    [11.032675, 77.036460],
    [11.031830, 77.036535]
  ], "Canteen 1>Canteen 2": [
    [11.033694, 77.034314],
    [11.033678, 77.033856],
    [11.033411, 77.033864],
    [11.033270, 77.033755],
    [11.033256, 77.033408],
    [11.032569, 77.033424],
    [11.032540, 77.032683],
    [11.032100, 77.032705],
    [11.032101, 77.032651]
  ], "Canteen 1>G Block": [
    [11.033694, 77.034314],
    [11.032605, 77.034349],
    [11.032615, 77.034720]
  ], "Canteen 1>E Block": [
    [11.033694, 77.034314],
    [11.032851, 77.034357]
  ], "Canteen 2>Principal Office": [
    [11.032101, 77.032651],
    [11.032100, 77.032705],
    [11.032540, 77.032683],
    [11.032569, 77.033424],
    [11.033255, 77.033408],
    [11.033275, 77.033850]
  ], "Canteen 2>G Block": [
    [11.032101, 77.032651],
    [11.032100, 77.032705],
    [11.032540, 77.032683],
    [11.032615, 77.034720]
  ], "Canteen 2>Back Gate": [
    [11.032101, 77.032651],
    [11.032100, 77.032705],
    [11.032550, 77.032683],
    [11.032675, 77.036460],
    [11.031830, 77.036535]
  ], "Back Gate>Principal Office": [
    [11.031830, 77.036535],
    [11.032675, 77.036460],
    [11.032610, 77.034346],
    [11.033285, 77.034333],
    [11.033275, 77.033850]
  ], "Back Gate>GRD Auditorium": [
    [11.031830, 77.036535],
    [11.032675, 77.036460],
    [11.032569, 77.033428],
    [11.032423, 77.033434],
    [11.032417, 77.033284]
  ], "Back Gate>G Block": [
    [11.031830, 77.036535],
    [11.032675, 77.036460],
    [11.032615, 77.034720]
  ], "G Block>Principal Office": [
    [11.032615, 77.034720],
    [11.032604, 77.034349],
    [11.033288, 77.034336],
    [11.033275, 77.033850]
  ], "G Block>Aided Office": [
    [11.032615, 77.034720],
    [11.032604, 77.034349],
    [11.033288, 77.034336],
    [11.033285, 77.034203],
    [11.033251, 77.034202]
  ], "G Block>Hostel Office": [
    [11.032615, 77.034720],
    [11.032650, 77.035441],
    [11.032699, 77.035435]
  ], "G Block>GRD Auditorium": [
    [11.032615, 77.034720],
    [11.032571, 77.033428],
    [11.032420, 77.033430],
    [11.032417, 77.033284]
  ],"GRD Auditorium>Canteen 1":[
    [11.032417, 77.033284],
    [11.032423, 77.033432],
    [11.032563, 77.033429],
    [11.032608, 77.034346],
    [11.033693, 77.034314]
  ]
};

// ===============================
// FIND NEAREST ENTRANCE FROM CURRENT LOCATION
// ===============================
function findNearestEntrance(userCoords) {
  const entrances = [
    { name: "Front Gate", coords: locations["Front Gate"] },
    { name: "Back Gate", coords: locations["Back Gate"] },
    { name: "Main Pathway", coords: [11.033670, 77.033853] } // Central pathway point
  ];

  let nearest = entrances[0];
  let minDistance = Number.MAX_VALUE;

  entrances.forEach(entrance => {
    const distance = calculateDistance(userCoords, entrance.coords);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = entrance;
    }
  });

  return nearest;
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(coord1, coord2) {
  const R = 6371000; // Earth radius in meters
  const lat1 = coord1[0] * Math.PI / 180;
  const lat2 = coord2[0] * Math.PI / 180;
  const deltaLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const deltaLon = (coord2[1] - coord1[1]) * Math.PI / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// ===============================
// CREATE PATH FROM CURRENT LOCATION
// ===============================
function createPathFromCurrentLocation(userCoords, destination) {
  const nearestEntrance = findNearestEntrance(userCoords);
  const destinationCoords = locations[destination];

  if (!destinationCoords) {
    alert("Destination coordinates not found");
    return [userCoords, userCoords]; // Fallback
  }

  // Create path: User -> Nearest Entrance -> Destination
  const pathToEntrance = createDirectPath(userCoords, nearestEntrance.coords);
  const pathFromEntrance = findRoute(nearestEntrance.name, destination);

  return [...pathToEntrance, ...pathFromEntrance.slice(1)]; // Remove duplicate entrance point
}

// Create a simple direct path between two points
function createDirectPath(start, end, steps = 5) {
  const path = [start];
  for (let i = 1; i < steps; i++) {
    const ratio = i / steps;
    const lat = start[0] + (end[0] - start[0]) * ratio;
    const lng = start[1] + (end[1] - start[1]) * ratio;
    path.push([lat, lng]);
  }
  path.push(end);
  return path;
}

// Find route between two known locations
function findRoute(from, to) {
  const key = `${from}>${to}`;
  const reverseKey = `${to}>${from}`;

  if (routes[key]) {
    return routes[key];
  } else if (routes[reverseKey]) {
    return [...routes[reverseKey]].reverse();
  } else {
    // Fallback: direct path
    return [locations[from], locations[to]];
  }
}

// ===============================
// INIT MAP
// ===============================
function initMap() {
  if (map) {
    map.invalidateSize();
    return;
  }

  const center = [11.033418, 77.033832];
  map = L.map('map1', { scrollWheelZoom: true, minZoom: 18, maxZoom: 22 }).setView(center, 18);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 22
  }).addTo(map);

  L.control.zoom({ position: 'topright' }).addTo(map);

  const bounds = [[11.035284, 77.031938], [11.030366, 77.036766]];
  map.setMaxBounds(bounds);

  const world = [[-90, -180], [-90, 180], [90, 180], [90, -180]];
  const campus = [[11.034697, 77.031938], [11.035284, 77.036380], [11.030796, 77.036766], [11.030366, 77.032142]];

  L.polygon([world, campus], {
    color: 'blue',
    weight: 0,
    fillColor: 'black',
    fillOpacity: 0.7,
    interactive: false
  }).addTo(map);
}

// ===============================
// ANIMATED PATH (UPDATED VERSION)
// ===============================
function matchCase(input) {
  if (input.toLowerCase() === "current location") return "Current Location";
  return Object.keys(locations).find(key => key.toLowerCase() === input.toLowerCase());
}

function animatePath(coords) {
  // Clear previous path animation if exists
  if (currentPathAnimation) {
    currentPathAnimation.stop();
    currentPathAnimation = null;
  }
  
  // Remove existing polyline if exists
  if (window.currentPolyline) {
    map.removeLayer(window.currentPolyline);
    window.currentPolyline = null;
  }
  
  // Remove old markers and paths
  if (currentBorder) map.removeLayer(currentBorder);
  if (startMarker) map.removeLayer(startMarker);
  if (destMarker) map.removeLayer(destMarker);

  let index = 0;

  currentBorder = L.polyline([], { color: "#024486d0", weight: 7, opacity: 0.9 }).addTo(map);
  window.currentPolyline = L.polyline([], { color: "#3a92eaff", weight: 3, opacity: 0.9 }).addTo(map);

  // Add start marker (current location or building)
  const startCoords = coords[0];
  startMarker = L.circleMarker(startCoords, {
    radius: 8,
    color: "#1E90FF",
    weight: 2,
    fillColor: "#1E90FF",
    fillOpacity: 0.9
  }).addTo(map);

  function interpolatePoints(p1, p2, steps) {
    let result = [];
    for (let i = 1; i <= steps; i++) {
      let lat = p1[0] + (p2[0] - p1[0]) * (i / steps);
      let lng = p1[1] + (p2[1] - p1[1]) * (i / steps);
      result.push([lat, lng]);
    }
    return result;
  }

  let smoothCoords = [];
  for (let i = 0; i < coords.length - 1; i++) {
    smoothCoords.push(coords[i]);
    smoothCoords = smoothCoords.concat(interpolatePoints(coords[i], coords[i + 1], 10));
  }
  smoothCoords.push(coords[coords.length - 1]);

  // Create animation object
  currentPathAnimation = {
    running: true,
    stop: function() {
      this.running = false;
    }
  };

  function addNextPoint() {
    if (!currentPathAnimation.running) return;
    
    if (index < smoothCoords.length) {
      currentBorder.addLatLng(smoothCoords[index]);
      window.currentPolyline.addLatLng(smoothCoords[index]);
      index++;
      setTimeout(addNextPoint, 26);
    } else {
      map.fitBounds(window.currentPolyline.getBounds());

      // Add destination marker
      const endCoords = coords[coords.length - 1];
      destMarker = L.marker(endCoords, {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          iconSize: [35, 35],
          iconAnchor: [17, 34]
        })
      }).addTo(map);
      currentPathAnimation = null;
    }
  }
  
  addNextPoint();
  
  return currentPathAnimation;
}

// ===============================
// UPDATE USER LOCATION MARKER
// ===============================
function updateUserLocationMarker(userCoords) {
  if (userLocationMarker) {
    map.removeLayer(userLocationMarker);
  }

  userLocationMarker = L.marker(userCoords, {
    icon: L.divIcon({
      className: "current-location-marker",
      html: "<div class='pulse-dot'></div>",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    })
  }).addTo(map);
}

// ===============================
// SHOW PATH (with current location) - UPDATED
// ===============================
function showPath(from, to) {
  if (from === "Current Location" || to === "Current Location") {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const userCoords = [position.coords.latitude, position.coords.longitude];
        locations["Current Location"] = userCoords;
        updateUserLocationMarker(userCoords);
        proceedShowPath(from, to, userCoords);
      },
      () => {
        alert("Unable to fetch your location. Please check location permissions.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  } else {
    proceedShowPath(from, to);
  }
}

function proceedShowPath(from, to, userCoords = null) {
  from = matchCase(from);
  to = matchCase(to);

  if (!from || !to) {
    alert("Invalid locations selected");
    return;
  }

  // Clear previous path animation
  if (currentPathAnimation) {
    currentPathAnimation.stop();
    currentPathAnimation = null;
  }
  
  // Remove existing path from map
  if (window.currentPolyline) {
    map.removeLayer(window.currentPolyline);
    window.currentPolyline = null;
  }

  let path;

  if (from === "Current Location" && userCoords) {
    // Create dynamic path from current location
    path = createPathFromCurrentLocation(userCoords, to);
  } else if (to === "Current Location" && userCoords) {
    // Create dynamic path to current location (reverse)
    path = createPathFromCurrentLocation(userCoords, from);
    path = path.reverse(); // Reverse the path
  } else {
    // Use predefined route
    const key = `${from}>${to}`;
    const reverseKey = `${to}>${from}`;

    if (routes[key]) {
      path = routes[key];
    } else if (routes[reverseKey]) {
      path = [...routes[reverseKey]].reverse();
    } else {
      // Fallback: direct path
      path = [locations[from], locations[to]];
    }
  }

  currentPathAnimation = animatePath(path);
}

// ===============================
// SEARCH & OPEN OVERLAY WITH LOCALSTORAGE (FIXED)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('but');
  
  // Track if Enter key was recently pressed to prevent multiple rapid calls
  let enterKeyPressed = false;
  const debounceDelay = 300; // milliseconds
  
  // Detect "Enter" key press with debouncing
  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      
      // Prevent multiple rapid Enter presses
      if (enterKeyPressed) {
        console.log("Enter key already pressed, waiting...");
        return;
      }
      
      enterKeyPressed = true;
      
      // Reset the flag after delay
      setTimeout(() => {
        enterKeyPressed = false;
      }, debounceDelay);
      
      searchRoute(); // Call your function directly
    }
  });
  
  // Optional: also run when clicking the button
  if (search) {
    search.addEventListener('click', searchRoute);
  }
});

// Main search function - UPDATED
function searchRoute() {
  const from = document.getElementById("fromBox").value;
  const to = document.getElementById("toBox").value;
  
  if (!from || !to) {
    alert("Please select both From and To locations");
    return;
  }
  
  if (from === to) {
    alert("Please select different locations");
    return;
  }
  
  // Clear previous path animation if exists
  if (currentPathAnimation) {
    currentPathAnimation.stop();
    currentPathAnimation = null;
  }
  
  // Remove existing path from map if exists
  if (window.currentPolyline) {
    map.removeLayer(window.currentPolyline);
    window.currentPolyline = null;
  }
  
  localStorage.setItem("mapFrom", from);
  localStorage.setItem("mapTo", to);
  document.getElementById("mapOverlay").style.display = "block";
  
  // Small delay to ensure DOM is updated
  setTimeout(() => {
    if (!window.mapInitialized) {
      initMap();
      window.mapInitialized = true;
    }
    showPath(from, to);
  }, 100);
}

// ===============================
// CLOSE OVERLAY - UPDATED
// ===============================
function closeMap() {
  document.getElementById("mapOverlay").style.display = "none";
  localStorage.removeItem("mapFrom");
  localStorage.removeItem("mapTo");
  
  // Clear current path animation
  if (currentPathAnimation) {
    currentPathAnimation.stop();
    currentPathAnimation = null;
  }
  
  // Remove polyline from map
  if (window.currentPolyline) {
    map.removeLayer(window.currentPolyline);
    window.currentPolyline = null;
  }
}

// ===============================
// AUTO-OPEN MAP ON PAGE LOAD - UPDATED
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const storedFrom = localStorage.getItem("mapFrom");
  const storedTo = localStorage.getItem("mapTo");

  if (storedFrom && storedTo) {
    document.getElementById("fromBox").value = storedFrom;
    document.getElementById("toBox").value = storedTo;
    document.getElementById("mapOverlay").style.display = "block";

    // Small delay to ensure DOM is updated
    setTimeout(() => {
      if (!window.mapInitialized) {
        initMap();
        window.mapInitialized = true;
      }
      showPath(storedFrom, storedTo);
    }, 100);
  }
});

// ===============================
// ADD CSS FOR PULSING LOCATION MARKER
// ===============================
const style = document.createElement('style');
style.textContent = `
  .pulse-dot {
    width: 16px;
    height: 16px;
    background: #1E90FF;
    border: 3px solid white;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(19, 15, 238, 0.93);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(30, 144, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(30, 144, 255, 0);
    }
  }
  
  .current-location-marker {
    text-align: center;
  }
`;
document.head.appendChild(style);
// ===============================
// ANIMATED PATH (UPDATED VERSION)
// ===============================
function animatePath(coords) {
  // Clear previous path animation if exists
  if (currentPathAnimation) {
    currentPathAnimation.stop();
    currentPathAnimation = null;
  }
  
  // Remove existing polyline if exists
  if (window.currentPolyline) {
    map.removeLayer(window.currentPolyline);
    window.currentPolyline = null;
  }
  
  // Remove old markers and paths
  if (currentBorder) {
    map.removeLayer(currentBorder);
    currentBorder = null;
  }
  if (startMarker) {
    map.removeLayer(startMarker);
    startMarker = null;
  }
  if (destMarker) {
    map.removeLayer(destMarker);
    destMarker = null;
  }

  let index = 0;

  // Create the path lines immediately (they should persist)
  currentBorder = L.polyline([], { 
    color: "#024486d0", 
    weight: 7, 
    opacity: 0.9 
  }).addTo(map);
  
  window.currentPolyline = L.polyline([], { 
    color: "#3a92eaff", 
    weight: 3, 
    opacity: 0.9 
  }).addTo(map);

  // Add start marker (current location or building)
  const startCoords = coords[0];
  startMarker = L.circleMarker(startCoords, {
    radius: 8,
    color: "#1E90FF",
    weight: 2,
    fillColor: "#1E90FF",
    fillOpacity: 0.9
  }).addTo(map);

  // Function to create smooth path
  function interpolatePoints(p1, p2, steps) {
    let result = [];
    for (let i = 1; i <= steps; i++) {
      let lat = p1[0] + (p2[0] - p1[0]) * (i / steps);
      let lng = p1[1] + (p2[1] - p1[1]) * (i / steps);
      result.push([lat, lng]);
    }
    return result;
  }

  // Create smooth coordinates for animation
  let smoothCoords = [];
  for (let i = 0; i < coords.length - 1; i++) {
    smoothCoords.push(coords[i]);
    smoothCoords = smoothCoords.concat(interpolatePoints(coords[i], coords[i + 1], 10));
  }
  smoothCoords.push(coords[coords.length - 1]);

  // Also create a static completed path that will remain after animation
  const completedPolyline = L.polyline(coords, {
    color: "#3a92eaff",
    weight: 3,
    opacity: 0.9
  });

  // Create animation object
  currentPathAnimation = {
    running: true,
    stop: function() {
      this.running = false;
    }
  };

  function addNextPoint() {
    if (!currentPathAnimation || !currentPathAnimation.running) return;
    
    if (index < smoothCoords.length) {
      // Add points to the animated path
      currentBorder.addLatLng(smoothCoords[index]);
      window.currentPolyline.addLatLng(smoothCoords[index]);
      index++;
      setTimeout(addNextPoint, 26);
    } else {
      // Animation complete - ensure path stays visible
      map.fitBounds(window.currentPolyline.getBounds());

      // Add destination marker
      const endCoords = coords[coords.length - 1];
      destMarker = L.marker(endCoords, {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          iconSize: [35, 35],
          iconAnchor: [17, 34]
        })
      }).addTo(map);
      
      // IMPORTANT: Don't set currentPathAnimation to null
      // Just mark it as completed but keep it running
      currentPathAnimation.running = false;
      currentPathAnimation.completed = true;
      
      // Add the completed static path to ensure it stays visible
      setTimeout(() => {
        // After animation, make sure the path is fully drawn
        window.currentPolyline.setLatLngs(coords);
        currentBorder.setLatLngs(coords);
      }, 100);
    }
  }
  
  addNextPoint();
  
  return currentPathAnimation;
}// ============================================
// DESKTOP-ONLY ENFORCEMENT - ADD AT END
// ============================================

// Check if device is mobile and not in desktop mode
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isDesktopSiteMode() {
  // Check if viewport is wide enough (desktop mode)
  // Mobile browsers in desktop mode usually report larger screen width
  return window.innerWidth >= 1024 || 
         window.screen.width >= 1024 ||
         !/Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function showMobileWarning() {
  const warning = document.getElementById('mobile-warning');
  if (isMobileDevice() && !isDesktopSiteMode()) {
    warning.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Disable all interactive elements
    document.querySelectorAll('button, input, [class*="clickable-label_"], [class*="symbol_"]').forEach(el => {
      el.style.pointerEvents = 'none';
      el.style.opacity = '0.5';
    });
  } else {
    warning.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Enable all interactive elements
    document.querySelectorAll('button, input, [class*="clickable-label_"], [class*="symbol_"]').forEach(el => {
      el.style.pointerEvents = 'auto';
      el.style.opacity = '1';
    });
  }
}

function tryAnyway() {
  document.getElementById('mobile-warning').style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Force minimum width and re-enable elements
  document.body.style.minWidth = '1200px';
  
  document.querySelectorAll('button, input, [class*="clickable-label_"], [class*="symbol_"]').forEach(el => {
    el.style.pointerEvents = 'auto';
    el.style.opacity = '1';
  });
  
  // Force map to resize if it exists
  if (map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
}

// Initialize desktop-only enforcement
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for try anyway button
  const tryAnywayBtn = document.getElementById('try-anyway-btn');
  if (tryAnywayBtn) {
    tryAnywayBtn.addEventListener('click', tryAnyway);
  }
  
  // Force desktop layout
  document.body.style.minWidth = '1200px';
  
  // Check and show warning
  showMobileWarning();
  
  // Also check after a short delay to ensure everything is loaded
  setTimeout(showMobileWarning, 500);
});

// Check on resize
window.addEventListener('resize', function() {
  showMobileWarning();
  
  // Force minimum width on resize
  document.body.style.minWidth = '1200px';
  
  // Invalidate map size if it exists
  if (map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
});

// Check on orientation change
window.addEventListener('orientationchange', function() {
  setTimeout(function() {
    showMobileWarning();
    document.body.style.minWidth = '1200px';
    
    if (map) {
      map.invalidateSize();
    }
  }, 300);
});

// Override any responsive map behavior
const originalInitMap = window.initMap;
window.initMap = function() {
  if (originalInitMap) {
    originalInitMap();
  }
  
  // Force desktop zoom levels
  if (map) {
    map.setMinZoom(18);
    map.setMaxZoom(22);
    
    // Disable touch interactions if on mobile without desktop mode
    if (isMobileDevice() && !isDesktopSiteMode()) {
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.dragging.disable();
    }
  }
};

// Prevent zooming on mobile
document.addEventListener('touchstart', function(e) {
  if (isMobileDevice() && !isDesktopSiteMode() && e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

// Prevent double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
  if (isMobileDevice() && !isDesktopSiteMode()) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }
}, false);