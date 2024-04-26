import {Simulate} from "react-dom/test-utils";
import {AudioHTMLAttributes} from "react";

export const useAudio = () => {
    const audio = new Audio(process.env.URL + "/bgMusic.png")


    const isPlaying = () => {
        return audio.played
    }

    const isPaused = () => {
        return audio.paused
    }

    const switchAudio = () => {
        if (isPlaying()) {
            audio.pause()
        } else {
            audio.play()
        }
    }


    return {
        isPaused,
        isPlaying,
        switchAudio
    }
}