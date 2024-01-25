import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import style from './player.module.css'

const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const { currentTrack, tracks, currentTrackIndex } = useSelector(state => state.audio)
    const { artists, duration, id, preview, src, title } = currentTrack

    console.log(src)


    const audio = useRef()


    const clickPlay = () => {
        !isPlaying ? audio.current.play() : audio.current.pause()
        setIsPlaying(!isPlaying)
    }

    return (
        <div className={style.wrapper}>
            <audio
                ref={audio}
                src={currentTrack.src}
                preload='true'
            />
            <div className={style.playerBox}>
                <button
                    className={style.btnPlay}
                    onClick={clickPlay}
                >
                    &#9658;
                </button>
                <div className={style.preview}>
                    <img src={preview} alt='artist' />
                </div>
                <div className={style.playerBoxDesc}>
                    <div className={style.boxDescTime}>
                        <div>
                            <h3 className={style.title}>{title}</h3>
                            <h5 className={style.artists}>{artists}</h5>
                        </div>
                        <div className={style.time}>{duration}</div>
                    </div>
                    <div className={style.progressBar}></div>
                </div>
            </div>
        </div>
    )
}

export default Player