function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openLink(url) {
  window.open(url, '_blank');
}

/* CONSOLE EFFECT FOR NAME*/
consoleText(['Cesar Ochoa'], 'text',['var(--text-color)']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 200)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 2000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 180)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}

/* SCROLL ANIMATIONS */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));

  const desktopNav = document.getElementById('desktop-nav');
  const hamburgerNav = document.getElementById('hamburger-nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      if(desktopNav) desktopNav.classList.add('scrolled-nav');
      if(hamburgerNav) hamburgerNav.classList.add('scrolled-nav');
    } else {
      if(desktopNav) desktopNav.classList.remove('scrolled-nav');
      if(hamburgerNav) hamburgerNav.classList.remove('scrolled-nav');
    }
  });
});

/* DARK MODE LOGIC */
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  
  const desktopToggle = document.getElementById('desktop-dark-toggle');
  const mobileToggle = document.getElementById('mobile-dark-toggle');
  if (desktopToggle) desktopToggle.innerHTML = isDark ? sunIcon : moonIcon;
  if (mobileToggle) mobileToggle.innerHTML = isDark ? sunIcon : moonIcon;
}

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  window.addEventListener('DOMContentLoaded', () => {
    const desktopToggle = document.getElementById('desktop-dark-toggle');
    const mobileToggle = document.getElementById('mobile-dark-toggle');
    if (desktopToggle) desktopToggle.innerHTML = sunIcon;
    if (mobileToggle) mobileToggle.innerHTML = sunIcon;
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    const desktopToggle = document.getElementById('desktop-dark-toggle');
    const mobileToggle = document.getElementById('mobile-dark-toggle');
    if (desktopToggle) desktopToggle.innerHTML = moonIcon;
    if (mobileToggle) mobileToggle.innerHTML = moonIcon;
  });
}