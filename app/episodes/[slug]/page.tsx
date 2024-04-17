import { EPISODES } from "@/app/episodes";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

export default function Page({ params }: { params: { slug: string, } }) {
    const episode = EPISODES[params.slug]

    return <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
        <div className="lg:w-1/2">
            <p className="text-white text-4xl pb-8 text-center">{episode.title}</p>
            <AudioPlayer src={episode.audioSrc} />
            <div className="pb-10" />
            <Image
                className="float-left pr-4 pb-4 rounded-3xl"
                src={episode.image}
                alt="image"
                width={356}
                height={200}
                priority
            />
            <p className="text-white text-xl whitespace-pre-line">{episode.description}</p>
        </div>
    </main>
}



export async function generateStaticParams() {
    return Object.keys(EPISODES).map((slug) => ({ slug, }))
}