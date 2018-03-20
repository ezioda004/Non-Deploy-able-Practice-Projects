import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAMvVt5tcoszNHkADUBbihjAAh0417dUpc";


class App extends React.Component  {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'cool'}, (videos) =>{
            this.setState({videos: videos});
            console.log(videos);
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
    
}

ReactDOM.render(<SearchBar/>, document.querySelector(".container"));

