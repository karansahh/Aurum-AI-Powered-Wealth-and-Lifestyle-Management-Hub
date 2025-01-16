import React, { useEffect, useState } from 'react';

const FinancialNews = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=finance&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error('Error fetching financial news:', error));
  }, []);

  return (
    <div className="financial-news">
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialNews;
