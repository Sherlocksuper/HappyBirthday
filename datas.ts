import exp from "constants";

export interface LyricFormat {
    forward?: number;
    time: number;
    text: string;
    type: string;
}

export const lyricList: LyricFormat[] = [

    {
        type: "greeting",
        text: "你好啊 XX",
        time: 4
    },
    {
        type: "greetingText",
        text: "很庆幸能在最美丽的年华遇见最美丽的你",
        forward: 3,
        time: 3
    },
    {
        type: "text1",
        time: 3,
        text: "今天是你的生日啊!!! :D"
    },

    {
        type: "textInChatBox",
        time: 8,
        text: "非常非常非常诚挚的祝你生日快乐，很多很多的快乐！！"
    },
    {
        type: "text2",
        time: 3,
        text: "我想给你一个惊喜"
    },
    {
        type: "text3",
        time: 3,
        text: "我认真的想了很久"
    },
    {
        type: "text4",
        time: 4,
        text: "我认识到，我想要做一些"
    },
    {
        type: "text4Adjective",
        forward: 3,
        time: 3,
        text: "特殊的事情"
    },
    {
        type: "text5Entry",
        time: 3,
        text: "因为，"
    },
    {
        type: "text5Content",
        time: 4,
        text: "你对于我来说，很特殊"
    },
    {
        type: "smiley",
        forward: 3,
        time: 3,
        text: ":)"
    },
    {
        type: "bigTextPart1",
        time: 2,
        text: "所"
    },
    {
        type: "bigTextPart2",
        forward: 2,
        time: 2,
        text: "以"
    },
    {
        type: "img",
        time: 16,
        text: "/lydia2.png"
    },
    {
        type: "wishHeading",
        forward: 14,
        time: 14,
        text: "生日快乐啊!"
    },
    {
        type: "wishText",
        text: "朱颜长似，头上花枝，岁岁年年。愿君青丝不老，岁岁皆欢。",
        forward: 14,
        time: 14
    },

    {
        type: "outroText",
        time: 10,
        text: "我希望你喜欢这个小小的惊喜!"
    },
    {
        type: "replayText",
        time: 10,
        forward: 10,
        text: "如果你喜欢的话，可以再看一次哦!或者……"
    },
    {
        type: "outroSmiley",
        time: 10,
        forward: 10,
        text: ":)"
    }
]

export interface BallFormat {
    x: number;
    y: number;
    r: number;
    delay: number;
    color: string;
}


export function generateBalls() {
    const balls: BallFormat[] = [];
    for (let i = 0; i < 14; i++) {
        const ball: BallFormat = {
            x: Math.random(),
            y: Math.random(),
            r: 5,
            delay: Math.floor(Math.random() * 7) + 1,
            color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), // Generate a random color
        };
        balls.push(ball);
    }
    return balls;
}