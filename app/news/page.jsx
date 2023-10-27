import React from 'react';
import Articles from './Articles';

async function getData() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=698fb8601daf4b75b37ddc98ccd12a8c')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const News = async () => {
    const data = await getData();
       
    return (
        <main>
            {data.articles.map(item => (
                <Articles key={item.title} news={item}/>
            ))}
        </main>
    )
};

export default News;