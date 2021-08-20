import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieList from './components/movieList'

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  min-height: 100vh;
`
const Content = styled.div`
  width: clamp(350px, 50vw, 800px);
`
const VideoPlayer = styled.video`
    padding-top: 2vw;
    width: 100%;
    height: auto;
`

function App() {
  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState();
  const [autoPlay, setAutoPlay] = useState(false);


  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json`)
      .then(data => data.json())
      .then(items => {
        setMovieList(items)
        setCurrentMovie(items[0].video)
      })
  }, [])

  useEffect(() => {
    console.log('autoplay enabled');
  }, [autoPlay])


  return (
    <ContentWrapper>
      <Content>
        <VideoPlayer controls src={currentMovie} autoPlay={autoPlay}>
          <source src={currentMovie} type="video/mp4" />
        </VideoPlayer>
        <MovieList movieList={movieList} setCurrentMovie={setCurrentMovie} setAutoPlay={setAutoPlay} />
      </Content>
    </ContentWrapper>
  );
}

export default App;
