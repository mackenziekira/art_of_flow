import { EPISODES } from "@/app/episodes";
import Image from "next/image";
import Link from "next/link";



export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
        <div className="w-1/2">
            {Object.values(EPISODES).map(episode => {
                return <Link href={`/episodes/${episode.slug}`}>
                    <div className="flex flex-row h-[200px] overflow-hidden">
                        <Image
                            className="pr-4 py-2"
                            src={episode.image}
                            alt="image"
                            width={356}
                            height={200}
                            priority
                        />
                        <div className="flex flex-col">
                            <p className="text-white text-4xl pb-4">{episode.number}: {episode.title}</p>
                            <p className="text-white text-xl whitespace-pre-line">{episode.description}</p>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    </main>
}
