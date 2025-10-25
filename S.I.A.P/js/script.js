document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Contact form alert
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Your message has been delivered!');
      contactForm.reset();
    });
  }

  // Appointment form alert
  const appointmentForm = document.querySelector('.appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Your appointment is now already booked!');
      appointmentForm.reset();
    });
  }
});
