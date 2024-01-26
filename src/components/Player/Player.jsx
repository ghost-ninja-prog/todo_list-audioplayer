import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdSkipNext, MdSkipPrevious, MdOutlinePause, MdPlayArrow } from "react-icons/md";
import { IconContext } from 'react-icons'

import { pause, clickPlay } from '../../store/audioPlayerSlice'

import style from './player.module.css'

const Player = () => {

    //state
    const { currentTrack, isPlaying } = useSelector(state => state.audio)

    //references
    const audio = useRef()
    
    const dispatch = useDispatch()


    const clickPlayBtn = () => {
        if(!isPlaying) {
            dispatch(clickPlay())
            audio.current.play()

        } else {
            dispatch(pause())
            audio.current.pause()
        }
    }

    useEffect(() => {
        if(!isPlaying) {
            audio.current.pause()
        } else if(isPlaying) {
            audio.current.play()
        }
    }, [isPlaying, currentTrack])

    return (
        <div className={style.wrapper}>
            <audio
                ref={audio}
                src={currentTrack.src}
                preload='true'
            />
            <div className={style.playerBox}>
                {/* <IconContext.Provider value={{size: '32px'}} > */}
                    <button
                        className={style.btnPlay}
                        onClick={clickPlayBtn}
                        >
                        { isPlaying ? <MdOutlinePause /> : <MdPlayArrow />}
                    </button>
                {/* </IconContext.Provider> */}
                <button className={style.btn}>
                    <MdSkipPrevious />                   
                </button>
                <button className={style.btn}>
                    <MdSkipNext/>
                </button>
                <div className={style.preview}>
                    <img src={currentTrack.preview} alt='artist' />
                </div>
                <div className={style.playerBoxDesc}>
                    <h3 className={style.title}>{currentTrack.title}</h3>
                    <h5 className={style.artists}>{currentTrack.artists}</h5>
                </div>
            </div>
        </div>
    )
}

export default Player