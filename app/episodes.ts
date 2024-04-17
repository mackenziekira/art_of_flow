export type Episode = {
    slug: string
    episodeNumber: number
    date: string
    title: string
    shortTitle: string
    description: string,
    audioSrc: string
    intervieweeName: string
    image: string
}


export const EPISODES: Record<string, Episode> = {
    "1-lane-lillaquist": {
        slug: "1-lane-lillaquist",
        episodeNumber: 1,
        date: "2024-04-17",
        title: "Dolores Flow with Lane Lillaquist",
        shortTitle: "Dolores Flow",
        description: "Lane Lillaquist is on a mission to document and share flow arts. He is the founder of Dolores Flow, a weekly flow jam in Dolores Park, San Francisco. Poi is his favorite prop, and when not spinning things, he can be found with a camera in his hands. To see pictures and videos of Lane spinning and his photography, follow him on Instagram @lillq\n\nListen to Dolores Flow, and hear from Lane how to foster community through spin jams, optimize your learning, and his own personal flow journey.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 1- Dolores Flow with Lane Lillaquist.mp3",
        intervieweeName: "Lane Lillaquist",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 1 DoloFlow with Lane Lillaquist Widescreen.jpg",
    },
    "2-dyami-kaplan": {
        slug: "2-dyami-kaplan",
        episodeNumber: 2,
        date: "2024-04-17",
        title: "Grow Flow with Dyami Kaplan",
        shortTitle: "Grow Flow",
        description: "Hear from Dyami Tivon Kaplan, about growing the flow arts, teaching, and the change in accessibility to flow arts and fire dancing with the rise of technology.\n\nLike many people, the flow arts for Dyami have become a method through which to learn, and a lens of understanding though which to view the world around us. Dyami's most current flow art today is in practicing massage. For Dyami, massage, flow arts, and dance and are all interrelated expressions of each other and are all extensions of the body and the self.\n\nConnect with Dyami online at:\n\nhttps://www.youtube.com/dyamikaplan\nhttps://www.instagram.com/dyamitk/",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 2- GrowFlow with Dyami Kaplan.mp3",
        intervieweeName: "Dyami Kaplan",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 2 Grow Flow with Dyami Kaplan Widescreen.png",
    },
    "3-duncan-roy-greenwood": {
        slug: "3-duncan-roy-greenwood",
        episodeNumber: 3,
        date: "2024-04-17",
        title: "Learning Through Evolution with Duncan Roy Greenwood",
        shortTitle: "Learning Through Evolution",
        description: "Join our conversation on prop construction, the flow state and hypofrontality, evolution through play, and philosophies on spreading the flow arts as I chat with Duncan Roy Greenwood. Duncan is a flow artist from Cape Town, South Africa, on a mission to promote and spread flow. He created Flow Arts Commune AfrikaBurn, the South Africa equivalent of Fire Conclave at Burning Man Festival in the United States of America. He is the founder of Flow DNA, an online flow arts prop retail shop. You can flow toys from Flow DNA on Etsy if you live outside of South Africa. An experienced animator, he recently created one for Flowtoys which you can watch here.\n\nFind more of Duncan on his Instagram or Youtube.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 3- Learning Through Play.mp3",
        intervieweeName: "Duncan Roy Greenwood",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 3 Evolution through Play with Duncan Roy Greenwood cover image.png",
    },
    "4-rion-fish": {
        slug: "4-rion-fish",
        episodeNumber: 4,
        date: "2024-04-17",
        title: "Buggeng is my Thang with Rion Fish",
        shortTitle: "Buggeng is my Thang",
        description: "In this episode Rion Fish chats with us about the history and evolution of buggeng, reveals why buggeng is his thang, recounts the experience of a video going viral and the impact on performing, takes apart teaching philosophies, and shares tips on how to deal with the negative voices in your head.\nRion is a flow artist, storyteller and variety performer specializing in buggeng, prop dance, balloons, and clowning. He has taught workshops at Flow festivals ranging from New England Flow Festival, Manipulation, FireDrums. Pacific Fire Gathering, and more. He was the Shin/leader of Ministry of Flow Fire Conclave in 2018, organizes local flow showcases, and, “is a fish about town.”\nFind him on:\nFacebook: @RionFish\nInstagram: @FishShapes\nYoutube: Rion Fish\nOr on his website!\nOG Photography in this episode’s artwork by Dresden Blue",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 4 -Buggeng is my Thang.mp3",
        intervieweeName: "Rion Fish",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 4 Buggeng is my Thang with Rion Fish Widescreen.png",
    },
}