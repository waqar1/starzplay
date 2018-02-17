/*
    ./client/utils/Api.js
*/
import { Config } from './Constants';
import 'whatwg-fetch';

const getMovieDetails = (movieId) => {
  const target_url = Config.baseUrl + movieId + '?api_key=' + Config.apiKey + '&language=' + Config.selectedLanguage;
  return fetch(target_url);
};

export {
  getMovieDetails
};