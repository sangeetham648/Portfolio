
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const closeBtn = document.getElementById('closeBtn');

  hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  function toggleTech(button) {
    const stack = button.nextElementSibling;
    stack.style.display = (stack.style.display === "block") ? "none" : "block";
  }

  const year = new Date().getFullYear();
  document.getElementById("copyright").innerHTML =`© ${year} Sangeetha Murugan. All rights reserved`;
