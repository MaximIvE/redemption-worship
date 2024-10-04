console.log("nav.js");

import page from 'page';

// Функція для рендерингу контенту
function renderContent(content) {
  document.getElementById('content').innerHTML = content;
}

// Функція для налаштування маршрутизації
export default function routing() {
  // Маршрут для домашньої сторінки
    page('/', () => renderContent('<h1>Головна сторінка</h1><p>Тут можна переглянути основну інформацію.</p>'));
  
  // Маршрут для сторінки списку пісень
  page('/song', () => {
    renderContent(`
      <h1>Список пісень</h1>
      <p>Тут можна переглянути список пісень.</p>
      <ol>
      <li><a href="/song/1" data-route>Пісня 1</a></li>
      <li><a href="/song/2" data-route>Пісня 2</a></li>
      <li><a href="/song/3" data-route>Пісня 3</a></li>
      </ol>
      `);
  });
  
  // Маршрут для сторінки окремої пісні
  page('/song/:id', (ctx) => {
    renderContent(`
      <h1>Пісня</h1>
      <p>Пісня з id: ${ctx.params.id}</p>
      <a href="/song" data-route>← До списку пісень</a>
      `);
  });

  // Маршрут для сторінки розкладу
  page('/schedule', () => {
    renderContent('<h1>Розклад</h1><p>Тут можна переглянути розклад подій.</p>');
  });

  // Маршрут для сторінки корисних ресурсів
  page('/source', () => {
    renderContent('<h1>Корисні ресурси</h1><p>Тут можна переглянути корисні ресурси.</p>');
  });

  // Маршрут для сторінок, яких не існує (404)
  page('*', () => {
    renderContent('<h1>404 - Сторінка не знайдена</h1><p>На жаль, такої сторінки не існує.</p>');
  });

  // Стартуємо маршрутизацію
  page();
}
