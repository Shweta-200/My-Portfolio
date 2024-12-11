// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = "↑";
  backToTopButton.className = "back-to-top";
  document.body.appendChild(backToTopButton);
  
  // Show/Hide Back-to-Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to Top When Back-to-Top Button is Clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // Sticky Navigation (Optional)
  const header = document.querySelector('.hero');
  const headerOffset = header.offsetTop;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerOffset) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
