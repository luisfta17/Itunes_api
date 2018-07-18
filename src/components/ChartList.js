import React from 'react'

const ChartList = (props) => {
  if (props.songs.length === 0) return <h1> Loading</h1>;
  function cutLink (link) {
    let cutted = link.slice(14)
    let newLink = "https://embed.music" + cutted
    console.log(newLink);
    return newLink
  }
  const options = props.songs.map((song, index) => {
  return <div key ={index}>
    <h4> Position {index + 1} - {song['im:artist'].label} </h4>
    <ul>
    <li> Title: {song['im:name'].label}</li>
    <li> Release Date: {song['im:releaseDate'].attributes.label}</li>
    <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src={cutLink(song.id.label)} width="60%"></iframe>
    </ul>
  </div>
})
  console.log(props.songs);
  return(
    <div className = "container centerfield">
      <h2> UK Music Chart</h2>
       {options}
    </div>
  )
}

export default ChartList;
