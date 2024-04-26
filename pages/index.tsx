import {GetStaticProps} from "next";
import "./index.css"
import {useEffect, useRef, useState} from "react";
import {generateBalls, LyricFormat, lyricList} from "@/datas";

const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

    //audio
    useEffect(() => {
        const audio = new Audio("/bgMusic.mp3")
        setAudio(audio)
    }, [])

    return <div className={"audioButton"}>
        {
            !isPlaying ?
                <img className={"audioButton"} src={"/play.svg"} alt={"pause"} onClick={() => {
                    audio?.play()
                    setIsPlaying(true)
                }}/> :
                <img className={"audioButton" + " " + "playingButton"} src={"/pause.svg"} alt={"pause"}
                     onClick={() => {
                         audio?.pause()
                         setIsPlaying(false)
                     }}/>
        }
    </div>
}

const InitView = ({onClick}: {
    onClick: () => void
}) => {
    return <div className={"initView"}>
        温馨提醒：佩戴耳机并点击右上角音乐播放可获得最佳体验哦😊
        <button className={"startButton"}
                onClick={onClick}>准备好了，我们开始吧！</button>
    </div>
}

const ImageBackGround = ({delay, duration}: {
    delay: number,
    duration: number
}) => {
    const balls = generateBalls()

    return <div style={{
        animationDelay: delay + "s",
        animationDuration: duration + "s",
        position: "absolute",
        zIndex: -1,
    }}>
        {
            balls.map((ball, index) => {
                return <div className={"ball"} key={index}
                            style={{
                                left: ball.x * 80 + "vw",
                                top: ball.y * 80 + "vh",
                                width: ball.r + "vw",
                                height: ball.r + "vw",
                                backgroundColor: ball.color,
                                animationDelay: ball.delay + "s" + delay,
                                borderRadius: ball.r + "vw",
                                opacity: 0,
                                animationDuration: "3s",
                                position: "absolute"
                            }}/>
            })
        }
    </div>
}


const Index = () => {
    const [start, setStart] = useState<boolean>(false)
    const delay = useRef(0)

    return (
        <div className={"container"}>

            <MusicButton/>
            {
                !start ? <InitView onClick={() => {
                        setStart(true)
                    }}/> :
                    <div className={"itemContainer"}>
                        {
                            lyricList.map((lyric: LyricFormat, index: number) => {
                                delay.current += lyric.time
                                if (lyric.forward) {
                                    delay.current -= lyric.forward
                                }
                                return <div className={"item" + " " + lyric.type} key={index} style={{
                                    animationDelay: delay.current - Number(lyric.time) + "s",
                                    animationDuration: lyric.time + "s",
                                }}>{lyric.type !== "img" ? lyric.text : <>
                                    <ImageBackGround delay={delay.current - Number(lyric.time)}
                                                     duration={lyric.time + 2}/>
                                    <img src={lyric.text} alt={"png"}/>
                                </>}
                                </div>

                            })
                        }
                    </div>

            }

        </div>
    );

};

export default Index