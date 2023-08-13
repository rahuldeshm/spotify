import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Player.module.css";
import DataContext from "../store/data-context";
import { AiFillSound } from "react-icons/ai";
import {
  BsThreeDots,
  BsFillFastForwardFill,
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsVolumeMuteFill,
} from "react-icons/bs";

function Player({ url }) {
  const ctx = useContext(DataContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const { activeSong } = ctx;
  useEffect(() => {
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
  }, [activeSong]);
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlaying(false);
    }
  };
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
  };
  const forwordHandler = () => {
    if (ctx.songs.length - 1 < ctx.activeSong.index + 1) {
      ctx.setActiveS(ctx.songs[0]);
    } else {
      ctx.setActiveS(ctx.songs[ctx.activeSong.index + 1]);
    }
  };
  const backwordHandler = () => {
    if (ctx.activeSong.index === 0) {
      ctx.setActiveS(ctx.songs[ctx.songs.length - 1]);
    } else {
      ctx.setActiveS(ctx.songs[ctx.activeSong.index - 1]);
    }
  };
  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };
  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className={classes.player}>
      <audio ref={audioRef} src={url} onTimeUpdate={handleTimeUpdate} />
      <div className={classes.controls}>
        <input
          type="range"
          min="0"
          max={audioRef.current ? audioRef.current.duration : 0}
          value={currentTime}
          onChange={handleSeek}
        />
        <div className={classes.btns}>
          <button className={classes.sbtn}>
            <BsThreeDots size={20} />
          </button>
          <button onClick={backwordHandler}>
            <BsFillFastForwardFill style={{ rotate: "180deg" }} size={30} />
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <BsFillPauseCircleFill size={30} />
            ) : (
              <BsFillPlayCircleFill size={30} />
            )}
          </button>
          <button onClick={forwordHandler}>
            <BsFillFastForwardFill size={30} />
          </button>
          <button onClick={toggleMute} className={classes.sbtn}>
            {isMuted ? (
              <BsVolumeMuteFill size={20} />
            ) : (
              <AiFillSound size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
