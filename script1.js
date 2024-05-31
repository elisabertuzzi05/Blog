document.addEventListener('DOMContentLoaded', function() {
    // Simula un elenco di articoli del blog
    const articles = [
        {
            title: 'Come prendersi cura del tuo gatto',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tincidunt orci.'
        },
        {
            title: 'I migliori giochi per gatti',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            title: 'Cosa fare se il tuo gatto si ammala',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    // Riferimento alla sezione degli articoli
    const articlesSection = document.getElementById('articles');

    // Funzione per caricare gli articoli
    function loadArticles() {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            const titleElement = document.createElement('h2');
            titleElement.textContent = article.title;
            const contentElement = document.createElement('p');
            contentElement.textContent = article.content;
            articleElement.appendChild(titleElement);
            articleElement.appendChild(contentElement);
            articlesSection.appendChild(articleElement);
        });
    }

    // Carica gli articoli al caricamento della pagina
    loadArticles();
});
