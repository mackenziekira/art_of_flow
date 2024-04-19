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
        description: `Lane Lillaquist is on a mission to document and share flow arts. He is the founder of Dolores Flow, a weekly flow jam in Dolores Park, San Francisco. Poi is his favorite prop, and when not spinning things, he can be found with a camera in his hands. To see pictures and videos of Lane spinning and his photography, follow him on Instagram [[@lillq]]

        Listen to Dolores Flow, and hear from Lane how to foster community through spin jams, optimize your learning, and his own personal flow journey.`,
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
        description: `Hear from Dyami Tivon Kaplan, about growing the flow arts, teaching, and the change in accessibility to flow arts and fire dancing with the rise of technology.

        Like many people, the flow arts for Dyami have become a method through which to learn, and a lens of understanding though which to view the world around us. Dyami's most current flow art today is in practicing massage. For Dyami, massage, flow arts, and dance and are all interrelated expressions of each other and are all extensions of the body and the self.

        Connect with Dyami online at:

        [[https://www.youtube.com/dyamikaplan]]
        [[https://www.instagram.com/dyamitk]]`,
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
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 3- Learning Through Play.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 3 Evolution through Play with Duncan Roy Greenwood cover image.png",
        intervieweeName: "Duncan Roy Greenwood",
        description: `Join our conversation on prop construction, the flow state and hypofrontality, evolution through play, and philosophies on spreading the flow arts as I chat with Duncan Roy Greenwood. Duncan is a flow artist from Cape Town, South Africa, on a mission to promote and spread flow. He created Flow Arts Commune [[AfrikaBurn]], the South Africa equivalent of Fire Conclave at [[Burning Man Festival]] in the United States of America. He is the founder of [[Flow DNA]], an online flow arts prop retail shop. You can flow toys from Flow DNA on [[Etsy]] if you live outside of South Africa. An experienced animator, he recently created one for Flowtoys which you can watch [[here]].

        Find more of Duncan on his [[Instagram]] or [[Youtube]].`,
        links: {
            "AfrikaBurn": "https://www.facebook.com/FlowArtsCommuneAfrikaBurn",
            "Burning Man Festival": "https://burningman.org/event/brc",
            "Flow DNA": "https://flowdna.co.za/",
            "Etsy": "https://www.etsy.com/shop/FlowDNA",
            "here": "https://www.youtube.com/watch?v=yvM-kWdDgNs",
            "Instagram": "https://www.instagram.com/flowdna_arts",
            "Youtube": "https://www.youtube.com/flowdna"

        }
    },
    "4-rion-fish": {
        slug: "4-rion-fish",
        episodeNumber: 4,
        date: "2024-04-17",
        title: "Buggeng is my Thang with Rion Fish",
        shortTitle: "Buggeng is my Thang",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 4 -Buggeng is my Thang.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 4 Buggeng is my Thang with Rion Fish Widescreen.png",
        intervieweeName: "Rion Fish",
        description: `In this episode Rion Fish chats with us about the history and evolution of buggeng, reveals why buggeng is his thang, recounts the experience of a video going viral and the impact on performing, takes apart teaching philosophies, and shares tips on how to deal with the negative voices in your head.

        Rion is a flow artist, storyteller and variety performer specializing in buggeng, prop dance, balloons, and clowning. He has taught workshops at Flow festivals ranging from New England Flow Festival, Manipulation, FireDrums. Pacific Fire Gathering, and more. He was the Shin/leader of Ministry of Flow Fire Conclave in 2018, organizes local flow showcases, and, “is a fish about town.”

        Find him on:
        Facebook: [[@RionFish]]
        Instagram: [[@FishShapes]]
        Youtube: [[Rion Fish]]
        Or on his [[website]]!
        OG Photography in this episode’s artwork by [[Dresden Blue]]`,
        links: {
            "@RionFish": "https://www.facebook.com/pg/RionFish",
            "@FishShapes": "https://www.instagram.com/fishshapes",
            "Rion Fish": "https://www.youtube.com/c/rionfish",
            "website": "http://www.rionfish.com/",
            "Dresden Blue": "https://www.facebook.com/dresdenbluefire"
        }
    },
    "5-tani-olhinoski": {
        slug: "5-tani-olhinoski",
        episodeNumber: 5,
        date: "2024-04-17",
        title: "Self Development with Tani Olhinoski",
        shortTitle: "Self Development",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 5- Self Development.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 5 Self Development with Tani Widescreen.jpg",
        intervieweeName: "Tani Olhinoski",
        description: `Tani Olhinoski is the founder of the [[Nexus Center]] in San Francisco, a space for conscious connection and movement exploration. She spins dragon staff, contact staff, fans and on occasion plushie fire darts. From a business background, with experience in the tech sector she delves into her dream to facilitate others journey of self-development, her own experiences at Burning Man, what it's like to start your own business from scratch, her approach to learning, and musings on art.

        Find more of Tani on:
        Instagram at [[https://www.instagram.com/deivogel]]
        Facebook at [[https://www.facebook.com/inattani]]`,
        links: {
            "Nexus Center": "https://www.facebook.com/thenexuscenterSF/",
            "https://www.instagram.com/deivogel": "https://www.instagram.com/deivogel",
            "https://www.facebook.com/inattani": "https://www.facebook.com/inattani"


        }
    },
    "6-ronan-mcloughlin": {
        slug: "6-ronan-mcloughlin",
        episodeNumber: 6,
        date: "2024-04-17",
        title: "Awareness with Ronan McLoughlin",
        shortTitle: "Awareness",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 6 -Awareness with Ronan.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 6 Awareness with Ronan Widescreen.jpg",
        intervieweeName: "Ronan McLoughlin",
        description: `Ronan McLoughlin is an innovative poi spinner who travels the world teaching and performing, is the originator of contact poi, has spoken on TEDx about Learning to Learn, and approaches the art from a love of learning optimization. Jump into a conversation with Ronan that explores the topic of awareness, going back to basics, his personal examinations of motivation for spinning and a frank look at the stories we create of others expectations.

        You can find more of Ronan on:
        Instagram - [[https://www.instagram.com/Ronanmcpoi]]
        TedX - [[https://www.youtube.com/watch?v=LYlRIbOnhos]]
        Facebook - [[https://www.facebook.com/ronopotamus]]

        Check out [[www.TaoSteam.com]] for tutorials on Tàijí (Taichi) one of the many projects Ronan is currently involved in!`,
        links: {
            "https://www.instagram.com/Ronanmcpoi": "https://www.instagram.com/Ronanmcpoi",
            "https://www.youtube.com/watch?v=LYlRIbOnhos": "https://www.youtube.com/watch?v=LYlRIbOnhos",
            "https://www.facebook.com/ronopotamus": "https://www.facebook.com/ronopotamus",
            "www.TaoSteam.com": "http://www.TaoSteam.com"
        }
    },
    "7-tyfoods": {
        slug: "7-tyfoods",
        episodeNumber: 7,
        date: "2024-04-17",
        title: "Prop Dance Culture with Ty",
        shortTitle: "Prop Dance Culture",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 7 -Prop Dance Culture.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 7 BLURRY- Prop Dance Culture with Ty Widescreen.png",
        intervieweeName: "Tyfoods",
        description: `Tyfoods is a Hip-Hop Poi Dancer, Movement Enthusiast and Neuroscience Graduate. He has been spinning poi for 6 years, and dancing for 3 years. In that time, he has developed a systematic approach that focuses on \"how to learn tricks/ movements\" rather than on the tricks/movements themselves. In an attempt to both share this systematic approach and create the ultimate resource for all movement artists he co-founded [[Prop Dance Culture]]!

        Prop Dance Culture is a platform that is dedicated to bringing ALL movement artists together so that key ideas may be shared, creativity stimulated and skill growth accelerated, BUT also is dedicated to giving these movement artists the tools they need to succeed! In addition to Prop Dance Culture, he has co-founded Living the Flow Life which is all about the psychological state of Flow. The state where you both feel your best and perform your best. Rather than discussing Flow academically, Living the Flow Life is all about the practical usage of Flow and how you can get into the Flow state more often. Living the Flow Life aims to spread awareness about the art of getting into Flow.

        Find him online at:
        [[www.propdanceculture.com]]
        [[www.facebook.com/propdanceculture]]
        [[www.facebook.com/tyfoods]]
        [[www.instagram.com/propdanceculture]]
        [[www.instagram.com/tyfoods]]`,
        links: {
            "Prop Dance Culture": "https://www.propdanceculture.com/",
            "www.propdanceculture.com": "https://www.propdanceculture.com",
            "www.facebook.com/propdanceculture": "https://www.facebook.com/propdanceculture",
            "www.facebook.com/tyfoods": "https://www.facebook.com/tyfoods",
            "www.instagram.com/propdanceculture": "https://www.instagram.com/propdanceculture",
            "www.instagram.com/tyfoods": "https://www.instagram.com/tyfoods"
        }
    },
    "8-richard-hartnell": {
        slug: "8-richard-hartnell",
        episodeNumber: 8,
        date: "2024-04-17",
        title: "Contact Ball with Richard Hartnell",
        shortTitle: "Contact Ball",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 8- Contact Ball with Richard Hartnell.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 8 Contact Ball with Richard Widescreen.jpg",
        intervieweeName: "Richard Hartnell",
        description: `In this episode, Richard Hartnell discusses the history of contact ball, how he got into juggling, his involvement in the Bellingham Circus Guild, his thoughts on artivsm and learning.

        Richard is among the most distinguished American contact jugglers. He both teaches and performs along the West Coast of the United States and overseas at Indie stage to huge festivals. In 2008, he co-founded the [[Bellingham Circus Guild]] in Washington state, before moving to the Vulcan lofts, a collective of artists in San Fancisco East Bay in 2009. Today, he continues to perform on stages large and small and teach contact juggling to those interested in learning the magic of manipulation.

        Find him online at:
        Instagram - [[@contactballer]]
        Facebook – [[Velveteen]]
        Professional Website- [[gravitydefiance.net]]`,
        links: {
            "Bellingham Circus Guild": "http://bellinghamcircusguild.com/",
            "@contactballer": "https://www.instagram.com/contactballer",
            "Velveteen": "http://www.facebook.com/velveteen",
            "gravitydefiance.net": "http://www.gravitydefiance.net/"

        }
    },
    "9-aileen-lawlor": {
        slug: "9-aileen-lawlor",
        episodeNumber: 9,
        date: "2024-04-17",
        title: "Creating Collaborative Flow with Aileen Lawlor",
        shortTitle: "Creating Collaborative Flow",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 9 - Creating Collaborative Flow.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 9 Creating Collaborative Flow with Aileen Widescreen.png",
        intervieweeName: "Aileen Lawlor",
        description: `Aileen Lawlor a world class contact spinner and teacher, sat down to share with listeners of the Art of Flow how she got into firedancing, discuss her work in Nicaragua teaching flow arts to at-risk-youth, and discus how choreography is a pictorial representation/lens into bigger themes in her life. 

        Aileen discovered an enthusiasm toward the Flow and Spinning Arts after moving to San Francisco in 2004 and delving into the practice of poi, contact staff, and Flow-Wand. Her exploration with object manipulation encouraged her studies of dance & varied movement modalities. Blending technical proficiency and her personal style into her performance, she has established herself as a highly sought-after Contact Staff instructor and performer at countless festivals in the worldwide Flow Arts community. She has conducted workshops throughout the US and taught in Rome, France, Canada & the UK, New Zealand, has appeared in numerous instructional Flow Arts DVD’s, and for several years in Nicaragua as a volunteer sharing her knowledge of the fire & flow arts (in Spanish!) to vulnerable youth and circus artists throughout Central America. 

        Check out Aileen’s work at [[http://www.youtube.com/aileenbean]] and visit [[http://aileenlawlor.wix.com/lightbearer]].

        Episode Music Credits:
        Favorite by Unknown
        Dreamcatcher-Purple Planet Inspirational
        Chronos
        Quarkstar
        Siobhan- Wake Up
        Sunday- SDK`,
        links: {
            "http://www.youtube.com/aileenbean": "http://www.youtube.com/aileenbean",
            "http://aileenlawlor.wix.com/lightbearer": "http://aileenlawlor.wix.com/lightbearer",
        }
    },
    "10-troy-grisa": {
        slug: "10-troy-grisa",
        episodeNumber: 10,
        date: "2024-04-17",
        title: "Performance with Troy Grisa",
        shortTitle: "Performance",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 10 - Performace with Troy Grisa.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 10 Performance with Troy Grisa Widescreen.jpg",
        intervieweeName: "Troy Grisa",
        description: `In this episode, listen to a conversation with Troy Grisa, a flow arts fanatic currently living in Portland, Oregon. Troy picked up spinning poi in college and has been going ever since, learning one or two new props each year. He took his art-form to a professional level working as a performer for 3 years in Florida at various events ranging from weddings to luaus, to birthdays and community events. Troy was a high school teacher for 4 years during which he incorporated flow arts into his lesson breaks! Now, you can find him working on his flow arts poetry and crafting a new flow arts blog as he serves the community with involvement, passion, and gusto.

        Find Troy online at:
        [[FlowArtsCurator.com]]
        Instagram: [[https://www.instagram.com/troygrisa]]
        Facebook: [[https://www.facebook.com/troy.grisa]]
        Youtube: [[https://www.youtube.com/watch?v=exkvCBvPUAU]]`,
        links: {
            "https://www.facebook.com/troy.grisa": "https://www.facebook.com/troy.grisa",
            "https://www.youtube.com/watch?v=exkvCBvPUAU": "https://www.youtube.com/watch?v=exkvCBvPUAU",
            "https://www.instagram.com/troygrisa": "https://www.instagram.com/troygrisa",
            "FlowArtsCurator.com": "https://FlowArtsCurator.com",
        }
    },
    "11-xander-paris": {
        slug: "11-xander-paris",
        episodeNumber: 11,
        date: "2024-04-17",
        title: "Life’s Purpose with Xander Paris",
        shortTitle: "Life’s Purpose",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 11 -Life_s Purpose with Xander Paris.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 11 Life_s Purpose with Xander Paris Widescreen.png",
        intervieweeName: "Xander Paris",
        description: `Xander Paris is a rope dartist, poi spinner, triple section staff wielding, nun-chuck ninja who is a community builder and teacher from San Francisco, currently based out of Portland, Oregon. Xander's life passion is martial flow and performance arts. He grew up involved in martial arts at a Muay Thai gym, took years of dance classes and theater which sparked his interest in movement, rhythm, and performance. After discovering the art-forms of flow and object manipulation he has dedicated time and energy into spreading the flow arts, and combining different elements of object manipulation with dance, martial arts, and movement.

        Discover his viewpoints on the difference between a life passion and life calling, hear his flow story, what inspires him to perform, and about the development of a new fire-dancing art of fire-on-sand-manipulation in this FINAL episode of Season 1 of the Art of Flow.

        Where to find Xander online?
        Instagram: [[@crouchingtigerhiddenxander]]
        Facebook: [[CrouchingTigerHiddenXander]]
        YouTube: [[XanderParis91]]

        Episode Song Credits:
        Djlang59 - Drops of H20 from The Filtered Water Treatment
        Tobias Weber- Between Worlds
        CDK -Sunday
        AirTone- Midwinter
        Quarkstar- Cricket Seasoning
        Quarkstar- Solar Fractal`,
        links: {
            "@crouchingtigerhiddenxander": "https://www.instagram.com/crouchingtigerhiddenxander",
            "CrouchingTigerHiddenXander": "https://www.facebook.com/CrouchingTigerHiddenXander",
            "XanderParis91": "https://www.youtube.com/user/XanderParis91"
        }
    },
    "12-drexfactor": {
        slug: "12-drexfactor",
        episodeNumber: 12,
        date: "2024-04-17",
        title: "What is Flow Arts? With DrexFactor",
        shortTitle: "What is Flow Arts?",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 12- What is Flow Arts with DrexFactor.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 12 What is Flow Arts with DrexFactor Widescreen.jpg",
        intervieweeName: "DrexFactor",
        description: `Ben 'Drex' Drexler is one of the most prolific and popular content creators in the flow arts. He is a world-renowned movement artist, dancer, and instructor who has spent the last 12 years teaching and performing the art of poi. His YouTube channel has more than six million views and more than 48,000 subscribers, and he has more than 20,000 followers on Instagram. He has taught at countless events on 3 continents, and his online tutorials have been a gateway for 10’s to 1000’s of people all over the world. He believes in the power of flow arts to improve fitness, build problem-solving skills, and as a tool for personal expression and hopes to bring the transformative power of flow to as wide an audience as possible. In the first part of a two-part interview, Drex discusses with us what the flow arts are, flow history, and how the community has changed over the years.

        Important Links:
        DrexFactor Blog: [[https://drexfactor.com/weirdscience]]
        DrexFactor YouTube Channel: [[https://www.youtube.com/user/TaoAvatar20]]
        DrexFactor Instagram: [[https://www.instagram.com/drexfactor]]

        DrexFactor’s favorite technical video project as mentioned in this interview: [[https://www.youtube.com/watch?v=D3UGRGYfRf8]]`,
        links: {
            "https://drexfactor.com/weirdscience": "https://drexfactor.com/weirdscience",
            "https://www.youtube.com/user/TaoAvatar20": "https://www.youtube.com/user/TaoAvatar20",
            "https://www.instagram.com/drexfactor": "https://www.instagram.com/drexfactor/",
            "https://www.youtube.com/watch?v=D3UGRGYfRf8": "https://www.youtube.com/watch?v=D3UGRGYfRf8"
        }
    },
    "13-drexfactor": {
        slug: "13-drexfactor",
        episodeNumber: 13,
        date: "2024-04-17",
        title: "Flow Cultural Identity with DrexFactor",
        shortTitle: "Flow Cultural Identity",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 13 - Changes in Flow Community with DrexFactor.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 13 Flow Cultural Identity with DrexFactor Widescreen Image.jpg",
        intervieweeName: "DrexFactor",
        description: `A continuation of our conversation with Ben Drexler 'DrexFactor', this episode includes discussions on how to discover our cultural identity as a flow community, some of DrexFactor's favorite artistic projects, and the story of how he became a prolific content creator.

        Ben 'Drex' Drexler is one of the most popular content creators in the flow arts. He is a world-renowned movement artist, dancer, and instructor who has spent the last 12 years teaching and performing the art of poi. His YouTube channel has more than six million views and more than 48,000 subscribers, and he has more than 20,000 followers on Instagram. He has taught at countless events on 3 continents, and his online tutorials have been a gateway for 10’s to 1000’s of people all over the world.

        Important Links:
        DrexFactor Blog: [[https://drexfactor.com/weirdscience]]
        DrexFactor YouTube Channel: [[https://www.youtube.com/user/TaoAvatar20]]
        DrexFactor Facebook: [[https://www.facebook.com/drexfactorpoi]]
        DrexFactor Instagram - [[https://www.instagram.com/drexfactor]]`,
        links: {
            "https://drexfactor.com/weirdscience": "https://drexfactor.com/weirdscience",
            "https://www.youtube.com/user/TaoAvatar20": "https://www.youtube.com/user/TaoAvatar20",
            "https://www.facebook.com/drexfactorpoi": "https://www.facebook.com/drexfactorpoi",
            "https://www.instagram.com/drexfactor": "https://www.instagram.com/drexfactor/",
        }
    },
    "14-dresden-blue": {
        slug: "14-dresden-blue",
        episodeNumber: 14,
        date: "2024-04-17",
        title: "Harm Reduction with Dresden Blue",
        shortTitle: "Harm Reduction",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 14- Harm Reduction with Dresden Blue.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 14 Harm Reduction with Dresden Blue Widescreen image.png",
        intervieweeName: "Dresden Blue",
        description: `Harm reduction workshops are increasing in the festival scene, as well as in the fire and flow arts, as the value they add to communities and why they matter becomes recognized.

        Listen as we chat with Dresden Blue and discuss one of the challenges facing the flow arts community, unsafe drug use and lack of proper education on commonly used substances, her innovations in rope dart, and how to play well with partners.

        Dresden Blue is an artist exploring the expressive potential of combining martial, dance, circus, and fire arts. She began her journey in Portland, Oregon with the Weapons of Mass Distraction fire troupe at Reed College, and since then has relocated to Oakland, California where she lives and trains at the Vulcan. Over the past 10 years, she has taught and performed at more than 30 fire and flow festivals internationally.

        Contact Dresden and stay up to date with her flow performances, classes, and photography!

        Facebook: [[https://www.facebook.com/dresdenbluefire]]
        YouTube: [[www.youtube.com/user/dresdenbluefire]]
        Harm Reduction Facebook Group: [[https://www.facebook.com/howtothinkaboutdrugs]]`,
        links: {
            "https://www.facebook.com/howtothinkaboutdrugs": "https://www.facebook.com/howtothinkaboutdrugs",
            "https://www.facebook.com/dresdenbluefire": "https://www.facebook.com/dresdenbluefire/",
            "www.youtube.com/user/dresdenbluefire": "http://www.youtube.com/user/dresdenbluefire"
        }
    },
    "16-jilly-bee": {
        slug: "16-jilly-bee",
        episodeNumber: 16,
        date: "2024-04-17",
        title: "Online Communities- Flow, Circus, and Artists Conversations on Community and Creativity with Jilly Bee",
        shortTitle: "Online Communities",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 16- Virtual Communities-  Flow, Circus, and Artists Conversation on Community and Creativity with Jilly Bee.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 16 Online Community with Jilly Bee Widescreen.jpg",
        intervieweeName: "Jilly Bee",
        description: `Delve into a conversation on the history of flow arts, as Jilly Bee shares about her time involved in community and discusses the shift to virtual communities, explores challenges facing the community as we grow in number, reflects on giving and receiving feedback, and provides her insights into individual’s changing relationships with poi and other props over the years.

        Jilly Bee is a community architect, inspirer, and innovative thinker. She can be found by the fireside chatting about cultural dynamics, uplifting those in need and creating safe spaces so that anyone can have an opportunity to experience the flow arts movement.

        Jilly has written ensemble performances for many different events and organizations, performed with fire conclave for Burning Man for 4 years and ascended to shin of this 50-person troupe, and performed everywhere from local art walks to The Queen Mary Oceanliner.  Jilly has hosted and led OC spin jams, organized smaller performance groups and numerous California flow events, and Jilly opened a flow dojo in Aliso Viejo for a year. Bee is an admin of Poi Chat, one of the largest flow-related groups on Facebook with over twenty-seven thousand members.  Her motivation to sustain that role is in seeing how the virtual community is growing and shaping the greater community at large.

        Connect with Jilly Bee online:
        Facebook: [[https://www.facebook.com/jillian.morris.94]]
        Instagram: [[https://www.instagram.com/jilly.be111]]`,
        links: {
            "https://www.facebook.com/jillian.morris.94": "https://www.facebook.com/jillian.morris.94",
            "https://www.instagram.com/jilly.be111": "https://www.instagram.com/jilly.be111/"
        }
    },
    "17-creative-collaborations": {
        slug: "17-creative-collaborations",
        episodeNumber: 17,
        date: "2024-04-17",
        title: "Creative Collaborations with Brittney Isphording, Kevin LeVezu, and Veronica Stein",
        shortTitle: "Creative Collaborations",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 17- Creative Collaborations with Brittney Isphording, Kevin LeVezu, Veronica Stein.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 17 Creative Collaborations with Brittany, Kevin, and Veronica Widescreen.png",
        intervieweeName: "Brittney Isphording, Kevin LeVezu, and Veronica Stein",
        description: `When an artist from one background, such as movement arts, pairs up with an artist from another background such as body painting, and a third artist works to capture the collaboration via the art of photography what and how is the interacting art created? In this episode of the Art of Flow we are going to explore the collaborations that can occur with fire photography and the magic that can happen when multi-media artistic creations are made.

        Join the conversation with Brittney Isphording, Kevin LeVezu, Veronica Stein about how one such piece, the cover art for this episode, was created, challenges they faced, how their mediums have changed over the years, and what inspires them to get in the flow with their art.

        Link to Creative Collaboration photograph: [[https://www.instagram.com/p/B2sgb4_Bjix]]

        Artist Biographies:

        Brittney used to get in trouble for drawing on herself in high school so when the north American body paint championships came to the east coast in her 20’s she jumped on the opportunity! After a few years modeling for artists she picked up the brush herself. She'd been painting with acrylic and oil paints throughout her life but this new medium captured her heart. She's also a circus performer herself which helps her to understand the needs of her performing canvases. Brittney has traveled to Austria for the World Body paint Championships, taught bodypainting at burning man, and has painted faces of hundreds of kids and adults alike! She is also an accomplished, world traveling hoop and fire dancer.

        Kevin has pioneered various techniques in fire and flow photography for over 10 years. He is a staff photographer for the several festivals and publications including the Burning Man Project. His work has been featured in art exhibits, magazines, documentaries and news stories throughout the world. He teaches this art creation form both through in person workshops and through his website/blog [[www.photographingfire.com]]

        Veronica was introduced to the entrancing world of hooping seven years ago following the sudden loss of her best friend. Using flow arts as a means to transcend her earthly frustrations and sorrows, the art form has not only allowed for a new avenue of creativity, but a positive outlet to be a role model and muse for aspiring artists and dancers. Superseding her professional fire arts entrance to the PA Gathering, “Return to Roots,” Veronica can be found enchanting and enticing weekly spectators at local clubs, corporate events, parties, and festivals— most recently she has also become a respected go-go dancer and is continuously hunting for new channels of expression.

        Social Media Links:

        Brittney Isphording-
        Instagram: [[https://www.instagram.com/brittneyiso]]
        Facebook: [[https://www.facebook.com/bri77ney]]
        Website: [[https://bisphording.wixsite.com/bisphording-modeling]]

        Kevin LeVezu-
        Website: [[http://www.photographingfire.com]]
        Instagram: [[https://www.instagram.com/kevin_levezu]]
        Facebook: [[https://www.facebook.com/profile.php?id=100007479465950]]

        Veronica Stein-
        Instagram: [[https://www.instagram.com/twistedunicorn]]
        Facebook: [[https://www.facebook.com/twistedXunicorn]]`,
        links: {
            "https://www.instagram.com/p/B2sgb4_Bjix": "https://www.instagram.com/p/B2sgb4_Bjix",
            "www.photographingfire.com": "http://www.photographingfire.com/",
            "http://www.photographingfire.com": "http://www.photographingfire.com",
            "https://www.instagram.com/brittneyiso": "https://www.instagram.com/brittneyiso",
            "https://www.facebook.com/bri77ney": "https://www.facebook.com/bri77ney",
            "https://bisphording.wixsite.com/bisphording-modeling": "https://bisphording.wixsite.com/bisphording-modeling",
            "https://www.instagram.com/kevin_levezu": "https://www.instagram.com/kevin_levezu/",
            "https://www.facebook.com/profile.php?id=100007479465950": "https://www.facebook.com/profile.php?id=100007479465950",
            "https://www.instagram.com/twistedunicorn": "https://www.instagram.com/twistedunicorn/",
            "https://www.facebook.com/twistedXunicorn": "https://www.facebook.com/twistedXunicorn/"
        }
    },
    "18-love-of-flow": {
        slug: "18-love-of-flow",
        episodeNumber: 18,
        date: "2024-04-17",
        title: "For the Love of Flow",
        shortTitle: "For the Love of Flow",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 18- For the Love of Flow.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 18 For the Love of Flow Widescreen.png",
        intervieweeName: "Various artists",
        description: `Inspired by the month of February, so often associated with love, join in an episode that examines the love of flow! Compiled from all the interviews since the creation of the Art of Flow in 2018, jump into hearing individuals flow stories, what keeps folks spinning, why fire-dancing and flow arts is important in their lives. Ask yourself, what creative outlets do you have and what do they bring to your life?

        Photo Credits for cover art:
        Top Right: Photo of Dresden Blue by Juan Davila
        Top Middle: Photo of Duncan Greenwood
        Top Left: Photo of Troy Grisa
        Bottom Left: Photo of Aileen Lawlor by Jerimiah Johnston
        Bottom Middle: Photo of Xander Paris
        Bottom Right: Photo of Dyami Kaplan`,
        links: {}
    },
    "19-shane-aronson": {
        slug: "19-shane-aronson",
        episodeNumber: 19,
        date: "2024-04-17",
        title: "Orbit Design with Shane Aronson",
        shortTitle: "Orbit Design",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 19- Designing Orbits with Shane Aronson.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 19 Orbit Design with Shane Aronson cover image.png",
        intervieweeName: "Shane Aronson",
        description: `Shane Aronson has been an orbiter for over 5 years, and founded Stoneorbits at 22 years old. He also has been designing orbits for about 4 years, is self taught and uses 3D printers, design, coding, and hand assembly to make his products! You can check out and order his designs on stoneorbits.com, and see pictures on his social media channels included in the show notes.

        Website and links below:
        [[https://www.instagram.com/stoneorbits]]
        [[https://www.facebook.com/StoneOrbits]]
        [[https://stoneorbits.com]]
        [[https://www.youtube.com/channel/UCeVWbBifXyq0NBhfhL3dXoQ]]`,
        links: {
            "https://www.instagram.com/stoneorbits": "https://www.instagram.com/stoneorbits",
            "https://www.facebook.com/StoneOrbits": "https://www.facebook.com/StoneOrbits/",
            "https://stoneorbits.com": "https://stoneorbits.com/",
            "https://www.youtube.com/channel/UCeVWbBifXyq0NBhfhL3dXoQ": "https://www.youtube.com/channel/UCeVWbBifXyq0NBhfhL3dXoQ"
        }
    },
    "20-kevin-axtell": {
        slug: "20-kevin-axtell",
        episodeNumber: 20,
        date: "2024-04-17",
        title: "Fire Magic with Kevin Axtell",
        shortTitle: "Fire Magic",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 20- Fire Magic with Kevin Axtell.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 20 Fire Magic with Kevin Axtell Cover Image.png",
        intervieweeName: "Kevin Axtell",
        description: `Kevin Axtell is now in his 21st year of juggling, flow, and fire arts. His past and present credits include: Board Member at the International Jugglers Association, partner at the Flow Arts Institute, general manager of the FireDrums Festival, founder and director of Club Congress, co-founder of Club Motion Juggling and Club Fest, and co-founder and director of The Firewalking Center.

        In addition to being an accomplished juggler and fire performer, Kevin also carries the title of “Master Firewalking Instructor” and is known around the world as a dynamic motivator and educator.

        Websites:
        [[https://thefirewalkingcenter.com]]
        [[https://www.clubmotionjuggling.com]]
        [[https://flowartsinstitute.com]]
        [[https://www.kevinaxtell.com]]

        Instagram: [[https://www.instagram.com/propartistry]]
        TikTok: @fireartistry`,
        links: {
            "https://thefirewalkingcenter.com": "https://thefirewalkingcenter.com/",
            "https://www.clubmotionjuggling.com": "https://www.clubmotionjuggling.com/",
            "https://flowartsinstitute.com": "https://flowartsinstitute.com/",
            "https://www.kevinaxtell.com": "https://www.kevinaxtell.com",
            "https://www.instagram.com/propartistry": "https://www.instagram.com/propartistry",
        }
    },
    "21-josie-mae": {
        slug: "21-josie-mae",
        episodeNumber: 21,
        date: "2024-04-17",
        title: "Women in Juggling with Josie Mae",
        shortTitle: "Women in Juggling",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 21- Women in Juggling with Josie Mae.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 21 Women in Juggling with Josie Mae Widescreen.png",
        intervieweeName: "Josie Mae",
        description: `Josie Mae is a contemporary circus artist and social circus educator specializing in club juggling and manipulation. They are coordinator and coach with The Voice Project - a youth training company that uses circus as an inquiry for social justice and systemic oppression - an extension of The Circus Project’s Pathways programming. Her passion for this work utilizes community organization, trauma-informed practices, and a holistic and intersectional educational lens. They have served on the International Jugglers Association (IJA) board and is the current World Juggling Day program director. They’ve also gone on tour with Clowns Without Borders - USA.

        Connect with Josie even more and stay up to date with her creations:
        Website - [[www.josiejuggles.com]]
        Instagram - [[https://www.instagram.com/josiejuggles]]
        Facebook- [[https://www.facebook.com/josiejuggles]]
        [[https://www.facebook.com/jugglearoundtheworld]]`,
        links: {
            "www.josiejuggles.com": "https://www.josiejuggles.com",
            "https://www.instagram.com/josiejuggles": "https://www.instagram.com/josiejuggles",
            "https://www.facebook.com/josiejuggles": "https://www.facebook.com/josiejuggles",
            "https://www.facebook.com/jugglearoundtheworld": "https://www.facebook.com/jugglearoundtheworld"
        }
    },
    "22-sage-jacote": {
        slug: "22-sage-jacote",
        episodeNumber: 22,
        date: "2024-04-17",
        title: "Sacred Fire with Sage Jacote",
        shortTitle: "Sacred Fire",
        description: `Dancing with fire and light for over 20 years, Sage Jacote has changed the flow arts world as we know it, by teaching, performing, and inspiring around the world. She is the Founder and Artists Director of Sangre Del Sol, the longest operating fire and LED troupe in Austin, Texas.

        She has also applied her skills in directing, producing, dancing, and choreographing for not only Sangre Del Sol but another Texas-based fire troop Solar Rain. With a background in Hip Hop, West African, Middle Eastern, Belly Dance, Tai Chi, and Salsa she likes to fuse these into her innovative fire and light tools and pyrotechnic effects to push the boundaries of modern dance performance.

        Years ago, Sage entered international flow art spinning contests through Home of Poi and upon winning this contest the director was so touched by her entry that he invited her to film an interview and feature more of her fire dancing and knowledge on an instructional video that is still widely used with fire dancers all over the globe today. She has also been featured in such videos as “Circles of Light 2”, “The Fire All-stars Vol 1'' and “Encyclo Poi Dia” and has been flown to many fire festivals to be a judge or a teacher.

        Websites:
        [[https://www.sangredelsol.us]]
        [[https://www.solarraintx.com]]

        Instagram:
        [[https://www.instagram.com/sangre_del_sol]]
        [[https://www.instagram.com/solarraintx]]

        Facebook:
        [[https://www.facebook.com/sangredelsol]]
        [[https://www.facebook.com/SolarRainTX]]

        Twitter:
        [[https://twitter.com/SolarRainTx]]
        [[https://twitter.com/sangredelsol]]

        YouTube:
        [[https://www.youtube.com/user/SangreDelSol/featured]]
        [[https://www.youtube.com/channel/UCDv0GZ_218O573Xs_Q4T59w]]`,
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 22- Sacred Fire with Sage Jacote.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 22 Sacred Fire with Sage Jacote Widescreen.png",
        intervieweeName: "Sage Jacote",
        links: {
            "https://www.sangredelsol.us": "https://www.sangredelsol.us/",
            "https://www.solarraintx.com": "https://www.solarraintx.com/",
            "https://www.instagram.com/sangre_del_sol": "https://www.instagram.com/sangre_del_sol/",
            "https://www.instagram.com/solarraintx": "https://www.instagram.com/solarraintx",
            "https://www.facebook.com/sangredelsol": "https://www.facebook.com/sangredelsol",
            "https://www.facebook.com/SolarRainTX": "https://www.facebook.com/SolarRainTX",
            "https://twitter.com/SolarRainTx": "https://twitter.com/SolarRainTx",
            "https://twitter.com/sangredelsol": "https://twitter.com/sangredelsol",
            "https://www.youtube.com/user/SangreDelSol/featured": "https://www.youtube.com/user/SangreDelSol/featured",
            "https://www.youtube.com/channel/UCDv0GZ_218O573Xs_Q4T59w": "https://www.youtube.com/channel/UCDv0GZ_218O573Xs_Q4T59w"
        }
    },
    "23-krystin-railing": {
        slug: "23-krystin-railing",
        episodeNumber: 23,
        date: "2024-04-17",
        title: "Flow with your Business with Krystin Railing",
        shortTitle: "Flow with your Business",
        description: `Krystin Railing is a classically trained dancer and a professionally trained circus performer and has performed across the United States and internationally as a professional juggler and hula hooper.

        Performing hula hoops since 2009, she has appeared at Seaport Village Buskers Festival, the Fringe Festival, The House of Blues, and on Norwegian Cruise Lines, among other venues. She has been featured on numerous news programs, late-night talk shows, magazines, newspapers, and blogs for her incredible skills.

        In 2011, Krystin created Circus Mafia, an International Talent Agency for Circus performers, to support the careers of over 100 circus performers on 3 continents including North America, Europe, and Australia.

        In addition to her performance experience, she was the Communications Director for the International Jugglers Association in 2019 and is a certified Firewalking Instructor and Empowerment Coach through The Firewalking Center.

        In 2019, Krystin founded the Performer’s Guide, a Business Coaching and Mentorship program that is designed for professional performers who are looking to take their career to the next level.

        Stay in contact on social media!
        Instagram: [[https://www.instagram.com/theperformersguide]]
        Facebook: [[https://www.facebook.com/theperformersguide]]
        Website: [[https://krystinrailing.com/the-performers-guide]]`,
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 23 USE VIDEO VERSION- Flow With Your Business with Krystin Railing.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 23 Flow with your Business with Krystin Railing.png",
        intervieweeName: "Krystin Railing",
        links: {
            "https://www.instagram.com/theperformersguide": "https://www.instagram.com/theperformersguide/",
            "https://www.facebook.com/theperformersguide": "https://www.facebook.com/theperformersguide",
            "https://krystinrailing.com/the-performers-guide": "https://krystinrailing.com/the-performers-guide/"
        }
    },
    "24-liz-knights": {
        slug: "24-liz-knights",
        episodeNumber: 24,
        date: "2024-04-17",
        title: "Performance Perspectives with Liz Knights",
        shortTitle: "Performance Perspectives",
        description: `Liz Knights is an avid flow artist specializing in poi, buugeng and hooping.  She has taught at numerous flow festivals, organized the Ladies of Tech Poi collaboration series, and has recently been getting into teaching private online poi lessons.

        In non-pandemic-times, she runs a Boston-based entertainment company, Cirque de Light, specializing in fire, LED, and circus performance and is also a bookings manager for the Boston Circus Guild.  When she’s not busy spinning she can be found sewing sparkly costumes and doing her best to keep her two cats away from those sparkly costumes.

        Stay up to date with Liz by following her on social media and checking out her previous work!

        Website: [[https://www.cirquedelight.com]]
        Instagram: [[https://www.instagram.com/cirquedelight]]
        Facebook:
        [[https://www.facebook.com/BostonCircusGuild]]
        [[https://www.facebook.com/cirquedelight]]
        YouTube: [[https://www.youtube.com/channel/UCFWmabsoiuOWJ3Dmsx_MgtA]]`,
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 24 USE VIDEO VERSION- Performance Perspectives with Liz Knights.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 24 Performance Perspectives with Liz Knights Widescreen.jpg",
        intervieweeName: "Liz Knights",
        links: {
            "https://www.cirquedelight.com": "https://www.cirquedelight.com/",
            "https://www.instagram.com/cirquedelight": "https://www.instagram.com/cirquedelight/?hl=en",
            "https://www.facebook.com/BostonCircusGuild": "https://www.facebook.com/BostonCircusGuild",
            "https://www.facebook.com/cirquedelight": "https://www.facebook.com/cirquedelight",
            "https://www.youtube.com/channel/UCFWmabsoiuOWJ3Dmsx_MgtA": "https://www.youtube.com/channel/UCFWmabsoiuOWJ3Dmsx_MgtA"
        }
    },
    "25-morgan-dolginow": {
        slug: "25-morgan-dolginow",
        episodeNumber: 25,
        date: "2024-04-17",
        title: "Inside Look at the Art of Flow with Morgan",
        shortTitle: "Inside Look at the Art of Flow",
        // TODO where is audio?
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 24 USE VIDEO VERSION- Performance Perspectives with Liz Knights.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 25 An Inside Look at The Art of Flow with Morgan.png",
        intervieweeName: "Morgan Dolginow",
        description: `Learn about myself, the creator of the Art of Flow, as we take a deep dive into the history of the podcast, a look at why it exists, and contemplate where it is going!

        My name is Morgan, and my mission in life is to promote positive change via connections. I have utilized my passion for storytelling to collect and share individuals' stories and passions in creative and collaborative ways. In the past, I have worked on nonprofit communications, documentaries, and commercial video productions. I have also worked directly with youth in various mentoring roles, from one-on-one counseling sessions with at-risk high school students to working as a youth wilderness outdoor instructor, and as an in-school Registered Behavior Technician, which has helped hone my communication skills.`,
        links: {}
    },
    "26-samwise": {
        slug: "26-samwise",
        episodeNumber: 26,
        date: "2024-04-17",
        title: "Sacred Geometry with Samwise",
        shortTitle: "Sacred Geometry",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 26 USE VIDEO VERSION- Sacred Geometry with Samwise Clark.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 26 Sacred Geometry with Samwise Clark.png",
        intervieweeName: "Samwise",
        description: `Samwise is a Flow Artist, geometer (specialist in geometry- earth measurer) and prop smith going on 10 years. Years of wanderlust, had him crossing the United States dozens of times, equipping, teaching, and learning from the many flow artists across the country. He's finally settled down to call the Bay Area his home, living his dream of being a professional propsmith at the Flowtoys workshop.

        Get in contact with Samwise on:
        Instagram - [[@pureunviersalflow]]
        Faceboook- [[https://www.facebook.com/pureuniversalflow]]
        Youtube: [[pureuniversalflow]]

        Samwise also created Poi Project, a Facebook group that has the one rule of you can only post poi videos of someone other than yourself! This project works to create community by focusing the sharing on what inspires, rather than on ego.
        Poi Project- [[https://www.facebook.com/groups/959248611114965]]

        Videos and Artists Mentioned in the Interview:
        Jesse Bowen Poi Piece to Little Secrets - [[https://www.youtube.com/watch?v=sqv7k3BZCuY]]`,
        links: {
            "@pureunviersalflow": "https://www.instagram.com/pureuniversalflow/",
            "https://www.facebook.com/pureuniversalflow": "https://www.facebook.com/pureuniversalflow",
            "pureuniversalflow": "https://www.youtube.com/@samclark5664",
            "https://www.facebook.com/groups/959248611114965": "https://www.facebook.com/groups/959248611114965",
            "https://www.youtube.com/watch?v=sqv7k3BZCuY": "https://www.youtube.com/watch?v=sqv7k3BZCuY"
        }
    },
    "27-diversity-equity-inclusion-flow-arts": {
        slug: "27-diversity-equity-inclusion-flow-arts",
        episodeNumber: 27,
        date: "2024-04-17",
        title: "Diversity, Equity, and Inclusion in the Flow Arts with Dallys Newton, Michalla Moss, and Vertel Jackson",
        shortTitle: "Diversity, Equity, and Inclusion in the Flow Arts",
        // TODO where is audio?
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 26 USE VIDEO VERSION- Sacred Geometry with Samwise Clark.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 27 Diversity, Equity, and Inclusion in the Flow Arts with Dallys Newton, Michalla Moss, and Vertel Jackson Widescreen.jpg",
        intervieweeName: "Dallys Newton, Michalla Moss, and Vertel Jackson",
        description: `Listen to a discussion between Dallys Newton, Michalla Moss, and Vertel Jackson, in which we discuss how to embrace more diversity, equity, and inclusion in the flow arts community! Each of these artists came together across different states and countries to discuss challenges the Flow Arts Community is facing, racism, sexism, ableism, and suggestions for how we can address these issues. Please keep reading to check out their bios, contact information, and community projects mentioned in the episode.

        Dallys Newton has been dazzling audiences across the country since 2011 with her unique stage acts and roaming characters.  She is known for her captivating stage presence and her commitment to excellence. Dally is a World-class Fire and LED performer who stilt-walks, juggles, hoops, clowns, aerial hoops, and more.

        Website- [[https://dallyscircus.com]]
        Facebook- [[https://www.facebook.com/dallys.newton]]
        Youtube (Live Streams can be found here!)- [[https://www.youtube.com/channel/UCna-838jXBMCJOYDuWo-1jQ]]

        Community Project Mentions:
        Guardians of the Vibe (bystander intervention and consent education nonprofit )- [[https://www.guardiansofthevibe.com]] 
        Follow on FB to find about upcoming events: [[https://www.facebook.com/guardiansofthevibe]]

        Michalla Moss shares that movement has always been an integral activity in their life. As a young child, she took various dance classes and felt a deep connection to music, movement, and prop manipulation. It first came to them as a tool to express and find joy. Michalla swiftly fell in love with the art of Single Hoop Manipulation. What she thought to be her forever-and-only- prop was just the beginning of a lifelong venture in Dance, Flow Arts (Prop manipulation), and Circus Arts!

        Website- [[gemstonedentertainment.com]]
        Instagram - [[https://www.instagram.com/gemstoned94]]
        Facebook- [[https://www.facebook.com/Gemstoned94]]
        TikTok- @lovemichallalynn 

        Community Project Mentions: [[https://www.facebook.com/FlowTherapyForTheCulture]]
        Fund the Flowarts (Flowtoys)
        SoulMind Studios

        Vertel Jackson has been a movement artist since birth. From jumping on couches to gaining the nickname “Rabbit,” to his imaginative soul; he has always preferred finding the endless possibilities of what his mind and others can collaboratively produce. He has been practicing flow arts since 2013 and uses it as a way to express himself and to work off daily frustrations and stress “adulting” has brought with it. Although flow arts performing is seen as more of a hobby than a profession he focuses on integrating more flow arts into his daily career as a Content Producer. He makes videos that focus on the arts and highlight diverse communities. Currently, he resides in Berlin getting established and tuning in to a new pace of life as an ex-pat.  

        Website- [[verteljackson.com]] 
        Instagram - [[https://www.instagram.com/___vertel]]
        Facebook- [[facebook.com/vertelj]] 
        Twitter- @___vertel 
        TikTok- @verteljackson`,
        links: {
            "https://dallyscircus.com": "https://dallyscircus.com/",
            "https://www.facebook.com/dallys.newton": "https://www.facebook.com/dallys.newton",
            "https://www.youtube.com/channel/UCna-838jXBMCJOYDuWo-1jQ": "https://www.youtube.com/channel/UCna-838jXBMCJOYDuWo-1jQ",
            "https://www.guardiansofthevibe.com": "https://www.guardiansofthevibe.com/",
            "https://www.facebook.com/guardiansofthevibe": "https://www.facebook.com/guardiansofthevibe",
            "gemstonedentertainment.com": "http://www.gemstonedentertainment.com/",
            "https://www.instagram.com/gemstoned94": "https://www.instagram.com/gemstoned94/",
            "https://www.facebook.com/Gemstoned94": "https://www.facebook.com/Gemstoned94",
            "https://www.facebook.com/FlowTherapyForTheCulture": "https://www.facebook.com/FlowTherapyForTheCulture",
            "https://www.instagram.com/___vertel": "https://www.instagram.com/___vertel",
            "verteljackson.com": "https://verteljackson.com",
            "facebook.com/vertelj": "https://facebook.com/vertelj",
            "Website": "https://www.guardiansofthevibe.com/",
        }
    },
    "28-srikanta-barefoot": {
        slug: "28-srikanta-barefoot",
        episodeNumber: 28,
        date: "2024-04-17",
        title: "Full-Time Performance with Srikanta Barefoot",
        shortTitle: "Full-Time Performance",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 28 USE VIDEO VERSION - A Fire Artist_s Journey with Srikanta Barefoot.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 28 Full Time Performance with Srikanta Barefoot Widescreen.jpg",
        intervieweeName: "Srikanta Barefoot",
        description: `Srikanta Barefoot has a breadth of experience in Circus, Theater & Dance. He boasts an extensive performance history, including 3 years and over 700 shows as the Featured Fire Dancer, Fire Dance Coach & Lead Character for the Cirque du Soleil. Regarded as a leading figure in fire dance, Srikanta teaches workshops & retreats and has published an instructional video series on Dancing with the Fire Staff. He performs a variety of circus disciplines including cyr wheel, cube, clown, body percussion, boleadoras des percussion… and is ever in pursuit of his latest muse.

        His company, Fusion Arts, is based in the South of France, where Srikanta works as Artistic Director, Choreographer & Performer. He also designs & sells custom-made, professional fire gear including poi, ropes & titanium fire staffs.

        As a fan of The Art of Flow, enjoy a 25% discount on Srikanta's custom-made fire tools & instructional videos for a limited time! Visit The Fusion Arts Shop & use the discount code: artofflowrocks

        Connect with Srikanta online!
        Website: [[https://fusion-arts.com]]
        Facebook: [[https://www.facebook.com/fusionartsfrance]]
        [[https://www.facebook.com/groups/DanceBasedFireDance]]
        Instagram: [[https://www.instagram.com/fusionartsfrance]]`,
        links: {
            "https://fusion-arts.com": "https://fusion-arts.com/",
            "https://www.facebook.com/fusionartsfrance": "https://www.facebook.com/fusionartsfrance",
            "https://www.facebook.com/groups/DanceBasedFireDance": "https://www.facebook.com/groups/DanceBasedFireDance",
            "https://www.instagram.com/fusionartsfrance": "https://www.instagram.com/fusionartsfrance"
        }
    },
    "29-glenn": {
        slug: "29-glenn",
        episodeNumber: 29,
        date: "2024-04-17",
        title: "Making the Best Sticks with Glenn",
        shortTitle: "Making the Best Sticks",
        description: `Glenn created the flower sticks we know today in 1987 by using the concept of flop to make tassels/fringes, and shared these designs with as many people as possible who were curious, making this innovation a part of the public domain! 

        Listen to this episode about the time before: the best of sticks, flow arts was a name for prop manipulation and play with objects while in the flow state, and when innovation came out of breaking things.`,
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 29 USE VIDEO VERSION - Making the Best Sticks with Glenn.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 29 Making the Best Sticks with Glenn Widescreen.jpg",
        intervieweeName: "Glenn",
        links: {}
    },
    "30-dr-kate-riegle-van-west": {
        slug: "30-dr-kate-riegle-van-west",
        episodeNumber: 30,
        date: "2024-04-17",
        title: "Poi Health Benefits with Dr. Kate Riegle van West",
        shortTitle: "Poi Health Benefits",
        description: `Learn about the health benefits of poi with Dr. Kate Riegle van West!

        Dr. Kate is a scientist, artist, and entrepreneur with a passion for play and wellbeing founded SpinPoi. Kate completed her PhD in the health benefits of poi at the University of Auckland, where she conducted the first study to scientifically investigate the effects of poi on physical and cognitive function. She was awarded the Future Leader Award from the Royal Society of New Zealand and the Best Doctoral Thesis Award for her work in the poi/health field. SpinPoi is a social enterprise dedicated to improving health and wellbeing through poi. SpinPoi supports individuals and organizations across the globe with evidence-based poi programs, specializing in improving quality of life for seniors, and has been featured across international media including BBC World News, ABC News, TVNZ 1 News, and Maori Television.

        Connect with Dr. Kate online!
        Website: [[www.spinpoi.com]]
        Facebook: [[https://www.facebook.com/SpinPoi]]
        Instagram: [[https://www.instagram.com/spinpoi]]
        Twitter: [[https://twitter.com/SpinPoi]]
        YouTube: [[https://www.youtube.com/c/SpinPoi]]
        LinkedIn: [[https://www.linkedin.com/in/spinpoi]]
        Patreon: [[https://www.patreon.com/spinpoi]]`,
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 30 USE VIDEO VERSION - Poi Health Benefits with Kate Riegle van West.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 30 Poi_s Health Benefits with Dr. Kate Riegle van West Widescreen.jpg",
        intervieweeName: "Dr. Kate Riegle van West",
        links: {
            "www.spinpoi.com": "https://www.spinpoi.com",
            "https://www.facebook.com/SpinPoi": "https://www.facebook.com/SpinPoi",
            "https://www.instagram.com/spinpoi": "https://www.instagram.com/spinpoi",
            "https://twitter.com/SpinPoi": "https://twitter.com/SpinPoi",
            "https://www.youtube.com/c/SpinPoi": "https://www.youtube.com/c/SpinPoi",
            "https://www.linkedin.com/in/spinpoi": "https://www.linkedin.com/in/spinpoi",
            "https://www.patreon.com/spinpoi": "https://www.patreon.com/spinpoi"

        }
    },
    "31-jeremiah-johnston": {
        slug: "31-jeremiah-johnston",
        episodeNumber: 31,
        date: "2024-04-17",
        title: "Touring with Jeremiah Johnston",
        shortTitle: "Touring",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 31 USE VIDEO VERSION - Touring with Jeremiah Johnston.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 31 Touring with Jeremiah Johnston Widescreen.jpg",
        intervieweeName: "Jeremiah Johnston",
        description: `Jeremiah Johnston juggles a lot, both literally and figuratively! Jeremiah has won the bronze medal at the 2009 International Jugglers’ Association's annual competition and returned in 2013 to win his second bronze medal in team juggling with his friends in Mountain Motion. He tours around the country at private events, fairs, and in performance halls with LEDs or fire, juggling balls, clubs, blocks, poi, diabolo, and more. An engaging and accomplished performer, he also teaches juggling to adults and kids alike.

        Connect with Jeremiah online!
        Website: [[http://www.thethrowzone.com]]
        Facebook: [[https://www.facebook.com/thethrowzone]]
        Instagram: [[https://www.instagram.com/thethrowzone]]
        YouTube: [[https://www.youtube.com/user/jeremiahthejuggler]]

        Artists Mentioned in the Interview:
        Gandini Juggling Project
        Shao
        The Flying Karamazov Brothers`,
        links: {
            "http://www.thethrowzone.com": "http://www.thethrowzone.com",
            "https://www.facebook.com/thethrowzone": "https://www.facebook.com/thethrowzone",
            "https://www.instagram.com/thethrowzone": "https://www.instagram.com/thethrowzone",
            "https://www.youtube.com/user/jeremiahthejuggler": "https://www.youtube.com/user/jeremiahthejuggler",
        }
    },
    "32-chris-garcia": {
        slug: "32-chris-garcia",
        episodeNumber: 32,
        date: "2024-04-17",
        title: "Diabolo with Chris Garcia",
        shortTitle: "Diabolo",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 32 USE VIDEO VERSION - Diabolo with Chris Garcia.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 32 Diabolo with Chris Garcia Widescreen image.jpg",
        intervieweeName: "Chris Garcia",
        description: `Chris Garcia, aka Draco the Juggler, is a San Francisco Bay Area-born juggler. He found his passion for juggling beginning in 2003 in high school through the juggling club advised by well-known juggler and Japanese teacher Matt Hall. Chris likes to practice many forms of juggling and especially likes playing with the diabolo ('Chinese yoyo'). Through his juggling career, he's traveled to many different countries, performed at a wide variety of shows and events, and has also taught thousands of people to juggle. Outside of his juggling career, Chris is also a video game developer and coder, and finds the two separate careers have some interesting similarities through the art and psychology of play.
        
        Connect with Chris online by visiting his:
        Website: [[http://www.dracothejuggler.com]]
        Facebook: [[https://www.facebook.com/DracoTheJuggler]]
        Instagram: [[https://www.instagram.com/DracoTheJuggler]]
        Twitter: [[https://twitter.com/DracoTheJuggler]]
        YouTube: [[https://www.youtube.com/DracoTheJuggler]]
        Twitch: [[https://www.twitch.tv/dracothejuggler]]
        
        Videos, Artists, or Community Projects Mentioned in the Interview:
        Matt Hall: [[https://www.instagram.com/jugglesensei]]
        Wes Peden: [[https://www.youtube.com/c/wespeden]]
        Alexis Levillon: [[https://www.youtube.com/user/grums59]]
        Pen Zen: [[https://www.youtube.com/channel/UC_U3YoTmJAVyqVy0OieVNvw]]
        The Mad French Posse: [[http://www.artofdiabolo.com/index.php]]
        Planet Diabolo (Nico Pires): [[https://www.planet-diabolo.com]]
        Diabolo.ca Community: [[https://diabolo.ca]]`,
        links: {
            "http://www.dracothejuggler.com": "http://www.dracothejuggler.com",
            "https://www.facebook.com/DracoTheJuggler": "https://www.facebook.com/DracoTheJuggler",
            "https://www.instagram.com/DracoTheJuggler": "https://www.instagram.com/DracoTheJuggler",
            "https://twitter.com/DracoTheJuggler": "https://twitter.com/DracoTheJuggler",
            "https://www.youtube.com/DracoTheJuggler": "https://www.youtube.com/DracoTheJuggler",
            "https://www.twitch.tv/dracothejuggler": "https://www.twitch.tv/dracothejuggler",
            "https://www.instagram.com/jugglesensei": "https://www.instagram.com/jugglesensei",
            "https://www.youtube.com/c/wespeden": "https://www.youtube.com/c/wespeden",
            "https://www.youtube.com/user/grums59": "https://www.youtube.com/user/grums59",
            "https://www.youtube.com/channel/UC_U3YoTmJAVyqVy0OieVNvw": "https://www.youtube.com/channel/UC_U3YoTmJAVyqVy0OieVNvw",
            "http://www.artofdiabolo.com/index.php": "http://www.artofdiabolo.com/index.php",
            "https://www.planet-diabolo.com": "https://www.planet-diabolo.com",
            "https://diabolo.ca": "https://diabolo.ca"
        }
    },
    "33-arlene-smith-bj-burg": {
        slug: "33-arlene-smith-bj-burg",
        episodeNumber: 33,
        date: "2024-04-17",
        title: "Creating a Flow Arts Collective with Arlene Smith and BJ Burg",
        shortTitle: "Flow Arts Collective",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 33 USE VIDEO VERSION - Creating a Flow Arts Collective with Arlene Smith and BJ Burg.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 33 Creating a Flow Arts Collective with Arlene and BJ Widescreen.jpg",
        intervieweeName: "Arlene Smith and BJ Burg",
        description: `In this episode, I chat with BJ Burg and Arlene Smith as we dive into discussing the creation of a Flow Arts Collective! Discover how this happened, what were the challenges, advice from the founders for folks wanting to create their own flow arts or art collective nonprofits, and much more.

        BJ Burg (they/them) is a poi spinner, fire dancer, videographer, instructor, performer, and jack-of-all-trades for Seattle Flow Arts Collective. Outside of flow arts, they enjoy learning to dance, discovering local artists, building LEGOs, listening to music, and parenting little children in central Seattle. Professionally, they work as a researcher, project manager, and software engineer for a large company.
        
        Arlene Smith is a Seattle-based circus artist and community organizer who loves sharing her enthusiasm for movement, play, and self-expression with those around her. She is Executive Director and Co-founder of Seattle Flow Arts Collective, which grew out of her work organizing a weekly flow jam and workshop space called FlowShop. Her first prop love was poi, but you can most often find her hooping, roller skating, or juggling (and sometimes all three!).
        
        Connect with BJ and Arlene online by visiting:
        BJ: [[https://www.instagram.com/brainfreezyflow]]
        Arlene: [[https://www.instagram.com/arrrlene_s]]
        Website: [[https://seattleflowarts.org]]
        Facebook: [[https://www.facebook.com/seattleflowarts]]
        Instagram: [[https://www.instagram.com/seattle.flow.arts]]
        YouTube: [[https://www.youtube.com/channel/UCYdyvJBkmGa8IWaSuEeq-Gw]]`,
        links: {
            "https://www.instagram.com/brainfreezyflow": "https://www.instagram.com/brainfreezyflow",
            "https://www.instagram.com/arrrlene_s": "https://www.instagram.com/arrrlene_s",
            "https://seattleflowarts.org": "https://seattleflowarts.org",
            "https://www.facebook.com/seattleflowarts": "https://www.facebook.com/seattleflowarts",
            "https://www.instagram.com/seattle.flow.arts": "https://www.instagram.com/seattle.flow.arts",
            "https://www.youtube.com/channel/UCYdyvJBkmGa8IWaSuEeq-Gw": "https://www.youtube.com/channel/UCYdyvJBkmGa8IWaSuEeq-Gw"
        }
    },
    "34-mari-hercher": {
        slug: "34-mari-hercher",
        episodeNumber: 34,
        date: "2024-04-17",
        title: "Taking the Stage with Mari Hercher",
        shortTitle: "Taking the Stage",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 34 USE VIDEO VERSION - Mari Hercher Taking The Stage.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 34 Taking the Stage with Mari Hercher cover image.png",
        intervieweeName: "Mari Hercher",
        description: `Mari Hercher is a 26-year-old flow artist and doctor of physical therapy student. She is based in San Francisco but will be relocating back to her hometown of Los Angeles this spring to finish out her final rotation in school as well as dive headfirst into a new set of flow arts projects. Her first prop was rope dart, but she has since fallen in love with hooping, fans, and meteor dart. Mari has a profound appreciation for the capabilities of the human body and has a goal of facilitating healing by helping people understand their bodies through flow in its many forms.

        Connect with Mari online by visiting:
        Instagram: [[https://www.instagram.com/marihercher]]
        
        Watch Lumia Dance Company's Nutcracker from the comfort of home! [[https://www.eventbrite.com/e/lumia-dance-company-presents-a-nutcracker-story-tickets-219319379167]]
        
        Mentioned Companies and Performance Groups: [[https://www.lumiadancecompany.com]]
        [[https://www.instagram.com/thefiremingos]]
        `,
        links: {
            "https://www.instagram.com/marihercher": "https://www.instagram.com/marihercher",
            "https://www.eventbrite.com/e/lumia-dance-company-presents-a-nutcracker-story-tickets-219319379167": "https://www.eventbrite.com/e/lumia-dance-company-presents-a-nutcracker-story-tickets-219319379167",
            "https://www.lumiadancecompany.com": "https://www.lumiadancecompany.com",
            "https://www.instagram.com/thefiremingos": "https://www.instagram.com/thefiremingos"
        }
    },
    "35-bunny-holmes": {
        slug: "35-bunny-holmes",
        episodeNumber: 35,
        date: "2024-04-17",
        title: "Rocky Horror Circus Show with Bunny Holmes",
        shortTitle: "Rocky Horror Circus Show",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 35 USE VIDEO VERSION - Rocky Horror Circus Show with Bunny Holmes.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 35 Rocky Horror Circus Show with Bunny Holmes.png",
        intervieweeName: "Bunny Holmes",
        description: `In this episode with Bunny Holmes, discover an inside look at the workings of a family-style circus troupe, The Vespertine Circus, and their latest production - The Rocky Horror Circus Show!

        Bunny Holmes has been casting and putting on shows since preschool – first plays for the neighbors, then DIY dance recitals for friends from school, and by fourth grade, she was enrolled in before-school choir, after-school drama classes, and briefly missed school outright because she was touring as a toy-soldier in a youth ensemble Nutcracker Ballet. In high school, she started street performing around tourist attractions in San Francisco as a living statue.
        
        Alongside circus & performing arts, Bunny studied music history, humanistic psychology, and religious studies at UCSC. There she gained a reputation for coordinating large all-ages events both on and off-campus – often designed with an absurd, whimsical or humorous concept. Needless to say, her love of the stage has never diminished and when she told her friends she was going to start a circus, they believed her and some joined the cause.
        
        Connect with Bunny online by visiting:
        Website: [[http://www.vespertinecircus.com]]
        Facebook: [[https://www.facebook.com/vespertinecircus]]`,
        links: {
            "http://www.vespertinecircus.com": "http://www.vespertinecircus.com",
            "https://www.facebook.com/vespertinecircus": "https://www.facebook.com/vespertinecircus"
        }
    },
    "36-vojta-stolbenko": {
        slug: "36-vojta-stolbenko",
        episodeNumber: 36,
        date: "2024-04-17",
        title: "Flow Arts Community with Vojta Stolbenko",
        shortTitle: "Flow Arts Community",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 36 USE VIDEO VERSION - Flow Arts Community with Vojta Stolbenko.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 36 Flow Arts Community with Vojta Stolbenko.png",
        intervieweeName: "Vojta Stolbenko",
        description: `Vojta is a flow artist, filmmaker, musician, and circus artist based in Prague. Professionally performing since 2008, Vojta has performed worldwide, both alone and in collaboration with groups such as Fusion Arts, Phoenix Fire Dancers, SuperCho Company, and the Mandalights company to name a few. Vojta has completed several artists and teaching residencies and creates visually stunning flow and performance videos for himself and clients, that evoke emotion and highlight movement in a dynamic way. Vojta is a dance instructor for poiretreat.com and has run 14 retreats! He is the main organizer of the Roztoč fest, a circus festival in Prague which is entering its 9th year. When he is not teaching, performing, or filming, he also drums and creates music!

        Connect with Vojta online by visiting:
        Websites: [[www.vojtastolbenko.com]]
                           [[https://vojtafilms.com]]
        Learning Platforms: [[www.poitutorials.com]]
        Patreon: [[www.patreon.com/vojtapoi]]
        Instagram: [[http://instagram.com/vojtastolbenko]] 
        Facebook: [[https://www.facebook.com/vojta.stolbenko]]`,
        links: {
            "www.vojtastolbenko.com": "www.vojtastolbenko.com",
            "https://vojtafilms.com": "https://vojtafilms.com",
            "www.poitutorials.com": "www.poitutorials.com",
            "www.patreon.com/vojtapoi": "www.patreon.com/vojtapoi",
            "http://instagram.com/vojtastolbenko": "http://instagram.com/vojtastolbenko",
            "https://www.facebook.com/vojta.stolbenko": "https://www.facebook.com/vojta.stolbenko"
        }
    },
    "37-otillia-ward": {
        slug: "37-otillia-ward",
        episodeNumber: 37,
        date: "2024-04-17",
        title: "Healing with Flow Arts with Otillia Ward",
        shortTitle: "Healing with Flow Arts",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 37 USE VIDEO VERSION - Healing With Flow Arts with Otillia Ward.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 37 Healing with Flow Arts with Otillia Widescreen.jpg",
        intervieweeName: "Otillia Ward",
        description: `In this episode, Otillia Ward discusses healing with the flow arts, both physically and mentally.
        Otillia was born in South Africa and immigrated to the USA in 2004. She completed her Bachelors in San Francisco and discovered her love for hula hooping She believes flow arts is a joyful activity with health benefits both for the mind and body at any age. Otillia has been passionately hooping for a decade and wanted a recipe for success to elevate her practice and tap into the flow state. But she discovered a lot more about the universe, magic, and love. Otillia has taught and performed at various events, shows, and online in and around the Bay Area.
        
        Connect with Otillia online by visiting:
        Website: [[https://www.otilliahoops.com]]
        Patreon: [[https://www.patreon.com/otilliahoops]]
        Instagram: [[https://www.instagram.com/otilliahoops]]
        Facebook: [[https://www.facebook.com/otillia.plessis]]`,
        links: {
            "https://www.otilliahoops.com": "https://www.otilliahoops.com",
            "https://www.patreon.com/otilliahoops": "https://www.patreon.com/otilliahoops",
            "https://www.instagram.com/otilliahoops": "https://www.instagram.com/otilliahoops",
            "https://www.facebook.com/otillia.plessis": "https://www.facebook.com/otillia.plessis"
        }
    },
    "38-gabrielle-bonneville": {
        slug: "38-gabrielle-bonneville",
        episodeNumber: 38,
        date: "2024-04-17",
        title: "Artist’s Residencies with Gabrielle Bonneville",
        shortTitle: "Artist’s Residencies",
        audioSrc: "https://artofflow.s3.us-west-2.amazonaws.com/audio/Episode 38 USE VIDEO VERSION - Artist_s Residencies with Gabrielle Bonneville.mp3",
        imageSrc: "https://artofflow.s3.us-west-2.amazonaws.com/artwork/Ep 38 Artist_s Residencies with Gabrielle Bonneville.png",
        intervieweeName: "Gabrielle Bonneville",
        description: `In this episode with Gabrielle Bonneville, we discuss digital nomads and the global artist residencies of Momentom Collective.

        Gabrielle is a circus artist, lucid dreamer and serial entrepreneur. She believes in the power of arts as a catalyst for global change and self-actualization. She discovered from a young age that magic was real and that everything is seeded from the mind and propelled through habits. Co-Founder of Momentom Collective, she is now actively working on developing the world’s most mind-blowing artistic community, designed for radical autonomy, expansion of mind, connection to nature, and the safety of all beings. 
        
        Momentom was named the 2021 best investment for artists and digital nomads in Yahoo Finance News, due to their spectacular residencies. Momentom recently announced plans to expand its offerings to include a permanent residency in Costa Rica, providing a stable home and space to gather for artists, healers, and performers.
        
        Connect with Gabrielle online!
        Website: [[www.momentomcollective.com]]
        Facebook: [[https://www.facebook.com/Momentom-Collective-384816838382934]]
        Instagram: [[https://www.instagram.com/momentomcollective]]
        Vimeo: https://vimeo.com/237218129`,
        links: {
            "www.momentomcollective.com": "www.momentomcollective.com",
            "https://www.facebook.com/Momentom-Collective-384816838382934": "https://www.facebook.com/Momentom-Collective-384816838382934",
            "https://www.instagram.com/momentomcollective": "https://www.instagram.com/momentomcollective",
            "https://vimeo.com/237218129": "https://vimeo.com/237218129"
        }
    }
}