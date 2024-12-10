// Custom JavaScript code

// Example: Toggle navbar collapse on click
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

// Example: Carousel autoplay
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#myCarousel");

  if (carousel) {
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 5000, // Change slide every 5 seconds
    });
  }
});

// Example: Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.querySelector("#exampleModalTrigger");
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  modalTrigger.addEventListener("click", function () {
    modal.show();
  });
});


  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Autoplay will not stop when user interacts with swiper
    },
    pagination: {
      el: '.swiper-pagination', // Pagination element
      clickable: true, // Enable pagination clickable
    },
  });




