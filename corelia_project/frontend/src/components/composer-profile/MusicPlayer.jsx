import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import { FaPlay, FaPause } from "react-icons/fa";
import musicNote from "../../../static/images/music-note.png";

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
        height: 12px;
        width: 19px;
        border-radius: 50%;
        background: #6d94dc;
        cursor: pointer;
        margin-top: -4px;
        transform: rotate(-8deg);
    }

    &::-moz-range-thumb {
        -webkit-appearance: none;
        background: black;
        height: 10px;
        width: 16px;
        border-radius: 50%;
        background: ${stylingConstants.colours.blue2};
        cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: ${stylingConstants.colours.blue2Percent30};
        border-radius: 1.2em;
    }

    &::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: ${stylingConstants.colours.blue2Percent30};
        border-radius: 1.2em;
    }

    &::-ms-track {
        width: 100%;
        height: 5px;
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

const StyledFaPlay = styled(FaPlay)`
    color: ${stylingConstants.colours.blue2Percent30};
    cursor: pointer;
    margin-left: 30px;
`;

const StyledFaPause = styled(FaPause)`
    color: ${stylingConstants.colours.blue2Percent30};
    cursor: pointer;
    margin-left: 30px;
`;

const Container = styled.div`
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
    position: relative;
`;

const Img = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    left: -30px;
    bottom: -10px;
    z-index: -1;
`;

const MusicPlayer = ({ song }) => {
    const audioRef = useRef();
    const progressRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

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
            // On page load, set progress of playback to 0.
            progressRef.current.value = 0;
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
        setIsPlaying(true);
        audioRef.current.play();
    }

    function pause() {
        setIsPlaying(false);
        audioRef.current.pause();
    }

    let playOrPauseButton;
    if (isPlaying) {
        playOrPauseButton = <StyledFaPause onClick={pause} />;
    } else {
        playOrPauseButton = <StyledFaPlay onClick={play} />;
    }

    return (
        <Container>
            <audio ref={audioRef} src={song} />
            <Img src={musicNote} />
            {playOrPauseButton}
            <RangeInput ref={progressRef} type="range" />
        </Container>
    );
};

export default MusicPlayer;
