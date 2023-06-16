import React from 'react';
import { BlogTitle } from './BlogTitle';
import { BlogSearch } from './BlogSearch';
import { BlogArticles } from './BlogArticles';
import { useLayoutEffect } from 'react';
import './BlogList.css';

export const BlogList = () => {

    //This makes sure that the page is always rendered at the top
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="bloglist-container">
            <div className='bloglist-components-container'>
            <div className="blog-title-search-container">
                <BlogTitle />
                <BlogSearch />
            </div>
            <BlogArticles />
            </div>
        </div>
    )
}
