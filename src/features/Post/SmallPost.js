import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redditAsync, selectRedditInfo, selectStatus } from './largePostSlice';


export function SmallPost(props) {
    let redditInfo = useSelector(selectRedditInfo)
    let status = useSelector(selectStatus)

    
  
    let title = 'Loading';
    let upvotes = 'Loading';
    let author = 'Loading';
    let num_comments = 'Loading';
    let time = 'Loading';
  
  
 
  
  
  
  
      try {
  
          if (status == 'complete') {

              title = redditInfo.data.children[props.index].data.title;

              let length = title.length;

              if (length > 150) {
                  title = title.slice(0, 150) + "..."
              }
             


              upvotes = redditInfo.data.children[props.index].data.ups;
              author = redditInfo.data.children[props.index].data.author;
              num_comments = redditInfo.data.children[props.index].data.num_comments;
              var date1 = new Date()
              var date2 = new Date(redditInfo.data.children[props.index].data.created_utc*1000)
              var Difference_In_Time = date1.getTime() - date2.getTime();
                
              var Difference_In_Days = Difference_In_Time / (1000 * 3600);
              time = Difference_In_Days;
              if (time > 24) {
                    time = time/24
                    time = Math.floor(time)
                    time = time.toString() + " days"
              } else {
                    time = Math.floor(time)
                    time = time.toString() + " hours"
                }
              
              }
  
          
      } catch(err) {
          console.log(err.message);
          
          title = 'No results';
          upvotes = 'error';
          author = 'error';
          num_comments = 'error';
          time = 'error'
         
          
  
      }
  
    
  
    
  
      let emptyResult = 'No content to display';
  
      if (!redditInfo) {
          redditInfo = emptyResult
      }
  
    return (
      <div className="fade-in-post"> 
          <h3>{title}</h3>
          <h4>Up-votes: {upvotes}</h4> 
         
          <ul>
              <li>Post by: {author}</li>
              <li>{time} ago</li>
              <li>{num_comments} comments</li>
          </ul>
      </div>
      
    );
  }
  