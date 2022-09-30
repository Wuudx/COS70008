import React from "react";

const MusicPlayer = ({ song }) => {
    return <audio controls src={song}></audio>;
};

export default MusicPlayer;
