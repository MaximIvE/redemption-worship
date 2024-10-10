import loadHTML from './utils/loadHTML';
import songs from '../html/pages/songs.html'; 
import renderContent from './utils/renderContent';

const pageContent = document.querySelector('.page');
const songPage = document.querySelector('.songs-page');

async function content() {
    const content = await loadHTML(songs);
    // console.log('content', content)
    renderContent(content);
}
content();