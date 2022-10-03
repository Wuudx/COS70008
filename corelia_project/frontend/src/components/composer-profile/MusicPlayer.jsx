import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";

// They only want a 30 second snippet of the track, not the whole thing.
const TRACK_SNIPPET_TIME = 30;

const RangeInput = styled.input.attrs({ type: "range" })`
    margin-bottom: 0.5em;

    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    &::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: black;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${stylingConstants.colours.blue2};
        cursor: pointer;
        margin-top: -4px;
    }

    &::-moz-range-thumb {
        -webkit-appearance: none;
        background: black;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${stylingConstants.colours.blue2};
        cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: ${stylingConstants.colours.blue2Percent30};
        border-radius: 1.3px;
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: ${stylingConstants.colours.blue2Percent30};
        border-radius: 1.3px;
    }

    &::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }

    &::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &:focus::-ms-fill-lower {
        background: #3071a9;
    }

    &::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }

    &:focus::-ms-fill-upper {
        background: #367ebd;
    }
`;

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

    return (
        <>
            <audio ref={audioRef} src={song}></audio>
            <RangeInput ref={progressRef} type="range" />
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </>
    );
};

export default MusicPlayer;
