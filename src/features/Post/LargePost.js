import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './LargePost.module.css'

import { redditAsync, selectRedditInfo, selectStatus } from './largePostSlice';
import { selectSearchValue } from '../searchBar/searchBarSlice';


export function LargePost() {
  let redditInfo = useSelector(selectRedditInfo)
  let status = useSelector(selectStatus)
  let searchTerm = useSelector(selectSearchValue);
  const dispatch = useDispatch();
  

let title;
let upvotes;
let author ;
let num_comments;
let time;
let url;

useEffect(()=> {
    if (searchTerm=='') {
        dispatch(redditAsync())
    } else {
     dispatch(redditAsync(searchTerm));
    }
    
}, [searchTerm]);




    try {


        if (status == 'complete') {

            let mainIndex = 0;


            for (let i=0; i <25; i++ ) {
                if (redditInfo.data.children[i].data.url.slice(0,18) === 'https://i.redd.it/') {
                    mainIndex = i;
                }
            }


            title = redditInfo.data.children[mainIndex].data.title;
            upvotes = "Up-votes: " + redditInfo.data.children[mainIndex].data.ups;
            author = "Post by " + redditInfo.data.children[mainIndex].data.author;
            num_comments = redditInfo.data.children[mainIndex].data.num_comments + " comments";
            url = redditInfo.data.children[mainIndex].data.url;
            console.log(url)
            var date1 = new Date()
            var date2 = new Date(redditInfo.data.children[mainIndex].data.created_utc*1000)
            var Difference_In_Time = date1.getTime() - date2.getTime();
            
            var Difference_In_Days = Difference_In_Time / (1000 * 3600);
            time = Difference_In_Days;
            if (time > 24) {
                time = time/24
                time = Math.floor(time)
                time = time.toString() + " days ago"
            } else {
                time = Math.floor(time)
                time = time.toString() + " hours ago"
            }

            }

        
    } catch(err) {
        console.log(err.message);
        
        title = 'No results';
        upvotes = 'error';
        author = 'error';
        num_comments = 'error';
        time = 'error'
        url = "";
        

    }

  

  

    let emptyResult = 'No content to display';

    if (!redditInfo) {
        redditInfo = emptyResult
    }

  return (
    <div className="container-large fade-in-post"> 
        
            <h2>{title}</h2>
            <h4>{upvotes}</h4> 
            <img src={url} alt="" className="image-post"/>
            <ul>
                <li>{author}</li>
                <li>{time}</li>
                <li>{num_comments}</li>
            </ul>
        
        
    </div>
    
  );
}
