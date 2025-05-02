document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.init-swiper').forEach(swiperEl => {
      const configEl = swiperEl.querySelector('.swiper-config');
      let options = {};
      if (configEl) {
        options = JSON.parse(configEl.textContent);
      }
      new Swiper(swiperEl, options);
    });
  });
  