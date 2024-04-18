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
        description: "Lane Lillaquist is on a mission to document and share flow arts. He is the founder of Dolores Flow, a weekly flow jam in Dolores Park, San Francisco. Poi is his favorite prop, and when not spinning things, he can be found with a camera in his hands. To see pictures and videos of Lane spinning and his photography, follow him on Instagram <a href='https://www.instagram.com/lillq' target='_blank'>@lillq</a>\n\nListen to Dolores Flow, and hear from Lane how to foster community through spin jams, optimize your learning, and his own personal flow journey.",
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
        description: "Hear from Dyami Tivon Kaplan, about growing the flow arts, teaching, and the change in accessibility to flow arts and fire dancing with the rise of technology.\n\nLike many people, the flow arts for Dyami have become a method through which to learn, and a lens of understanding though which to view the world around us. Dyami's most current flow art today is in practicing massage. For Dyami, massage, flow arts, and dance and are all interrelated expressions of each other and are all extensions of the body and the self.\n\nConnect with Dyami online at:\n\n<a href='https://www.youtube.com/dyamikaplan' target='_blank'>https://www.youtube.com/dyamikaplan</a>\n<a href='https://www.instagram.com/dyamitk/' target='_blank'>https://www.instagram.com/dyamitk</a>",
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
        description: "Join our conversation on prop construction, the flow state and hypofrontality, evolution through play, and philosophies on spreading the flow arts as I chat with <a href='https://www.facebook.com/duncanroygreenwoodarts/' target='_blank'>Duncan Roy Greenwood</a>. Duncan is a flow artist from Cape Town, South Africa, on a mission to promote and spread flow. He created Flow Arts Commune <a href='https://www.facebook.com/FlowArtsCommuneAfrikaBurn/' target='_blank'>AfrikaBurn</a>, the South Africa equivalent of Fire Conclave at <a href='https://burningman.org/event/brc/' target='_blank'>Burning Man Festival</a> in the United States of America. He is the founder of <a href='https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.flowdna.co.za%2F%3Ffbclid%3DIwAR04_pdd-EGXRnmW_xRyHBD3ZENw9OWHJaYeMW8rBELbSZD1jwcu35HlkoE&h=AT0jT-EXwSBm1iKktjD_bWfLjE5uiGnpKUKM5NvkBK58I9uW1V-fm2C7aAaO-ZitFbfTGAfrOc5Yun8FmRyVyyhNBZLUKOltYcJJ_fSPPX9wveYTJU59H0-eaC6AY6xabIg' target='_blank'>Flow DNA</a>, an online flow arts prop retail shop. You can flow toys from Flow DNA on <a href='https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.etsy.com%2Fshop%2FFlowDNA%3Ffbclid%3DIwAR2AMYJOdXczwr10hOr76ck7cBO7JoLQ45y_qqu480LJLL806utfo0NMMjA&h=AT0jT-EXwSBm1iKktjD_bWfLjE5uiGnpKUKM5NvkBK58I9uW1V-fm2C7aAaO-ZitFbfTGAfrOc5Yun8FmRyVyyhNBZLUKOltYcJJ_fSPPX9wveYTJU59H0-eaC6AY6xabIg' target='_blank'>Etsy</a> if you live outside of South Africa. An experienced animator, he recently created one for Flowtoys which you can watch <a href='https://www.youtube.com/watch?v=yvM-kWdDgNs' target='_blank'>here</a>.\n\nFind more of Duncan on his <a href='https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.instagram.com%2Fflowdna_arts%3Ffbclid%3DIwAR1UO5JfO3DAVNJUmnX-SrjHNqLcUviyiOMv2bN0StCwwD-WTn0ZLK4Vbp4&h=AT0jT-EXwSBm1iKktjD_bWfLjE5uiGnpKUKM5NvkBK58I9uW1V-fm2C7aAaO-ZitFbfTGAfrOc5Yun8FmRyVyyhNBZLUKOltYcJJ_fSPPX9wveYTJU59H0-eaC6AY6xabIg' target='_blank'>Instagram</a> or <a href='https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.youtube.com%2Fflowdna%3Ffbclid%3DIwAR0RIAcL9W0-V21zCV1yveCBHOeQe2HF2W-h2WyPB6P-jXJggX8685uwh48&h=AT0jT-EXwSBm1iKktjD_bWfLjE5uiGnpKUKM5NvkBK58I9uW1V-fm2C7aAaO-ZitFbfTGAfrOc5Yun8FmRyVyyhNBZLUKOltYcJJ_fSPPX9wveYTJU59H0-eaC6AY6xabIg' target='_blank'>Youtube</a>.",
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
        description: "In this episode Rion Fish chats with us about the history and evolution of buggeng, reveals why buggeng is his thang, recounts the experience of a video going viral and the impact on performing, takes apart teaching philosophies, and shares tips on how to deal with the negative voices in your head.\nRion is a flow artist, storyteller and variety performer specializing in buggeng, prop dance, balloons, and clowning. He has taught workshops at Flow festivals ranging from New England Flow Festival, Manipulation, FireDrums. Pacific Fire Gathering, and more. He was the Shin/leader of Ministry of Flow Fire Conclave in 2018, organizes local flow showcases, and, “is a fish about town.”\nFind him on:\nFacebook: <a href='https://www.facebook.com/pg/RionFish' target='_blank'>@RionFish</a>\nInstagram: <a href='https://www.instagram.com/fishshapes/' target='_blank'>@FishShapes</a>\nYoutube: <a href='https://www.youtube.com/c/rionfish' target='_blank'>Rion Fish</a>\nOr on his <a href='http://www.rionfish.com/' target='_blank'>website</a>!\nOG Photography in this episode’s artwork by <a href='https://www.facebook.com/dresdenbluefire/' target='_blank'>Dresden Blue</a>",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 4 -Buggeng is my Thang.mp3",
        intervieweeName: "Rion Fish",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 4 Buggeng is my Thang with Rion Fish Widescreen.png",
    },
    "5-tani-olhinoski": {
        slug: "5-tani-olhinoski",
        episodeNumber: 5,
        date: "2024-04-17",
        title: "Self Development with Tani Olhinoski",
        shortTitle: "Self Development",
        description: "Tani Olhinoski is the founder of the <a href='https://www.facebook.com/thenexuscenterSF/' target='_blank'>Nexus Center</a> in San Francisco, a space for conscious connection and movement exploration. She spins dragon staff, contact staff, fans and on occasion plushie fire darts. From a business background, with experience in the tech sector she delves into her dream to facilitate others journey of self-development, her own experiences at Burning Man, what it's like to start your own business from scratch, her approach to learning, and musings on art.\n\nFind more of Tani on:\nInstagram at <a href='https://www.instagram.com/deivogel' target='_blank'>https://www.instagram.com/deivogel</a>\nFacebook at <a href='https://www.facebook.com/inattani' target='_blank'>https://www.facebook.com/inattani</a>",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 5- Self Development.mp3",
        intervieweeName: "Tani Olhinoski",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 5 Self Development with Tani Widescreen.jpg",
    },
    "6-ronan-mcloughlin": {
        slug: "6-ronan-mcloughlin",
        episodeNumber: 6,
        date: "2024-04-17",
        title: "Awareness with Ronan McLoughlin",
        shortTitle: "Awareness",
        description: "Ronan McLoughlin is an innovative poi spinner who travels the world teaching and performing, is the originator of contact poi, has spoken on TEDx about Learning to Learn, and approaches the art from a love of learning optimization. Jump into a conversation with Ronan that explores the topic of awareness, going back to basics, his personal examinations of motivation for spinning and a frank look at the stories we create of others expectations.\n\nYou can find more of Ronan on:\nInstagram - <a href='https://www.instagram.com/Ronanmcpoi' target='_blank'>https://www.instagram.com/Ronanmcpoi</a>\nTedX - <a href='https://www.youtube.com/watch?v=LYlRIbOnhos' target='_blank'>https://www.youtube.com/watch?v=LYlRIbOnhos</a>\nFacebook - <a href='https://www.facebook.com/ronopotamus' target='_blank'>https://www.facebook.com/ronopotamus</a>\n\nCheck out <a href='http://www.TaoSteam.com' target='_blank'>www.TaoSteam.com</a> for tutorials on Tàijí (Taichi) one of the many projects Ronan is currently involved in!",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 6 -Awareness with Ronan.mp3",
        intervieweeName: "Ronan McLoughlin",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 6 Awareness with Ronan Widescreen.jpg",
    },
    "7-tyfoods": {
        slug: "7-tyfoods",
        episodeNumber: 7,
        date: "2024-04-17",
        title: "Prop Dance Culture with Ty",
        shortTitle: "Prop Dance Culture",
        description: "Tyfoods is a Hip-Hop Poi Dancer, Movement Enthusiast and Neuroscience Graduate. He has been spinning poi for 6 years, and dancing for 3 years. In that time, he has developed a systematic approach that focuses on \"how to learn tricks/ movements\" rather than on the tricks/movements themselves. In an attempt to both share this systematic approach and create the ultimate resource for all movement artists he co-founded <a href='https://www.propdanceculture.com/' target='_blank'>Prop Dance Culture</a>!\n\nProp Dance Culture is a platform that is dedicated to bringing ALL movement artists together so that key ideas may be shared, creativity stimulated and skill growth accelerated, BUT also is dedicated to giving these movement artists the tools they need to succeed! In addition to Prop Dance Culture, he has co-founded Living the Flow Life which is all about the psychological state of Flow. The state where you both feel your best and perform your best. Rather than discussing Flow academically, Living the Flow Life is all about the practical usage of Flow and how you can get into the Flow state more often. Living the Flow Life aims to spread awareness about the art of getting into Flow.\n\nFind him online at:\n<a href='www.propdanceculture.com' target='_blank'>www.propdanceculture.com</a>\n<a href='www.facebook.com/propdanceculture' target='_blank'>www.facebook.com/propdanceculture</a>\n<a href='www.facebook.com/tyfoods' target='_blank'>www.facebook.com/tyfoods</a>\n<a href='www.instagram.com/propdanceculture' target='_blank'>www.instagram.com/propdanceculture</a>\n<a href='>www.instagram.com/tyfoods' target='_blank'>www.instagram.com/tyfoods</a>",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 7 -Prop Dance Culture.mp3",
        intervieweeName: "Tyfoods",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 7 BLURRY- Prop Dance Culture with Ty Widescreen.png",
    },
    "8-richard-hartnell": {
        slug: "8-richard-hartnell",
        episodeNumber: 8,
        date: "2024-04-17",
        title: "Contact Ball with Richard Hartnell",
        shortTitle: "Contact Ball",
        description: "In this episode, Richard Hartnell discusses the history of contact ball, how he got into juggling, his involvement in the Bellingham Circus Guild, his thoughts on artivsm and learning.\n\nRichard is among the most distinguished American contact jugglers. He both teaches and performs along the West Coast of the United States and overseas at Indie stage to huge festivals. In 2008, he co-founded the <a href='http://bellinghamcircusguild.com/' target='_blank'>Bellingham Circus Guild</a> in Washington state, before moving to the Vulcan lofts, a collective of artists in San Fancisco East Bay in 2009. Today, he continues to perform on stages large and small and teach contact juggling to those interested in learning the magic of manipulation.\n\nFind him online at:\nInstagram - <a href='https://www.instagram.com/contactballer' target='_blank'>@contactballer</a>\nFacebook – <a href='http://www.facebook.com/velveteen' target='_blank'>Velveteen</a>\nProfessional Website- <a href='http://www.gravitydefiance.net/' target='_blank'>gravitydefiance.net</a>",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 8- Contact Ball with Richard Hartnell.mp3",
        intervieweeName: "Richard Hartnell",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 8 Contact Ball with Richard Widescreen.jpg",
    },
    "9-aileen-lawlor": {
        slug: "9-aileen-lawlor",
        episodeNumber: 9,
        date: "2024-04-17",
        title: "Creating Collaborative Flow with Aileen Lawlor",
        shortTitle: "Creating Collaborative Flow",
        description: "Aileen Lawlor a world class contact spinner and teacher, sat down to share with listeners of the Art of Flow how she got into firedancing, discuss her work in Nicaragua teaching flow arts to at-risk-youth, and discus how choreography is a pictorial representation/lens into bigger themes in her life. \n\nAileen discovered an enthusiasm toward the Flow and Spinning Arts after moving to San Francisco in 2004 and delving into the practice of poi, contact staff, and Flow-Wand. Her exploration with object manipulation encouraged her studies of dance & varied movement modalities. Blending technical proficiency and her personal style into her performance, she has established herself as a highly sought-after Contact Staff instructor and performer at countless festivals in the worldwide Flow Arts community. She has conducted workshops throughout the US and taught in Rome, France, Canada & the UK, New Zealand, has appeared in numerous instructional Flow Arts DVD’s, and for several years in Nicaragua as a volunteer sharing her knowledge of the fire & flow arts (in Spanish!) to vulnerable youth and circus artists throughout Central America. \n\nCheck out Aileen’s work at <a href='http://www.youtube.com/aileenbean' target='_blank'>http://www.youtube.com/aileenbean</a> and visit <a href='http://aileenlawlor.wix.com/lightbearer' target='_blank'>http://aileenlawlor.wix.com/lightbearer</a>.\n\nEpisode Music Credits:\nFavorite by Unknown\nDreamcatcher-Purple Planet Inspirational\nChronos\nQuarkstar\nSiobhan- Wake Up\nSunday- SDK",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 9 - Creating Collaborative Flow.mp3",
        intervieweeName: "Aileen Lawlor",
        image: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 9 Creating Collaborative Flow with Aileen Widescreen.png",
    },
}