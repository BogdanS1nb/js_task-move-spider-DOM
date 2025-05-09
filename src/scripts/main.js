'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Курсор відносно стіни
  const offsetX = e.clientX - wallRect.left;
  const offsetY = e.clientY - wallRect.top;

  const clampedLeft = Math.min(
    Math.max(0, offsetX - spiderWidth / 2),
    wall.clientWidth - spiderWidth,
  );

  const clampedTop = Math.min(
    Math.max(0, offsetY - spiderHeight / 2),
    wall.clientHeight - spiderHeight,
  );

  spider.style.left = `${clampedLeft}px`;
  spider.style.top = `${clampedTop}px`;
});
