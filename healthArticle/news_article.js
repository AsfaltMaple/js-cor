var newsxhr = new XMLHttpRequest();
var newsurl = './news_article.json';

newsxhr.open('GET', newsurl, true);
newsxhr.responseType = 'json';

newsxhr.onload = function ()
{
    var newsarticles = newsxhr.response.newsarticles;
    var articlesDiv = document.getElementById('newsarticles');

newsarticles.forEach(function(newsarticle) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('newsarticle');
  
        var title = document.createElement('h2');
        title.textContent = newsarticle.title;
  
        var description = document.createElement('p');
        description.textContent = newsarticle.description;

        var info = document.createElement('p');
        info.textContent = newsarticle.info;
  
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(info);
    
        articlesDiv.appendChild(articleDiv);
      });
};
newsxhr.send();