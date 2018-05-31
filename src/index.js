import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
//const API_KEY = 'AIzaSyB8TtcPb0suwIYmuunEsu75KwX45v4O61I';

//Create a new componenet which should produce an HTML
/*const App = function()  {
  return <div>Hi!</div>; //--> this is JSX
}*/


//ES6 way of writing a function using fat arrow
//this is a functional component
/*const App = () =>  {
  return (
    <div>
      <SearchBar />
    </div>
 ); //--> this is JSX
}*/

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: process.env.API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //convert to this.setState({ videos: videos }) -- ES6 syntax when key and value names are same
      //(videos) is the data returned by the YT API
    });
  }

  render() {
    //debounce is a lodash method that executes a function every n-milliseconds
    //it takes the original function and returns a new function to be used.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
   );
  }
}

//Take the component's generated HTML and put it on the page (in the DOM)
//pass an instance of the component by enclosing it in self closing JSX tags < />
//document.querySelector('.container') is the target element in the HTML (DOM) where the component instance needs to render
ReactDOM.render(<App />, document.querySelector('.container'))
