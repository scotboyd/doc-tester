/**
 * Check the inner scroll width of the nav menu and determine if it overflows the default
 * scroll width (300px). If so, resize the nav menu.
 *
 * If the new nav menu size is greater than 525px, resize to 525px and allow for
 * horizontal scroll.
 */
 function resizeMenu(forceResize = false) {
  const scrollContainer = document.querySelector(".wy-side-scroll");
  const sidebar = document.querySelector(".wy-nav-side");
  const content = document.querySelector(".wy-nav-content-wrap");
  const screenWidth = document.documentElement.clientWidth;
  const scrollWidth = scrollContainer.scrollWidth;
  const minWidth = 300;
  const maxWidth = 525;
  const verticalMenuWidth =
    document.querySelector(".wy-menu-vertical").offsetWidth;
  const mobileBreakpoint = 767;

  let newWidth = 0;

  if (mobileBreakpoint >= screenWidth) {
    return;
  }

  if (forceResize) {
    newWidth = verticalMenuWidth + 20;
  } else {
    newWidth = scrollWidth + 20;
  }

  if (minWidth >= newWidth) {
    sidebar.style.width = `${minWidth}px`;
    content.style.marginLeft = `${minWidth}px`;
    scrollContainer.style.width = `${minWidth}px`;

    return;
  }

  if (newWidth >= maxWidth) {
    sidebar.style.width = `${maxWidth}px`;
    content.style.marginLeft = `${maxWidth}px`;
    scrollContainer.style.width = `${maxWidth}px`;

    return;
  }

  sidebar.style.width = `${newWidth}px`;
  content.style.marginLeft = `${newWidth}px`;
  scrollContainer.style.width = `${newWidth}px`;
}

function handleWindowResize() {
  const scrollContainer = document.querySelector(".wy-side-scroll");
  const sidebar = document.querySelector(".wy-nav-side");
  const content = document.querySelector(".wy-nav-content-wrap");
  const screenWidth = document.documentElement.clientWidth;
  const mobileBreakpoint = 767;

  if (mobileBreakpoint >= screenWidth) {
    sidebar.style.width = null;
    scrollContainer.style.width = null;
    content.style.marginLeft = null;
  } else {
    resizeMenu();
  }
}

window.onresize = handleWindowResize;

$(document).ready(resizeMenu);

$(document).ready(function () {
  (function (document) {
    const mutation = new MutationObserver((mutations, mut) => {
      const menuWidth =
        document.querySelector(".wy-menu-vertical").offsetWidth - 20;
      const containerWidth =
        document.querySelector(".wy-side-scroll").offsetWidth;

      if (menuWidth !== containerWidth) {
        resizeMenu(true);
      }
    });

    mutation.observe(document.querySelector(".wy-menu-vertical"), {
      attributes: true,
      subtree: true,
    });
  })(document);
});
