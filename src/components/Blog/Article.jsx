import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { blogData } from './BlogData/blogData';
import './Article.css';

export const Article = (props) => {
    const [title, setTitle] = useState("");
    const [subCategory, setSubCategory] = useState([]);
    const [content, setContent] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const { urlName } = useParams();

    useEffect(() => {
        const blogArticleData = blogData.filter(article => article.urlPath === urlName);
        setTitle(blogArticleData[0].title);
        setSubCategory(blogArticleData[0].subCategory);
        setContent(blogArticleData[0].content);
        setCoverPicture(blogArticleData[0].coverPicture);
        setCreatedDate(blogArticleData[0].createdDate);
    }, [urlName]);

    return (
        <article>
            <div className="eighty-width">
                <div className="article-title-container">
                    <h1>{title}</h1>
                    <h4 className="article-date">Published on {createdDate}</h4>
                    <div className="subcategory-container">
                        {subCategory.map(cat =>
                            <div className="subcategory-tag">{cat}</div>)}
                    </div>
                </div>
                <img 
                className="article-img"
                src={coverPicture} 
                alt="impression of the article" />

                <div>
                    <p
                    className="article-content">{content}</p>
                </div>
            </div>
        </article>
    )
}
