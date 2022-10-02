import React, { useEffect, useRef, useState } from "react";

// They only want a 30 second snippet of the track, not the whole thing.
const TRACK_SNIPPET_TIME = 30;

const MusicPlayer = ({ song }) => {
    const audioRef = useRef();
    const progressRef = useRef();

    function updateProgressBar() {
        const currentPlaybackTime = audioRef.current.currentTime;
        const percentageCompleted =
            (currentPlaybackTime / TRACK_SNIPPET_TIME) * 100;
        progressRef.current.value = percentageCompleted;
    }

    function checkThirtySecondsComplete() {
        const currentPlaybackTime = audioRef.current.currentTime;
        if (currentPlaybackTime >= 30) {
            audioRef.current.currentTime = 0;
            progressRef.current.value = 0;
        }
    }

    function handleUserDragProgressBar() {
        pause();
        const newPercentageComplete = progressRef.current.value / 100;
        const newCurrentTime = TRACK_SNIPPET_TIME * newPercentageComplete;
        audioRef.current.currentTime = newCurrentTime;
    }

    useEffect(() => {
        if (audioRef && audioRef.current) {
            audioRef.current.addEventListener("timeupdate", updateProgressBar);
            audioRef.current.addEventListener(
                "timeupdate",
                checkThirtySecondsComplete
            );
        }

        if (progressRef && progressRef.current) {
            progressRef.current.addEventListener(
                "change",
                handleUserDragProgressBar
            );
        }

        return () => {
            audioRef.current.removeEventListener(
                "timeupdate",
                updateProgressBar
            );
            progressRef.current.removeEventListener(
                "change",
                handleUserDragProgressBar
            );
        };
    }, []);

    function play() {
        audioRef.current.play();
    }

    function pause() {
        audioRef.current.pause();
    }

    function incrementVolume() {
        audioRef.current.volume += 0.1;
    }

    function decrementVolume() {
        audioRef.current.volume -= 0.1;
    }

    return (
        <>
            <audio ref={audioRef} src={song}></audio>
            <input ref={progressRef} type="range" />
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={incrementVolume}>Vol +</button>
            <button onClick={decrementVolume}>Vol -</button>
        </>
    );
};

export default MusicPlayer;
