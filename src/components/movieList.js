import React from 'react'
import styled from 'styled-components'
import Movie from './movie'

const List = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media (max-width: 700px) {
    justify-content: center;
    margin-bottom: 300px;
  }
`

const MovieList = ({ movieList, setCurrentMovie, setAutoPlay }) => {
    return (
        <List>
            {movieList.map(movie =>
                (<Movie key={movie.id} movie={movie} setCurrentMovie={setCurrentMovie} setAutoPlay={setAutoPlay} />)
            )}
        </List>
    )
}

export default MovieList
