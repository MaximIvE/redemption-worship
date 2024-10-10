function renderContent(content) {
    console.log('content', content)
    document.querySelector('.page-content').innerHTML = content;
};

export default renderContent;