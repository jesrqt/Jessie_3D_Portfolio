import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BlogSearch } from '../BlogSearch';
import { BlogTitle } from '../BlogTitle';
import { blogData } from '../BlogData/blogData';
import { BlogArticle } from '../BlogArticle';
import { NavLink } from 'react-router-dom';
import './SearchPage.css';

export const SearchPage = () => {
    const [relevantArticles, setRelevantArticles] = useState([])
    const [searchParams] = useSearchParams();
    const articleToFind = searchParams.get("title");

    useEffect(() => {
        const filteredArticles = blogData.filter(article => article.title.includes(articleToFind));
        setRelevantArticles(filteredArticles);
    }, [articleToFind]);

    return (
        <div className="bloglist-container">
            <div className="blog-title-search-container">
                <BlogTitle />
                <BlogSearch />
                <button className='basic-button'>
                    <NavLink
                        to="/blog">Go back to the list</NavLink>
                </button>
            </div>
            <div className="blog-articles-container">
                {
                    relevantArticles.map(article => <BlogArticle
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        urlPath={article.urlPath}
                        category={article.category}
                        subCategory={article.subCategory}
                        content={article.content}
                        coverPicture={article.coverPicture}
                        createdDate={article.createdDate} />)
                }
            </div>
        </div>
    )
}
