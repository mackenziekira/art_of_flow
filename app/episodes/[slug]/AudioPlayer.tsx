"use client"

import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = ({ src }: { src: string }) => {
    return <Player
        src={src}
        customAdditionalControls={[]}
        style={{ borderRadius: "20px" }}
    />
}

export default AudioPlayer