/*
    ./client/utils/Api.js
*/
import { Config } from './Constants';
import 'whatwg-fetch';

const getMovieDetails = (movieId, lang) => {
  const target_url = Config.baseUrl + movieId + '?api_key=' + Config.apiKey + '&language=' + lang;
  return fetch(target_url);
};

export {
  getMovieDetails
};