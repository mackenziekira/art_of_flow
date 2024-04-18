import { EPISODES } from "@/app/episodes";
import Image from "next/image";
import Link from "next/link";



export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
        <div className="flex flex-wrap justify-center gap-6">
            {Object.values(EPISODES).map(episode => {
                return <Link href={`/episodes/${episode.slug}`} key={episode.episodeNumber}>
                    <div className="w-[356px] rounded-3xl border-yellow-500 border-2">
                        <Image
                            className="rounded-t-3xl"
                            src={episode.image}
                            alt="image"
                            width={356}
                            height={200}
                            priority
                            style={{ maxHeight: 200 }}
                        />
                        <div className="p-4">
                            <p className="text-white text-sm pb-2 line-clamp-1">{episode.date}</p>
                            <p className="text-white text-3xl pb-1 line-clamp-1">{episode.shortTitle}</p>
                            <p className="text-white text-xl pb-3 line-clamp-1">{episode.intervieweeName}</p>
                            <p className="text-white text-l whitespace-pre-line line-clamp-3">{episode.description.replace(/<[^>]*>?/gm, '')}</p>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    </main>
}
