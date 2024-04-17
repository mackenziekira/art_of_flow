export type Episode = {
    slug: string
    number: number
    interviewee: string
    title: string
    description: string,
    image: string
    audio: string
}

export const EPISODES: Record<string, Episode> = {
    "1-lane-lillaquist": {
        slug: "1-lane-lillaquist",
        number: 1,
        interviewee: "Lane Lillaquist",
        title: "Dolores Flow with Lane Lillaquist",
        description: "Lane Lillaquist is on a mission to document and share flow arts. He is the founder of Dolores Flow, a weekly flow jam in Dolores Park, San Francisco. Poi is his favorite prop, and when not spinning things, he can be found with a camera in his hands. To see pictures and videos of Lane spinning and his photography, follow him on Instagram @lillq\n\nListen to Dolores Flow, and hear from Lane how to foster community through spin jams, optimize your learning, and his own personal flow journey.",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 1 DoloFlow with Lane Lillaquist Widescreen.jpg",
        audio: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 1- Dolores Flow with Lane Lillaquist.mp3"
    },
    "2-dyami-kaplan": {
        slug: "2-dyami-kaplan",
        number: 2,
        interviewee: "Dyami Kaplan",
        title: "Grow Flow with Dyami Kaplan",
        description: "Hear from Dyami Tivon Kaplan, about growing the flow arts, teaching, and the change in accessibility to flow arts and fire dancing with the rise of technology.\n\nLike many people, the flow arts for Dyami have become a method through which to learn, and a lens of understanding though which to view the world around us. Dyami's most current flow art today is in practicing massage. For Dyami, massage, flow arts, and dance and are all interrelated expressions of each other and are all extensions of the body and the self.\n\nConnect with Dyami online at:\n\nhttps://www.youtube.com/dyamikaplan\nhttps://www.instagram.com/dyamitk/",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep+2+Grow+Flow+with+Dyami+Kaplan.png",
        audio: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 2- GrowFlow with Dyami Kaplan.mp3"
    }
}