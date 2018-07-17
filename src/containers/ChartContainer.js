import React from 'react'
import ChartList from '../components/ChartList.js'

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url).then(response => response.json()).then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error(err));
  }

  render() {
    return(
      <ChartList songs = {this.state.songs}/>
    )
  }
}

export default ChartContainer;
