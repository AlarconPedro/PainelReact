import React from 'react';

import ReactAudioPlayer from 'react-audio-player';

import "./Estilo/Player.css"

import Facebook from "./Images/face.png"
import Instagram from "./Images/instagram.png"
import Whatsapp from "./Images/whats.png"

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://9770.omegastreaming.com.br/stream',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.setState({ url: 'https://9770.omegastreaming.com.br/stream' })
    }
  }

  player(status) {
    if (status === "pause") {
      this.setState({ url: '' })
    } else {
      this.setState({ url: 'https://9770.omegastreaming.com.br/stream' })
    }
  }

  render() {
    return (
      <div className='playerfundo'>
        {/* <h1>Rádio Luz FM</h1> */}
        <div className='player-container'>
          <div className='logoRadio'>
            {/* <div src={LogoRadio} alt="Logo da Rádio Luz FM" /> */}
          </div>
          <ReactAudioPlayer
            src={this.state.url}
            controls
            controlsList='noremoteplayback'
            className='player'
            onPause={() => this.player("pause")}
            onPlay={() => this.player("play")}
            autoPlay={true}
            style={
              {
                width: '350px',
                height: '100',
                borderRadius: '10px'
              }
            }
          />
          <div className='redes'>
            <a href="https://www.facebook.com/luzfm879" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} width="32" alt='Facebook' />
            </a>
            <a href="https://www.instagram.com/luzfm879" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} width="32" alt='Instagram' />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544998752662&text=Meu Pedido Musical é:" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} width="32" alt='Whatsapp' />
            </a>
          </div>
        </div>
      </div >
    );
  }
}

export default Player;