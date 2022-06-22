export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_FAV = "REMOVE_FAV";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeFav(id) {
  return { type: REMOVE_FAV, payload: id };
}
