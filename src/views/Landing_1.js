import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Expresso from '../utils/Expresso';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
  }

  componentDidMount() {

    for (let i = 0; i < 25; i++) {
      let id = Math.floor(Math.random() * 2000) + 1;
      //console.log('id: ', id);
      //console.log('Expresso.getSong(id): ', Expresso.getSong(id));
      Expresso.getSong(id).then(song => {
        this.setState(prevState => ({
          songs: [...prevState.songs, song]
        }));
        //console.log('song: ', song);
        //console.log('songs[]: ', this.state.songs);
      })
    }
  }

  renderSongs() {
    return this.state.songs.map(song => {
      return (
        <Link to={`/songs/${song.id}`}
           className="item"
           key={song.id}>
           <h3>{song.name}</h3>
           <h4>{song.artist}</h4>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="Landing">
        <h2>Your Radio Bingo Board</h2>
        <div className="employee item-list">
          {this.renderSongs()}
        </div>
      </div>
    );
  }
}

export default Landing;
