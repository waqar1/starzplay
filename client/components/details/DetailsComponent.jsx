/*
    ./client/components/details/DetailsComponent.jsx
*/

import React from 'react';
import MetaComponent from './MetaComponent';
import PlayerComponent from '../player/PlayerComponent.jsx';
import { Config } from '../../utils/Constants';
import { getMovieDetails } from '../../utils/Api';
import '../../assets/js/dash.all.min.js';


export default class DetailsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      movieDetails: null
    };
  }

  componentDidMount() {
    const movieId = '9761-elephants-dream';
    getMovieDetails(movieId)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.setState({
          movieDetails: responseJson
        });
      })
      .catch((error) => {
        console.log('Error fetching movie details', error);
      });
  }

  playVideo() {
    console.log('play');
    var url = "http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd";
    var player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
    var ttmlDiv = document.querySelector("#video-caption");
    player.attachTTMLRenderingDiv(ttmlDiv);
  }

  render() {

    if(!this.state.movieDetails) {
      return null;
    }

    return (
      <div className="details-container">
        <img
          className="backdrop-image"
          src={Config.imageBasePath + this.state.movieDetails.backdrop_path}
        />
        <div className="play-button" onClick={this.playVideo}>
          <img src="client/assets/images/play.png" />
        </div>
        <MetaComponent movieDetails={this.state.movieDetails} />
        <PlayerComponent />
      </div>
    );
  }
}