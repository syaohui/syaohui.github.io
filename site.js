// On narrow screens the sidebar becomes a horizontal menu bar; keep the current page's entry in view.
(function () {
  var current = document.querySelector('.menu a[aria-current="page"]');
  if (!current || !window.matchMedia('(max-width: 900px)').matches) return;
  var bar = document.querySelector('.menu');
  bar.scrollLeft = current.offsetLeft - (bar.clientWidth - current.offsetWidth) / 2;
})();
