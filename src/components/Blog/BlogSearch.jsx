import React from 'react'
import { useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './BlogSearch.css';
import { useNavigate, createSearchParams } from 'react-router-dom';

export const BlogSearch = (props) => {
    const navigate = useNavigate();
    const searchInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        // this makes the query search?title=searched_word
        const searchQuery = {
            title: searchInputRef.current.value
        }
        const query = createSearchParams(searchQuery);

        // imperatively redirect with useNavigate() returned function
        navigate({
            //pathname is about where to redirect the user to
            pathname: '/blog/search',
            //query 
            search: `?${query}`
        })
    };

    return (
        <form
            className='search-bar'
            onSubmit={submitHandler}>
            <div className='input-button-container'>
                <input
                    type="text"
                    minlength="2"
                    maxlength="20"
                    placeholder="Search by keywords"
                    ref={searchInputRef}
                />
                <button
                    type="submit"><BiSearchAlt /></button>
            </div>
        </form>
    )
}
