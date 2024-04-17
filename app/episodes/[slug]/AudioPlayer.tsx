"use client"

import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = ({ src }: { src: string }) => {
    return <Player
        src={src}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        style={{ borderRadius: "20px" }}
        layout='horizontal'
    />
}

export default AudioPlayer