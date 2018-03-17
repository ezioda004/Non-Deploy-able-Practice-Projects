import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAMvVt5tcoszNHkADUBbihjAAh0417dUpc";

const APP = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<SearchBar/>, document.querySelector(".container"));

