document.addEventListener('DOMContentLoaded', () => {
    const articleDetails = document.getElementById('article-details');
    const currentArticle = JSON.parse(localStorage.getItem('currentArticle'));

    if (!currentArticle) {
        articleDetails.innerHTML = '<p>Article not found.</p>';
        return;
    }

    function displayArticle() {
        articleDetails.innerHTML = `
            <img src="${currentArticle.image}" alt="News Image">
            <h2>${currentArticle.title}</h2>
            <p>${currentArticle.content}</p>
            <button class="edit" onclick="editArticle()">Edit</button>
            <button class="delete" onclick="deleteArticle()">Delete</button>
        `;
    }

    window.editArticle = function() {
        const title = prompt("Edit Title", currentArticle.title);
        const image = prompt("Edit Image URL", currentArticle.image);
        const content = prompt("Edit Content", currentArticle.content);

        if (title && image && content) {
            const articles = JSON.parse(localStorage.getItem('articles'));
            articles[currentArticle.index] = { title, image, content };
            localStorage.setItem('articles', JSON.stringify(articles));
            localStorage.setItem('currentArticle', JSON.stringify({ index: currentArticle.index, title, image, content }));
            displayArticle();
            alert('Article updated successfully!');
        }
    };

    window.deleteArticle = function() {
        const articles = JSON.parse(localStorage.getItem('articles'));
        articles.splice(currentArticle.index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        alert('Article deleted successfully!');
        window.location.href = 'index.html';
    };

    displayArticle();
});