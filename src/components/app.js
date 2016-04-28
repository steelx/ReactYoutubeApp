import React from 'react';
import {Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyAf64OZ6F1I_7WvLDqUYtwJ2QUVCaD2hvA';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        let videoSearch = _.debounce((term) => this.videoSearch(term), 300);

        return (
            <div className="app clearfix">
                <h1>React simple starter</h1>
                <SearchBar inputSearchTerm={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} ></VideoList>
            </div>
        );
    }
}

export default App;