/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import DetailsComponent from './details/DetailsComponent.jsx';
import { Config } from '../utils/Constants';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lang: Config.selectedLanguage
    }
  }
  updateSelectedLanguage(selectedLanguage) {
    this.setState({
      lang: selectedLanguage
    });
    selectedLanguage === Config.languageEnglish ?
      document.body.style.direction = 'ltr'
      : document.body.style.direction = 'rtl';
  }
  render() {
    return (
      <div className="container">
        <div className="language-selector">
          <span
            className={ this.state.lang === Config.languageEnglish ? 'selected-language' : '' }
            onClick={() => this.updateSelectedLanguage(Config.languageEnglish)}
          >
            EN
          </span>
          &nbsp;|&nbsp;
          <span
            className={ this.state.lang === Config.languageArabic ? 'selected-language' : '' }
            onClick={() => this.updateSelectedLanguage(Config.languageArabic)}
          >
            AR
          </span>
        </div>
        <DetailsComponent movieId="9761-elephants-dream" lang={this.state.lang} />
      </div>
    );
  }
}