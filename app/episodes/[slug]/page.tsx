import { EPISODES } from "@/app/episodes";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

export default function Page({ params }: { params: { slug: string, } }) {
    const episode = EPISODES[params.slug]

    return <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
        <div className="w-1/2">
            <Image
                className="float-left pr-4 py-2"
                src={episode.image}
                alt="image"
                width={356}
                height={200}
                priority
            />
            <p className="text-white text-4xl pb-4">{episode.title}</p>
            <p className="text-white text-xl whitespace-pre-line pb-6">{episode.description}</p>
            <AudioPlayer src={episode.audioSrc} />
        </div>
    </main>
}



export async function generateStaticParams() {
    return Object.keys(EPISODES).map((slug) => ({ slug, }))
}