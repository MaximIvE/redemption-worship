async function loadHTML(file) {
    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error('Не вдалося завантажити файл');
        const html = await res.text();
        return html;
  } catch (error) {
        return `<h1>Error</h1><p>${error.message}</p>`;
  }
};

export default loadHTML;