import React, {useState} from 'react';
import './App.css';
import { LargePost } from './features/Post/LargePost';
import { SmallPost } from './features/Post/SmallPost';
import Toggle from 'react-toggle';
import SearchField from './features/searchBar/react-search-field';
import { ThemeContext, themes } from './features/context/themeContext';
import {selectRedditInfo, selectStatus} from './features/Post/largePostSlice';
import {useSelector} from 'react-redux'



function App() {
  const [toggleOn, setToggleOn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  let redditInfo = useSelector(selectRedditInfo)
  let status = useSelector(selectStatus)


  let appStyle;

  // if (toggleOn === false) {
  //   appStyle = "App-blue"
  // } else {
  //   appStyle = "App-orange"
  // }
  
  return (

    <div className={appStyle}>
      
      
      
      <header className="App-header">
        

        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Toggle
              defaultChecked={false}
              icons={false}
              onChange={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
              className="toggle"
          />
            )}
          </ThemeContext.Consumer>

       
          
        
        <h1>AestheticReddit</h1>
        <div className="search-bar">
          <SearchField 
          placeholder='Search Reddit...'
          />
        </div>
        
        
      </header>
      <div className="main-content">
        <div className="large-post fade-in-post">
          <LargePost/>
        </div>
        <div className="small-post small-post-1 fade-in-post">
          <SmallPost index={'1'}/>
        </div>
        <div className="small-post small-post-2 fade-in-post">
          <SmallPost index={'2'}/>
        </div>
        <div className="small-post small-post-3 fade-in-post">
          <SmallPost index={'3'}/>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      
    </div>
  );
}

export default App;
