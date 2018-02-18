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
      movieDetails: null,
      renderPlayer: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lang !== nextProps.lang) {
      this.fetchDetails(nextProps.lang);
    }
  }

  componentDidMount() {
    this.fetchDetails(this.props.lang);
  }

  fetchDetails(lang) {
    getMovieDetails(this.props.movieId, lang)
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
    const hlsStream = 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
    const mpdStream = 'http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd';

    this.setState({
      renderPlayer: true
    });

    if (isSafariBrowser()) {
      playNativeSafari(hlsStream);
    } else {
      playVideo(mpdStream);
    }
  }

  render() {
    if(!this.state.movieDetails) {
      return (
        <div className="loader">
          <img src="client/assets/images/loader.svg" alt="loading" />
        </div>
      );
    }

    return (
      <div className="details-container" style={{ backgroundImage: 'url(' + Config.imageBasePath + this.state.movieDetails.backdrop_path + ')'}}>
        <div className="play-button" onClick={this.playVideo.bind(this)}>
          <img src="client/assets/images/play.png" alt="play" />
        </div>
        <MetaComponent movieDetails={this.state.movieDetails} />
        <PlayerComponent showPlayer={this.state.renderPlayer} />
      </div>
    );
  }
}