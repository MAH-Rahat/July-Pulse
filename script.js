// document.addEventListener('DOMContentLoaded', () => {
//     const newsList = document.getElementById('content');

//     // Static content
//     const staticArticles = [
//         {
//             title: "Breaking News: Major Event in Dhaka",
//             image: "assets/images/news1.jpg",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
//         },
//         {
//             title: "Sports Update: Bangladesh Wins Cricket Match",
//             image: "assets/images/news2.jpg",
//             content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada."
//         },
//         {
//             title: "Entertainment: New Movie Release",
//             image: "assets/images/news3.jpg",
//             content: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat."
//         }
//     ];

//     // Initialize articles from local storage or use static content
//     let articles = JSON.parse(localStorage.getItem('articles')) || staticArticles;

//     function displayArticles() {
//         newsList.innerHTML = ''; // Clear existing content
//         articles.forEach((article, index) => {
//             const articleDiv = document.createElement('div');
//             articleDiv.className = 'news-article';
//             articleDiv.innerHTML = `
//                 <img src="${article.image}" alt="News Image">
//                 <h2>${article.title}</h2>
//                 <p>${article.content.substring(0, 100)}...</p>
//                 <button class="see-more" onclick="viewArticle(${index})">See More</button>
//             `;
//             newsList.appendChild(articleDiv);
//         });
//     }

//     window.viewArticle = function(index) {
//         localStorage.setItem('currentArticle', JSON.stringify({ index, ...articles[index] }));
//         window.location.href = 'view_article.html';
//     };

//     displayArticles();
// });