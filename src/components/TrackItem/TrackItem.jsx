import React, { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

import style from './TrackItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { pause, clickPlay, play } from '../../store/audioPlayerSlice'

const TrackItem = ({ track }) => {
    
    const dispatch = useDispatch()
    
    //state
    const { isPlaying, currentTrackId} = useSelector(state => state.audio)
    const [currentTime, setCurrentTime] = useState(0)

    //references
    // const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnedMinutes}:${returnedSeconds}`
    }


    // const changePlayerCurrentTime = () => {
    //     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / track.duration * 100}%`)
    //     setCurrentTime(progressBar.current.value)
    // }

    // const changeRange = () => {
    //     audioPlayer.current.currentTime = progressBar.current.value
    //     changePlayerCurrentTime()
    // }

    // const whilePlaying = () => {
    //     progressBar.current.value = audioPlayer.current.currentTime
    //     changePlayerCurrentTime()
    //     animationRef.current = requestAnimationFrame(whilePlaying)
    // }

    // const changeRange = () => {
    //     audioPlayer.current.currentTime = progressBar.current.value
    //     setCurrentTime(progressBar.current.value)
    //     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / track.duration * 100}%`)
    // }

    // const animationProgressBar = () => {
    //     setCurrentTime(audioPlayer.current.currentTime)
    //     progressBar.current.value = audioPlayer.current.currentTime
    //     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / track.duration * 100}%`)
    // }

    const clickBtnListItem = () => {
        if(!isPlaying && currentTrackId !== track.id) {
            dispatch(play(track.id))
        } else if( !isPlaying && currentTrackId === track.id ){
            dispatch(clickPlay())
        } else if( isPlaying && currentTrackId === track.id ){
            dispatch(pause())
        } else if( isPlaying && currentTrackId !== track.id ) {
            dispatch(play(track.id))
        }
    }


  return (
    <li className={style.trackItem}>
        <button 
            className={style.btn}
            onClick={clickBtnListItem}
        >
            { (isPlaying && currentTrackId === track.id) ? <FaPause /> : <FaPlay className={style.btnPlay} />}
        </button>
        <div className={style.preview}>
            <img src={track.preview} alt=''/>
        </div>
        <span className={style.trackTime}>{ calculateTime(currentTime) }</span>
        <div className={style.titleTrackBox}>
            <span className={style.titleTrack}>{ track.title }</span>
            <span className={style.titleArtist}>{ track.artists }</span>
        </div>
        <div>
            <input
                className={style.progressBar} 
                type='range'
                max={track.duration}
                defaultValue={0}
                ref={progressBar}
                // onChange={changeRange}
            />
        </div>
        <span className={style.trackTime}>{ calculateTime(track.duration) }</span>
    </li>
  )
}

export default TrackItem