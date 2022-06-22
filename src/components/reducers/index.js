import { ADD_MOVIE_FAVORITE, REMOVE_FAV } from "../actions/index";

const INITIAL_STATE = JSON.parse(
  window.localStorage.getItem("reduxStore") ||
    JSON.stringify({
      moviesFavorites: []
    })
);

function saveState(state) {
  window.localStorage.setItem("reduxStore", JSON.stringify(state));
}

export function reducer(state = INITIAL_STATE, { type, payload }) {
  let newState;
  switch (type) {
    case ADD_MOVIE_FAVORITE: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: JSON.parse(
          JSON.stringify(state.moviesFavorites)
        ).concat(payload),
      };
      break;
    }
    case REMOVE_FAV: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: JSON.parse(
          JSON.stringify(state.moviesFavorites)
        ).filter((movie) => movie.id !== payload),
      };
      break;
    }

    default:
      newState = state;
  }

  saveState(newState);

  return newState;
}
