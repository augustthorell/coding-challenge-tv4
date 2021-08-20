import React from 'react'
import styled from 'styled-components'

const MovieWrapper = styled.a`
position: relative;
    padding: 10px 5px;
    cursor: pointer;
    img {
        max-width: 180px;
    }
    h3 {
        text-align: center;
    }
    &:hover p {
        display: inline-block;
    }
    
    
    `
const Description = styled.p`
display: none;
position: absolute;
width: clamp(150px, 30vw, 500px);
z-index: 50;
background: rgba(255, 255, 255, 0.9);

`


const Movie = ({ movie, setCurrentMovie, setAutoPlay }) => {

    let movieWrappers = document.querySelectorAll('.movieWrapper');

    movieWrappers.forEach(movieWrapper => {
        movieWrapper.addEventListener('mousemove', function (e) {

            let x = e.pageX - this.offsetLeft
            let y = e.pageY - this.offsetTop
            let description = movieWrapper.childNodes[1];
            description.style.left = x + 'px';
            description.style.top = y + 'px';
        })
    });
    return (
        <MovieWrapper className='movieWrapper' onClick={() => { setCurrentMovie(movie.video); setAutoPlay(true) }}>
            <img src={movie.image} alt='poster of the movie' />
            <Description className='description'>{movie.description}</Description>
            <h3>{movie.name}</h3>
        </MovieWrapper >
    )
}

export default Movie
