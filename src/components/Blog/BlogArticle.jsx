import React from 'react';
import './BlogArticle.css';
import { Link } from 'react-router-dom';

export const BlogArticle = (props) => {
  return (
    <div className="blog-article-container">
      <div className="blog-cover-photo">
        <Link to={`/blog/${props.urlPath}`}>
        <img 
        className='boxshadow'
        src={props.coverPicture}
        alt='impression of the article'/>
        </Link>
      </div>
      <div className="blog-info-container">
        <h2 id="blog-article-h2">{props.title}</h2>
        <p id="blog-article-p">{props.content.split(/\s+/).slice(0, 30).join(" ")}</p>
        <h4 id="blog-article-h4">{props.createdDate}</h4>
      </div>
    </div>
  )
}
