import page from 'page';

import home from '../html/pages/home.html';
import songs from '../html/pages/songs.html';
import songOne from './pages/songOne';
import shedule from '../html/pages/shedule.html';
import source from '../html/pages/source.html';
import notFound from '../html/pages/notFound.html';
import { pageRoutDinamic, pageRoutAsync } from './utils/pageRout';


// Функція для налаштування маршрутизації
export default function routing() {
  const obj = { activ: true };

  page('/', pageRoutAsync(home, obj));
  page('/songs', pageRoutAsync(songs, obj));
  page('/songs/:id', pageRoutDinamic(songOne));
  page('/shedule', pageRoutAsync(shedule, obj));
  page('/source', pageRoutAsync(source, obj));
  page('*', pageRoutAsync(notFound));
  // Стартуємо маршрутизацію
  page();
};
