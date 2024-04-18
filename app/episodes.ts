export type Episode = {
    slug: string
    episodeNumber: number
    date: string
    title: string
    shortTitle: string
    description: string,
    audioSrc: string
    imageSrc: string
    intervieweeName: string
    links: Record<string, string>
}


export const EPISODES: Record<string, Episode> = {
    "1-lane-lillaquist": {
        slug: "1-lane-lillaquist",
        episodeNumber: 1,
        date: "2024-04-17",
        title: "Dolores Flow with Lane Lillaquist",
        shortTitle: "Dolores Flow",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 1- Dolores Flow with Lane Lillaquist.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 1 DoloFlow with Lane Lillaquist Widescreen.jpg",
        intervieweeName: "Lane Lillaquist",
        description: "Lane Lillaquist is on a mission to document and share flow arts. He is the founder of Dolores Flow, a weekly flow jam in Dolores Park, San Francisco. Poi is his favorite prop, and when not spinning things, he can be found with a camera in his hands. To see pictures and videos of Lane spinning and his photography, follow him on Instagram [[@lillq]]\n\nListen to Dolores Flow, and hear from Lane how to foster community through spin jams, optimize your learning, and his own personal flow journey.",
        links: {
            "@lillq": "https://www.instagram.com/lillq"
        }
    },
    "2-dyami-kaplan": {
        slug: "2-dyami-kaplan",
        episodeNumber: 2,
        date: "2024-04-17",
        title: "Grow Flow with Dyami Kaplan",
        shortTitle: "Grow Flow",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 2- GrowFlow with Dyami Kaplan.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 2 Grow Flow with Dyami Kaplan Widescreen.png",
        intervieweeName: "Dyami Kaplan",
        description: "Hear from Dyami Tivon Kaplan, about growing the flow arts, teaching, and the change in accessibility to flow arts and fire dancing with the rise of technology.\n\nLike many people, the flow arts for Dyami have become a method through which to learn, and a lens of understanding though which to view the world around us. Dyami's most current flow art today is in practicing massage. For Dyami, massage, flow arts, and dance and are all interrelated expressions of each other and are all extensions of the body and the self.\n\nConnect with Dyami online at:\n\n[[https://www.youtube.com/dyamikaplan]]\n[[https://www.instagram.com/dyamitk]]",
        links: {
            "https://www.youtube.com/dyamikaplan": "https://www.youtube.com/dyamikaplan",
            "https://www.instagram.com/dyamitk": "https://www.instagram.com/dyamitk"
        }
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 3 Evolution through Play with Duncan Roy Greenwood cover image.png",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 4 Buggeng is my Thang with Rion Fish Widescreen.png",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 5 Self Development with Tani Widescreen.jpg",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 6 Awareness with Ronan Widescreen.jpg",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 7 BLURRY- Prop Dance Culture with Ty Widescreen.png",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 8 Contact Ball with Richard Widescreen.jpg",
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
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 9 Creating Collaborative Flow with Aileen Widescreen.png",
    },
    "10-troy-grisa": {
        slug: "10-troy-grisa",
        episodeNumber: 10,
        date: "2024-04-17",
        title: "Performance with Troy Grisa",
        shortTitle: "Performance",
        description: "In this episode, listen to a conversation with Troy Grisa, a flow arts fanatic currently living in Portland, Oregon. Troy picked up spinning poi in college and has been going ever since, learning one or two new props each year. He took his art-form to a professional level working as a performer for 3 years in Florida at various events ranging from weddings to luaus, to birthdays and community events. Troy was a high school teacher for 4 years during which he incorporated flow arts into his lesson breaks! Now, you can find him working on his flow arts poetry and crafting a new flow arts blog as he serves the community with involvement, passion, and gusto.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 10 - Performace with Troy Grisa.mp3",
        intervieweeName: "Troy Grisa",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 10 Performance with Troy Grisa Widescreen.jpg",
        links: {
            "FlowArtsCurator.com": "https://FlowArtsCurator.com",
            "Instagram": "https://www.instagram.com/troygrisa",
            "Facebook": "https://www.facebook.com/troy.grisa",
            "Youtube": "https://www.youtube.com/watch?v=exkvCBvPUAU"
        }
    },
    "11-xander-paris": {
        slug: "11-xander-paris",
        episodeNumber: 11,
        date: "2024-04-17",
        title: "Life’s Purpose with Xander Paris",
        shortTitle: "Life’s Purpose",
        description: "Xander Paris is a rope dartist, poi spinner, triple section staff wielding, nun-chuck ninja who is a community builder and teacher from San Francisco, currently based out of Portland, Oregon. Xander's life passion is martial flow and performance arts. He grew up involved in martial arts at a Muay Thai gym, took years of dance classes and theater which sparked his interest in movement, rhythm, and performance. After discovering the art-forms of flow and object manipulation he has dedicated time and energy into spreading the flow arts, and combining different elements of object manipulation with dance, martial arts, and movement.\n\nDiscover his viewpoints on the difference between a life passion and life calling, hear his flow story, what inspires him to perform, and about the development of a new fire-dancing art of fire-on-sand-manipulation in this FINAL episode of Season 1 of the Art of Flow.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 11 -Life_s Purpose with Xander Paris.mp3",
        intervieweeName: "Xander Paris",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 11 Life_s Purpose with Xander Paris Widescreen.png",
        links: {
            "Instagram": "/crouchingtigerhiddenxander",
            "Facebook": "/CrouchingTigerHiddenXander",
            "YouTube": "/XanderParis91"
        }
    },
    "12-drexfactor": {
        slug: "12-drexfactor",
        episodeNumber: 12,
        date: "2024-04-17",
        title: "What is Flow Arts? With DrexFactor",
        shortTitle: "What is Flow Arts?",
        description: "Ben 'Drex' Drexler is one of the most prolific and popular content creators in the flow arts. He is a world-renowned movement artist, dancer, and instructor who has spent the last 12 years teaching and performing the art of poi. His YouTube channel has more than six million views and more than 48,000 subscribers, and he has more than 20,000 followers on Instagram. He has taught at countless events on 3 continents, and his online tutorials have been a gateway for 10’s to 1000’s of people all over the world. He believes in the power of flow arts to improve fitness, build problem-solving skills, and as a tool for personal expression and hopes to bring the transformative power of flow to as wide an audience as possible. In the first part of a two-part interview, Drex discusses with us what the flow arts are, flow history, and how the community has changed over the years.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 12- What is Flow Arts with DrexFactor.mp3",
        intervieweeName: "DrexFactor",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 12 What is Flow Arts with DrexFactor Widescreen.jpg",
        links: {
            "DrexFactor Blog": "https://drexfactor.com/weirdscience",
            "DrexFactor YouTube Channel": "https://www.youtube.com/user/TaoAvatar20",
            "DrexFactor Instagram": "https://www.instagram.com/drexfactor/",
            "Favorite technical video project as mentioned in this interview": "https://www.youtube.com/watch?v=D3UGRGYfRf8"
        }
    },
    "13-drexfactor": {
        slug: "13-drexfactor",
        episodeNumber: 13,
        date: "2024-04-17",
        title: "Flow Cultural Identity with DrexFactor",
        shortTitle: "Flow Cultural Identity",
        description: "A continuation of our conversation with Ben Drexler 'DrexFactor', this episode includes discussions on how to discover our cultural identity as a flow community, some of DrexFactor's favorite artistic projects, and the story of how he became a prolific content creator.\n\nBen 'Drex' Drexler is one of the most popular content creators in the flow arts. He is a world-renowned movement artist, dancer, and instructor who has spent the last 12 years teaching and performing the art of poi. His YouTube channel has more than six million views and more than 48,000 subscribers, and he has more than 20,000 followers on Instagram. He has taught at countless events on 3 continents, and his online tutorials have been a gateway for 10’s to 1000’s of people all over the world.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 13 - Changes in Flow Community with DrexFactor.mp3",
        intervieweeName: "DrexFactor",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 13 Flow Cultural Identity with DrexFactor Widescreen Image.jpg",
        links: {
            "DrexFactor Blog": "https://drexfactor.com/weirdscience",
            "DrexFactor YouTube Channel": "https://www.youtube.com/user/TaoAvatar20",
            "DrexFactor Facebook": "https://www.facebook.com/drexfactorpoi/",
            "DrexFactor Instagram": "https://www.instagram.com/drexfactor/"
        }
    },
    "14-dresden-blue": {
        slug: "14-dresden-blue",
        episodeNumber: 14,
        date: "2024-04-17",
        title: "Telling Stories with Dresden Blue",
        shortTitle: "Telling Stories",
        description: "Dresden Blue has been spinning poi since 2003, specializing in tech poi with a unique and seamless dance style. She's taught workshops and classes internationally, judged competitions, and performed on stages from Burning Man to EDC Las Vegas. Join us for a conversation about how she got into flow arts, her journey with poi, and the power of telling stories through movement.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 14- Harm Reduction with Dresden Blue.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 14 Harm Reduction with Dresden Blue Widescreen image.png",
        intervieweeName: "Dresden Blue",
        links: {
            "Dresden Blue Instagram": "https://www.instagram.com/dresdenbluepoi/",
            "Dresden Blue Facebook": "https://www.facebook.com/dresdenbluepoi",
            "Dresden Blue YouTube": "https://www.youtube.com/dresdenblue"
        }
    },
    "16-jilly-bee": {
        slug: "16-jilly-bee",
        episodeNumber: 16,
        date: "2024-04-17",
        title: "Online Communities- Flow, Circus, and Artists Conversations on Community and Creativity with Jilly Bee",
        shortTitle: "Online Communities",
        description: "Delve into a conversation on the history of flow arts, as Jilly Bee shares about her time involved in community and discusses the shift to virtual communities, explores challenges facing the community as we grow in number, reflects on giving and receiving feedback, and provides her insights into individual’s changing relationships with poi and other props over the years.\n\nJilly Bee is a community architect, inspirer, and innovative thinker. She can be found by the fireside chatting about cultural dynamics, uplifting those in need and creating safe spaces so that anyone can have an opportunity to experience the flow arts movement.\n\nJilly has written ensemble performances for many different events and organizations, performed with fire conclave for Burning Man for 4 years and ascended to shin of this 50-person troupe, and performed everywhere from local art walks to The Queen Mary Oceanliner.  Jilly has hosted and led OC spin jams, organized smaller performance groups and numerous California flow events, and Jilly opened a flow dojo in Aliso Viejo for a year. Bee is an admin of Poi Chat, one of the largest flow-related groups on Facebook with over twenty-seven thousand members.  Her motivation to sustain that role is in seeing how the virtual community is growing and shaping the greater community at large.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 16- Virtual Communities-  Flow, Circus, and Artists Conversation on Community and Creativity with Jilly Bee.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 16 Online Community with Jilly Bee Widescreen.jpg",
        intervieweeName: "Jilly Bee",
        links: {
            "Facebook": "https://www.facebook.com/jillian.morris.94",
            "Instagram": "https://www.instagram.com/jilly.be111/"
        }
    },
    "17-creative-collaborations": {
        slug: "17-creative-collaborations",
        episodeNumber: 17,
        date: "2024-04-17",
        title: "Creative Collaborations with Brittney Isphording, Kevin LeVezu, and Veronica Stein",
        shortTitle: "Creative Collaborations",
        description: "When an artist from one background, such as movement arts, pairs up with an artist from another background such as body painting, and a third artist works to capture the collaboration via the art of photography what and how is the interacting art created? In this episode of the Art of Flow we are going to explore the collaborations that can occur with fire photography and the magic that can happen when multi-media artistic creations are made.\n\nJoin the conversation with Brittney Isphording, Kevin LeVezu, Veronica Stein about how one such piece, the cover art for this episode, was created, challenges they faced, how their mediums have changed over the years, and what inspires them to get in the flow with their art.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 17- Creative Collaborations with Brittney Isphording, Kevin LeVezu, Veronica Stein.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 17 Creative Collaborations with Brittany, Kevin, and Veronica Widescreen.png",
        intervieweeName: "Brittney Isphording, Kevin LeVezu, and Veronica Stein",
        links: {
            "Creative Collaboration photograph": "https://www.instagram.com/p/B2sgb4_Bjix/?utm_source=ig_web_copy_link",
            "Brittney Isphording Instagram": "https://www.instagram.com/brittneyiso/",
            "Brittney Isphording Facebook": "https://www.facebook.com/bri77ney",
            "Brittney Isphording Website": "https://bisphording.wixsite.com/bisphording-modeling",
            "Kevin LeVezu Website": "www.photographingfire.com",
            "Kevin LeVezu Instagram": "https://www.instagram.com/kevin_levezu/",
            "Kevin LeVezu Facebook": "https://www.facebook.com/profile.php?id=100007479465950",
            "Veronica Stein Instagram": "https://www.instagram.com/twistedunicorn/",
            "Veronica Stein Facebook": "https://www.facebook.com/twistedXunicorn/"
        }
    },
    "18-love-of-flow": {
        slug: "18-love-of-flow",
        episodeNumber: 18,
        date: "2024-04-17",
        title: "For the Love of Flow",
        shortTitle: "For the Love of Flow",
        description: "Inspired by the month of February, so often associated with love, join in an episode that examines the love of flow! Compiled from all the interviews since the creation of the Art of Flow in 2018, jump into hearing individuals flow stories, what keeps folks spinning, why fire-dancing and flow arts is important in their lives. Ask yourself, what creative outlets do you have and what do they bring to your life?",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 18- For the Love of Flow.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 18 For the Love of Flow Widescreen.png",
        intervieweeName: "Various artists",
        links: {
            "Photo Credits for cover art": {
                "Top Right": "Photo of Dresden Blue by Juan Davila",
                "Top Middle": "Photo of Duncan Greenwood",
                "Top Left": "Photo of Troy Grisa",
                "Bottom Left": "Photo of Aileen Lawlor by Jerimiah Johnston",
                "Bottom Middle": "Photo of Xander Paris",
                "Bottom Right": "Photo of Dyami Kaplan"
            }
        }
    },
    "19-shane-aronson": {
        slug: "19-shane-aronson",
        episodeNumber: 19,
        date: "2024-04-17",
        title: "Orbit Design with Shane Aronson",
        shortTitle: "Orbit Design",
        description: "Shane Aronson has been an orbiter for over 5 years, and founded Stoneorbits at 22 years old. He also has been designing orbits for about 4 years, is self taught and uses 3D printers, design, coding, and hand assembly to make his products! You can check out and order his designs on stoneorbits.com, and see pictures on his social media channels included in the show notes.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 19- Designing Orbits with Shane Aronson.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 19 Orbit Design with Shane Aronson cover image.png",
        intervieweeName: "Shane Aronson",
        links: {
            "Instagram": "https://www.instagram.com/stoneorbits/?hl=en",
            "Facebook": "https://www.facebook.com/StoneOrbits/",
            "Website": "https://stoneorbits.com/",
            "YouTube": "https://www.youtube.com/channel/UCeVWbBifXyq0NBhfhL3dXoQ"
        }
    },
    "20-kevin-axtell": {
        slug: "20-kevin-axtell",
        episodeNumber: 20,
        date: "2024-04-17",
        title: "Fire Magic with Kevin Axtell",
        shortTitle: "Fire Magic",
        description: "Kevin Axtell is now in his 21st year of juggling, flow, and fire arts. His past and present credits include:\nBoard Member at the International Jugglers Association, partner at the Flow Arts Institute, general manager of the FireDrums Festival, founder and director of Club Congress, co-founder of Club Motion Juggling and Club Fest, and co-founder and director of The Firewalking Center.\n\nIn addition to being an accomplished juggler and fire performer, Kevin also carries the title of “Master Firewalking Instructor” and is known around the world as a dynamic motivator and educator.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 20- Fire Magic with Kevin Axtell.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 20 Fire Magic with Kevin Axtell Cover Image.png",
        intervieweeName: "Kevin Axtell",
        links: {
            "Websites": {
                "The Firewalking Center": "https://thefirewalkingcenter.com/",
                "Club Motion Juggling": "https://www.clubmotionjuggling.com/",
                "Flow Arts Institute": "https://flowartsinstitute.com/",
                "Kevin Axtell": "https://www.kevinaxtell.com/"
            },
            "Instagram": "https://www.instagram.com/propartistry",
            "Faceboook": "https://www.facebook.com/ClubMotionJu..."
        }
    },
    "21-josie-mae": {
        slug: "21-josie-mae",
        episodeNumber: 21,
        date: "2024-04-17",
        title: "Women in Juggling with Josie Mae",
        shortTitle: "Women in Juggling",
        description: "Josie Mae is a contemporary circus artist and social circus educator specializing in club juggling and manipulation. They are coordinator and coach with The Voice Project - a youth training company that uses circus as an inquiry for social justice and systemic oppression - an extension of The Circus Project’s Pathways programming. Her passion for this work utilizes community organization, trauma-informed practices, and a holistic and intersectional educational lens. They have served on the International Jugglers Association (IJA) board and is the current World Juggling Day program director. They’ve also gone on tour with Clowns Without Borders - USA.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 21- Women in Juggling with Josie Mae.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 21 Women in Juggling with Josie Mae Widescreen.png",
        intervieweeName: "Josie Mae",
        links: {
            "Website": "www.josiejuggles.com",
            "Instagram": "https://www.instagram.com/josiejuggles",
            "Facebook": "https://www.facebook.com/josiejuggles",
            "Juggle Around The World Facebook": "https://www.facebook.com/jugglearoundtheworld"
        }
    },
    "22-sage-jacote": {
        slug: "22-sage-jacote",
        episodeNumber: 22,
        date: "2024-04-17",
        title: "Sacred Fire with Sage Jacote",
        shortTitle: "Sacred Fire",
        description: "Dancing with fire and light for over 20 years, Sage Jacote has changed the flow arts world as we know it, by teaching, performing, and inspiring around the world. She is the Founder and Artists Director of Sangre Del Sol, the longest operating fire and LED troupe in Austin, Texas.\n\nShe has also applied her skills in directing, producing, dancing, and choreographing for not only Sangre Del Sol but another Texas-based fire troop Solar Rain. With a background in Hip Hop, West African, Middle Eastern, Belly Dance, Tai Chi, and Salsa she likes to fuse these into her innovative fire and light tools and pyrotechnic effects to push the boundaries of modern dance performance.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 22- Sacred Fire with Sage Jacote.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 22 Sacred Fire with Sage Jacote Widescreen.png",
        intervieweeName: "Sage Jacote",
        links: {
            "Websites": {
                "Sangre Del Sol": "https://www.sangredelsol.us/",
                "Solar Rain": "https://www.solarraintx.com/"
            },
            "Instagram": "https://www.instagram.com/sangre_del_sol/",
            "Facebook": "https://www.facebook.com/sangredelsol",
            "Twitter": "https://twitter.com/sangredelsol",
            "YouTube": "https://www.youtube.com/user/SangreDelSol/featured"
        }
    },
    "23-krystin-railing": {
        slug: "23-krystin-railing",
        episodeNumber: 23,
        date: "2024-04-17",
        title: "Flow with your Business with Krystin Railing",
        shortTitle: "Flow with your Business",
        description: "Krystin Railing is a classically trained dancer and a professionally trained circus performer and has performed across the United States and internationally as a professional juggler and hula hooper.\nPerforming hula hoops since 2009, she has appeared at Seaport Village Buskers Festival, the Fringe Festival, The House of Blues, and on Norwegian Cruise Lines, among other venues. She has been featured on numerous news programs, late-night talk shows, magazines, newspapers, and blogs for her incredible skills.\n\nIn 2011, Krystin created Circus Mafia, an International Talent Agency for Circus performers, to support the careers of over 100 circus performers on 3 continents including North America, Europe, and Australia.\n\nIn addition to her performance experience, she was the Communications Director for the International Jugglers Association in 2019 and is a certified Firewalking Instructor and Empowerment Coach through The Firewalking Center.\n\nIn 2019, Krystin founded the Performer’s Guide, a Business Coaching and Mentorship program that is designed for professional performers who are looking to take their career to the next level.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 23 USE VIDEO VERSION- Flow With Your Business with Krystin Railing.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 23 Flow with your Business with Krystin Railing.png",
        intervieweeName: "Krystin Railing",
        links: {
            "Instagram": "https://www.instagram.com/theperformersguide/",
            "Facebook": "https://www.facebook.com/theperformersguide",
            "Website": "https://krystinrailing.com/the-performers-guide/"
        }
    },
    "24-liz-knights": {
        slug: "24-liz-knights",
        episodeNumber: 24,
        date: "2024-04-17",
        title: "Performance Perspectives with Liz Knights",
        shortTitle: "Performance Perspectives",
        description: "Liz Knights is an avid flow artist specializing in poi, buugeng and hooping.  She has taught at numerous flow festivals, organized the Ladies of Tech Poi collaboration series, and has recently been getting into teaching private online poi lessons.\n\nIn non-pandemic-times, she runs a Boston-based entertainment company, Cirque de Light, specializing in fire, LED, and circus performance and is also a bookings manager for the Boston Circus Guild.  When she’s not busy spinning she can be found sewing sparkly costumes and doing her best to keep her two cats away from those sparkly costumes.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 24 USE VIDEO VERSION- Performance Perspectives with Liz Knights.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 24 Performance Perspectives with Liz Knights Widescreen.jpg",
        intervieweeName: "Liz Knights",
        links: {
            "Website": "https://www.cirquedelight.com/",
            "Instagram": "https://www.instagram.com/cirquedelight/?hl=en",
            "Facebook": {
                "Boston Circus Guild": "https://www.facebook.com/BostonCircusGuild",
                "Cirque de Light": "https://www.facebook.com/cirquedelight"
            },
            "YouTube": "https://www.youtube.com/channel/UCFWmabsoiuOWJ3Dmsx_MgtA"
        }
    },
    "25-morgan-dolginow": {
        slug: "25-morgan-dolginow",
        episodeNumber: 25,
        date: "2024-04-17",
        title: "Inside Look at the Art of Flow with Morgan",
        shortTitle: "Inside Look at the Art of Flow",
        description: "Learn about myself, the creator of the Art of Flow, as we take a deep dive into the history of the podcast, a look at why it exists, and contemplate where it is going!\nMy name is Morgan, and my mission in life is to promote positive change via connections. I have utilized my passion for storytelling to collect and share individuals' stories and passions in creative and collaborative ways. In the past, I have worked on nonprofit communications, documentaries, and commercial video productions. I have also worked directly with youth in various mentoring roles, from one-on-one counseling sessions with at-risk high school students to working as a youth wilderness outdoor instructor, and as an in-school Registered Behavior Technician, which has helped hone my communication skills.",
        // TODO where is audio?
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode+14-+Telling+Stories+with+Dresden+Blue.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 25 An Inside Look at The Art of Flow with Morgan.png",
        intervieweeName: "Morgan Dolginow",
        links: {}
    },
    "26-samwise": {
        slug: "26-samwise",
        episodeNumber: 26,
        date: "2024-04-17",
        title: "Sacred Geometry with Samwise",
        shortTitle: "Sacred Geometry",
        description: "Samwise is a Flow Artist, geometer (specialist in geometry- earth measurer) and prop smith going on 10 years. Years of wanderlust, had him crossing the United States dozens of times, equipping, teaching, and learning from the many flow artists across the country. He's finally settled down to call the Bay Area his home, living his dream of being a professional propsmith at the Flowtoys workshop.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 26 USE VIDEO VERSION- Sacred Geometry with Samwise Clark.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 26 Sacred Geometry with Samwise Clark.png",
        intervieweeName: "Samwise",
        links: {
            "Instagram": "@pureunviersalflow",
            "Faceboook": "https://www.facebook.com/pureuniversalflow",
            "Youtube": "pureuniversalflow",
            "Poi Project": "https://www.facebook.com/groups/959248611114965",
            "Jesse Bowen Poi Piece to Little Secrets": "https://www.youtube.com/watch?v=sqv7k3BZCuY"
        }
    },
    "27-diversity-equity-inclusion-flow-arts": {
        slug: "27-diversity-equity-inclusion-flow-arts",
        episodeNumber: 27,
        date: "2024-04-17",
        title: "Diversity, Equity, and Inclusion in the Flow Arts with Dallys Newton, Michalla Moss, and Vertel Jackson",
        shortTitle: "Diversity, Equity, and Inclusion in the Flow Arts",
        description: "Listen to a discussion between Dallys Newton, Michalla Moss, and Vertel Jackson, in which we discuss how to embrace more diversity, equity, and inclusion in the flow arts community!  Each of these artists came together across different states and countries to discuss challenges the Flow Arts Community is facing, racism, sexism, ableism, and suggestions for how we can address these issues.  Please keep reading to check out their bios, contact information, and community projects mentioned in the episode.",
        // TODO where is audio?
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode+14-+Telling+Stories+with+Dresden+Blue.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 27 Diversity, Equity, and Inclusion in the Flow Arts with Dallys Newton, Michalla Moss, and Vertel Jackson Widescreen.jpg",
        intervieweeName: "Dallys Newton, Michalla Moss, and Vertel Jackson",
        links: {
            "Dallys Newton": {
                "Website": "https://dallyscircus.com/",
                "Instagram": "https://www.instagram.com/dallys.circ...",
                "Facebook": "https://www.facebook.com/dallys.newton",
                "Youtube": "https://www.youtube.com/channel/UCna-838jXBMCJOYDuWo-1jQ"
            },
            "Michalla Moss": {
                "Website": "gemstonedentertainment.com",
                "Instagram": "https://www.instagram.com/gemstoned94/",
                "Facebook": "https://www.facebook.com/Gemstoned94",
                "TikTok": "@lovemichallalynn"
            },
            "Vertel Jackson": {
                "Website": "verteljackson.com",
                "Instagram": "https://www.instagram.com/___vertel",
                "Facebook": "facebook.com/vertelj",
                "Twitter": "@___vertel",
                "TikTok": "@verteljackson"
            },
            "Guardians of the Vibe": {
                "Website": "https://www.guardiansofthevibe.com/",
                "Facebook": "https://www.facebook.com/guardiansofthevibe"
            },
            "Flow Therapy For The Culture": "https://www.facebook.com/FlowTherapyForTheCulture",
            "Fund the Flowarts (Flowtoys)": "",
            "SoulMind Studios": ""
        }
    },
    "28-srikanta-barefoot": {
        slug: "28-srikanta-barefoot",
        episodeNumber: 28,
        date: "2024-04-17",
        title: "Full-Time Performance with Srikanta Barefoot",
        shortTitle: "Full-Time Performance",
        description: "Srikanta Barefoot has a breadth of experience in Circus, Theater & Dance. He boasts an extensive performance history, including 3 years and over 700 shows as the Featured Fire Dancer, Fire Dance Coach & Lead Character for the Cirque du Soleil. Regarded as a leading figure in fire dance, Srikanta teaches workshops & retreats and has published an instructional video series on Dancing with the Fire Staff. He performs a variety of circus disciplines including cyr wheel, cube, clown, body percussion, boleadoras des percussion… and is ever in pursuit of his latest muse.\nHis company, Fusion Arts, is based in the South of France, where Srikanta works as Artistic Director, Choreographer & Performer. He also designs & sells custom-made, professional fire gear including poi, ropes & titanium fire staffs.\n\nAs a fan of The Art of Flow, enjoy a 25% discount on Srikanta's custom-made fire tools & instructional videos for a limited time! Visit The Fusion Arts Shop & use the discount code: artofflowrocks",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 28 USE VIDEO VERSION - A Fire Artist_s Journey with Srikanta Barefoot.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 28 Full Time Performance with Srikanta Barefoot Widescreen.jpg",
        intervieweeName: "Srikanta Barefoot",
        links: {
            "Website": "https://fusion-arts.com/",
            "Facebook": {
                "Fusion Arts": "https://www.facebook.com/fusionartsfrance",
                "Dance Based Fire Dance": "https://www.facebook.com/groups/DanceBasedFireDance"
            },
            "Instagram": "https://www.facebook.com/fusionartsfrance"
        }
    },
    "29-glenn": {
        slug: "29-glenn",
        episodeNumber: 29,
        date: "2024-04-17",
        title: "Making the Best Sticks with Glenn",
        shortTitle: "Making the Best Sticks",
        description: "Glenn created the flower sticks we know today in 1987 by using the concept of flop to make tassels/fringes, and shared these designs with as many people as possible who were curious, making this innovation a part of the public domain! \n\nListen to this episode about the time before: the best of sticks, flow arts was a name for prop manipulation and play with objects while in the flow state, and when innovation came out of love for sharing and a passion for prop play! \n\nAlso, check out a taste of the best of sticks playlist.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 29 USE VIDEO VERSION - Making the Best Sticks with Glenn.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 29 Making the Best Sticks with Glenn Widescreen.jpg",
        intervieweeName: "Glenn",
        links: {}
    },
    "30-starlight-alchemy": {
        slug: "30-starlight-alchemy",
        episodeNumber: 30,
        date: "2024-04-17",
        title: "Reflecting on Creativity with Starlight Alchemy",
        shortTitle: "Reflecting on Creativity",
        description: "Starlight Alchemy is Singapore’s leading fire and light performance company. Our performances draw from the depths of ancient traditions and modern artistry. As purveyors of the art of flow, we continue to push the boundaries of fire performance and beyond. Our vision is to captivate and inspire audiences with our distinctive style and dynamic displays of flow arts.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 30 USE VIDEO VERSION - Poi Health Benefits with Kate Riegle van West.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 30 Poi_s Health Benefits with Dr. Kate Riegle van West Widescreen.jpg",
        intervieweeName: "Starlight Alchemy",
        links: {
            "Website": "https://www.starlightalchemy.org/",
            "Instagram": "https://www.instagram.com/starlightalchemy/",
            "Facebook": "https://www.facebook.com/starlightalchemy/"
        }
    },
    "31-jeremiah-johnston": {
        slug: "31-jeremiah-johnston",
        episodeNumber: 31,
        date: "2024-04-17",
        title: "Touring with Jeremiah Johnston",
        shortTitle: "Touring",
        description: "Jeremiah Johnston juggles a lot, both literally and figuratively! Jeremiah has won the bronze medal at the 2009 International Jugglers’ Association's annual competition and returned in 2013 to win his second bronze medal in team juggling with his friends in Mountain Motion. He tours around the country at private events, fairs, and in performance halls with LEDs or fire, juggling balls, clubs, blocks, poi, diabolo, and more. An engaging and accomplished performer, he also teaches juggling to adults and kids alike.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 31 USE VIDEO VERSION - Touring with Jeremiah Johnston.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 31 Touring with Jeremiah Johnston Widescreen.jpg",
        intervieweeName: "Jeremiah Johnston"
    },
    "32-chris-garcia": {
        slug: "32-chris-garcia",
        episodeNumber: 32,
        date: "2024-04-17",
        title: "Diabolo with Chris Garcia",
        shortTitle: "Diabolo",
        description: "Chris Garcia, aka Draco the Juggler, is a San Francisco Bay Area-born juggler. He found his passion for juggling beginning in 2003 in high school through the juggling club advised by well-known juggler and Japanese teacher Matt Hall. Chris likes to practice many forms of juggling and especially likes playing with the diabolo ('Chinese yoyo'). Through his juggling career, he's traveled to many different countries, performed at a wide variety of shows and events, and has also taught thousands of people to juggle. Outside of his juggling career, Chris is also a video game developer and coder, and finds the two separate careers have some interesting similarities through the art and psychology of play.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 32 USE VIDEO VERSION - Diabolo with Chris Garcia.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 32 Diabolo with Chris Garcia Widescreen image.jpg",
        intervieweeName: "Chris Garcia"
    },
    "33-arlene-smith-bj-burg": {
        slug: "33-arlene-smith-bj-burg",
        episodeNumber: 33,
        date: "2024-04-17",
        title: "Creating a Flow Arts Collective with Arlene Smith and BJ Burg",
        shortTitle: "Flow Arts Collective",
        description: "In this episode, I chat with BJ Burg and Arlene Smith as we dive into discussing the creation of a Flow Arts Collective! Discover how this happened, what were the challenges, advice from the founders for folks wanting to create their own flow arts or art collective nonprofits, and much more.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 33 USE VIDEO VERSION - Creating a Flow Arts Collective with Arlene Smith and BJ Burg.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 33 Creating a Flow Arts Collective with Arlene and BJ Widescreen.jpg",
        intervieweeName: "Arlene Smith and BJ Burg"
    },
    "34-mari-hercher": {
        slug: "34-mari-hercher",
        episodeNumber: 34,
        date: "2024-04-17",
        title: "Taking the Stage with Mari Hercher",
        shortTitle: "Taking the Stage",
        description: "Mari Hercher is a 26-year-old flow artist and doctor of physical therapy student. She is based in San Francisco but will be relocating back to her hometown of Los Angeles this spring to finish out her final rotation in school as well as dive headfirst into a new set of flow arts projects. Her first prop was rope dart, but she has since fallen in love with hooping, fans, and meteor dart. Mari has a profound appreciation for the capabilities of the human body and has a goal of facilitating healing by helping people understand their bodies through flow in its many forms.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 34 USE VIDEO VERSION - Mari Hercher Taking The Stage.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 34 Taking the Stage with Mari Hercher cover image.png",
        intervieweeName: "Mari Hercher"
    },
    "35-bunny-holmes": {
        slug: "35-bunny-holmes",
        episodeNumber: 35,
        date: "2024-04-17",
        title: "Rocky Horror Circus Show with Bunny Holmes",
        shortTitle: "Rocky Horror Circus Show",
        description: "In this episode with Bunny Holmes, discover an inside look at the workings of a family-style circus troupe, The Vespertine Circus, and their latest production - The Rocky Horror Circus Show!",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 35 USE VIDEO VERSION - Rocky Horror Circus Show with Bunny Holmes.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 35 Rocky Horror Circus Show with Bunny Holmes.png",
        intervieweeName: "Bunny Holmes"
    },
    "36-vojta-stolbenko": {
        slug: "36-vojta-stolbenko",
        episodeNumber: 36,
        date: "2024-04-17",
        title: "Flow Arts Community with Vojta Stolbenko",
        shortTitle: "Flow Arts Community",
        description: "Vojta is a flow artist, filmmaker, musician, and circus artist based in Prague. Professionally performing since 2008, Vojta has performed worldwide, both alone and in collaboration with groups such as Fusion Arts, Phoenix Fire Dancers, SuperCho Company, and the Mandalights company to name a few. Vojta has completed several artists and teaching residencies and creates visually stunning flow and performance videos for himself and clients, that evoke emotion and highlight movement in a dynamic way. Vojta is a dance instructor for poiretreat.com and has run 14 retreats! He is the main organizer of the Roztoč fest, a circus festival in Prague which is entering its 9th year. He’s been practicing martial arts since he was 6 and started learning the bo staff, poi, and slacklining in 2007. ",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 36 USE VIDEO VERSION - Flow Arts Community with Vojta Stolbenko.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 36 Flow Arts Community with Vojta Stolbenko.png",
        intervieweeName: "Vojta Stolbenko"
    },
    "37-amanda-dawn-chase": {
        slug: "37-amanda-dawn-chase",
        episodeNumber: 37,
        date: "2024-04-17",
        title: "Aerial Silks with Amanda Dawn Chase",
        shortTitle: "Aerial Silks",
        description: "Amanda Dawn Chase is an aerial artist, creative entrepreneur, and teacher based in the Appalachian Mountains of North Carolina. In 2014, she started her own company, Spiral Arts, which offers classes, performances, and custom costumes. Amanda shares her journey in the world of aerial silks, the joys, the challenges, and the incredible community she's become a part of.",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 37 USE VIDEO VERSION - Healing With Flow Arts with Otillia Ward.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 37 Healing with Flow Arts with Otillia Widescreen.jpg",
        intervieweeName: "Amanda Dawn Chase"
    },
    "38-gabrielle-bonneville": {
        slug: "38-gabrielle-bonneville",
        episodeNumber: 38,
        date: "2024-04-17",
        title: "Artist’s Residencies with Gabrielle Bonneville",
        shortTitle: "Artist’s Residencies",
        description: "In this episode with Gabrielle Bonneville, we discuss digital nomads and the global artist residencies of Momentom Collective.\n\nGabrielle is a circus artist, lucid dreamer and serial entrepreneur. She believes in the power of arts as a catalyst for global change and self-actualization. She discovered from a young age that magic was real and that everything is seeded from the mind and propelled through habits. Co-Founder of Momentom Collective, she is now actively working on developing the world’s most mind-blowing artistic community, designed for radical autonomy, expansion of mind, connection to nature, and the safety of all beings.\n\nMomentom was named the 2021 best investment for artists and digital nomads in Yahoo Finance News, due to their spectacular residencies. Momentom recently announced plans to expand its offerings to include a permanent residency in Costa Rica, providing a stable home and space to gather for artists, healers, and performers.\n\nConnect with Gabrielle online!\nWebsite: www.momentomcollective.com\nFacebook: https://www.facebook.com/Momentom-Collective-384816838382934/\nInstagram: https://www.instagram.com/momentomcollective/\nVimeo: https://vimeo.com/237218129",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 38 USE VIDEO VERSION - Artist_s Residencies with Gabrielle Bonneville.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 38 Artist_s Residencies with Gabrielle Bonneville.png",
        intervieweeName: "Gabrielle Bonneville"
    }
}