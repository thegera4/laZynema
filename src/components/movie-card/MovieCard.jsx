import React from 'react';
import './movie-card.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import notfound from '../../notfound.jpg';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { addMovieFavorite } from "../actions/index";

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.W500Img(item.poster_path || item.backdrop_path);

    console.log(props.favorites)


    return (
        <>
            <Link to={link}>
            {item.poster_path ? (
                <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>   
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
            ) : (
                <div className="movie-card" style={{ backgroundImage: `url(${notfound})` }}>
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
            )}
                <h3>{item.title || item.name}</h3>
            </Link>
            
        </>
    );
}

const mapStateToProps = (state) => ({
  favorites: state.moviesFavorites
});

const mapDispatchToProps = (dispatch) => ({
  addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
