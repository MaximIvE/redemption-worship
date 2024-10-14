import renderContent from "./renderContent";
import loadHTML from "./loadHTML";
import markActiveItem from "./markActiveItem";

// pageRoutDinamic для рендерингу динамічних сторінок в блок з id = "content"
export function pageRoutDinamic(f) { return (ctx) => renderContent(f(ctx)) }

// pageRoutAsync асинхронна функція для рендерингу статичної розмітки в текстовому форматі в блок з id = "content"
export function pageRoutAsync(pageLink, setting) {
  return async (ctx) => {
    if (setting?.activ) markActiveItem(ctx);
    renderContent(await loadHTML(pageLink))
  }
}