/*
    ./client/components/details/DetailsComponent.jsx
*/

import React from 'react';
import MetaComponent from './MetaComponent';
import PlayerComponent from '../player/PlayerComponent.jsx';
import { Config } from '../../utils/Constants';
import { getMovieDetails } from '../../utils/Api';
import { isSafariBrowser, playVideo, playNativeSafari } from '../../utils/Misc';
import '../../assets/js/dash.all.min.js';


export default class DetailsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      movieDetails: null
    };
  }

  componentDidMount() {
    getMovieDetails(this.props.movieId)
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
    if (isSafariBrowser()) {
      playNativeSafari('https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8');
    } else {
      playVideo("http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd");
    }
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