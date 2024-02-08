document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      stagger: 30,
    });
  });

  