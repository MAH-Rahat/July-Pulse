document.addEventListener('DOMContentLoaded', () => {
    const articleForm = document.getElementById('article-form');

    articleForm.onsubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const image = document.getElementById('image').value;
        const content = document.getElementById('content').value;

        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push({ title, image, content });
        localStorage.setItem('articles', JSON.stringify(articles));

        alert('Article added successfully!');
        articleForm.reset();
        window.location.href = 'index.html'; // Redirect to homepage
    };
});