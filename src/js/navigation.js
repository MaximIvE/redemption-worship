console.log("navigation.js");

import page from 'page';
import loadHTML from './utils/loadHTML';
import renderContent from './utils/renderContent';

import home from '../html/pages/home.html';
import songs from '../html/pages/songs.html';
import songOne from './pages/songOne';
import shedule from '../html/pages/shedule.html';
import source from '../html/pages/source.html';
import notFound from '../html/pages/notFound.html';


// Функція для налаштування маршрутизації
export default function routing() {
  page('/', async () => renderContent(await loadHTML(home)));
  page('/songs', async () => renderContent(await loadHTML(songs)));
  page('/songs/:id', async (ctx) => renderContent(songOne(ctx)));
  page('/shedule', async () => renderContent(await loadHTML(shedule)));
  page('/source', async () => renderContent(await loadHTML(source)));

  page('*', async () => renderContent(await loadHTML(notFound)));

  // Стартуємо маршрутизацію
  page();
}
