const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const elementsToShow = document.querySelectorAll('.show-on-scroll');

const isElementInViewport = (elm) => {
  if (typeof jQuery === 'function' && elm instanceof jQuery) {
    elm = elm[0];
  }
  const rect = elm.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

const loop = () => {
  elementsToShow.forEach((elm) => {
    if (isElementInViewport(elm)) {
      elm.classList.add('is-visible');
    } else {
      elm.classList.remove('is-visible');
    }
  });
  scroll(loop);
};

loop();
