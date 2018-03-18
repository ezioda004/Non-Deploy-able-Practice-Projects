import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAMvVt5tcoszNHkADUBbihjAAh0417dUpc";

YTSearch({key: API_KEY, term: 'cool'}, function(data){
    console.log(data);
});
const APP = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<SearchBar/>, document.querySelector(".container"));

