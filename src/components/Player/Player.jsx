import React from 'react'
import { useSelector } from 'react-redux'

import style from './player.module.css'

const Player = () => {

    const { currentTrack } = useSelector(state => state.audio)

  return (
    <div className={style.wrapper}>
        <h1>Player</h1>
        <audio
            // src={currentTrack.src}
            preload='true'
        />
        <button>Play</button>
    </div>
  )
}

export default Player