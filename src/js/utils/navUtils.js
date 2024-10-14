export function getElement(selector) {
  return document.querySelector(selector);
}

export function getElementAll(selector) {
  return document.querySelectorAll(selector);
}

export function remofeClassAll(elements, className) {
  elements.forEach(link => link.classList.remove(className))
};

export function addClass(elements, className) {
  elements.classList.add(className);
}