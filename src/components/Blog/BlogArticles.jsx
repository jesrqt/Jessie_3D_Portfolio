import React from 'react';
import { blogData } from './BlogData/blogData';
import { BlogArticle } from './BlogArticle';
import './BlogArticles.css';

export const BlogArticles = () => {
  return (
    <div className="blog-articles-container">
      {blogData.map(article =>
        <BlogArticle
          key={article.id}
          id={article.id}
          title={article.title}
          urlPath={article.urlPath}
          category={article.category}
          subCategory={article.subCategory}
          content={article.content}
          coverPicture={article.coverPicture}
          createdDate={article.createdDate}
        />)}
    </div>
  )
}
