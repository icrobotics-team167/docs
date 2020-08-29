'use strict';

// Automatically make links that leave the docs open in a new tab
// unless the target attribute is already specified
// https://stackoverflow.com/a/32251683/7300063
document.querySelectorAll('a').forEach(link => {
  if (link.hostname !== window.location.hostname && !link.target) {
    link.target = '_blank';
  }
});
