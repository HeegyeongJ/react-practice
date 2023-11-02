import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getNewsList();
  }, [])

  const getNewsList = async() => {
    // await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-02&sortBy=publishedAt&apiKey=698fb8601daf4b75b37ddc98ccd12a8c')
    //   .then((response) => response.json())
    //   .then(data => setNews(data));
    try {
      setIsLoading(true);
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-02&sortBy=publishedAt&apiKey=698fb8601daf4b75b37ddc98ccd12a8c');
      const data = await response.json();
      setNews(data.articles)
      setIsLoading(false)
    } catch (error) {
      console.error(error.message)
    }
    
  }


  return (
    <div>
      {!isLoading && news.map((news, index) => <NewsItem key={`news-${index}`} {...news} />)}
      {isLoading && <p>로딩중입니다.</p>}
    </div>
  );
};

export default NewsList;
