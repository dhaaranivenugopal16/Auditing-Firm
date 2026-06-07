$(document).ready(function () {

  // Highlight active nav link based on current page
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.navbar-nav .nav-link').each(function () {
    if ($(this).attr('href') === currentPage) {
      $(this).addClass('active');
    }
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 600);
    }
  });

  // Contact form validation (client-side)
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#message').val().trim();

    if (!name || !email || !message) {
      $('#formAlert').removeClass('d-none alert-success').addClass('alert-danger')
        .text('Please fill in all required fields.');
      return;
    }

    $('#formAlert').removeClass('d-none alert-danger').addClass('alert-success')
      .text('Thank you! We will get back to you within 24 hours.');
    this.reset();
  });

  // Fade-in animation on scroll for service & pricing cards
  $('.service-card, .pricing-card').css('opacity', 0);
  $(window).on('scroll', function () {
    $('.service-card, .pricing-card').each(function () {
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop() + $(window).height();
      if (scroll > top + 50) {
        $(this).animate({ opacity: 1 }, 400);
      }
    });
  }).trigger('scroll');

});
