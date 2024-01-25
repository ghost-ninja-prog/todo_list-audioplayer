import React from 'react'
// import tracksList from '../../assets/tracksList'

import style from './AudioPlayer.module.css'
import TrackItem from '../../components/TrackItem/TrackItem'
import { useSelector } from 'react-redux'

const AudioPlayer = () => {

  const tracks = useSelector(state => state.audio.tracks)

  return (
    <div className={style.container}>
      <ul className={style.tracksList}>
        {tracks.map(track => <TrackItem key={track.id} track={track} />)}
      </ul>
    </div>
  )
}

export default AudioPlayer