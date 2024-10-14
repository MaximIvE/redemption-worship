import {getElement, getElementAll, remofeClassAll, addClass} from './navUtils'

export default function markActiveItem(ctx) {
    const activClassName = 'activ';
    const navItemSelector = '.nav-item';
    const activeItemSelector = `a[href="${ctx.path}"]`;

  const elements = getElementAll(navItemSelector);
  remofeClassAll(elements, activClassName);
  
  const activeItem = getElement(activeItemSelector).parentElement;
  if (activeItem) addClass(activeItem, activClassName);
};