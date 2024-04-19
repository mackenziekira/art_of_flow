import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
      <div className="lg:w-1/2 flex flex-col gap-y-4">
        <div className="flex-row">
          <Image
            className="float-left pr-4"
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            priority
          />
          <p className="text-white text-xl">The Art of Flow is a free public resource for creators, teachers, and supporters of the arts who are interested in flow arts and fire-dancing. The podcast is dedicated to conversations on the creative process to provide inspirations for your own movement arts and creativity journey. Explore how to connect to your body, mind, and soul by hearing conversations with flow artists and try out their suggestions yourself.
          </p>
        </div>
        <p className="text-white text-xl">The Art of Flow was created by Morgan, a flow enthusiast, to share information about movement arts and flow arts, the history of fire-dancing and flow, and reflections on the creative process and self-care to the general public. Flow arts are defined as the use of objects/props to explore movement and self via repetitive practice of a series of movements, and are often a practice that assist individuals in accessing a “flow” state. Props often include poi, rope-dart, hoops, fans, puppy-hammer, contact ball, meteor, meteor dart, dragon staff, contact staff, clubs, buggeng, levi-wand, double staff, and anything that can be rolled, spun, and manipulated.
        </p>
        <p className="text-white text-xl">
          This podcast was made possible by the artists who spared their time and energy to share thoughts on life, love, learning, and flow, and the wonderful monthly patrons who contributed funds to create the podcast and assist with distribution. Thank you!
        </p>
      </div>
      <div className="flex flex-row gap-x-4 pt-8">
        <Link href="https://www.facebook.com/ArtOfFlowPodcast/" target="_blank">
          <Image
            className=""
            src="/fb-icon.svg"
            alt="facebook"
            width={50}
            height={50}
            priority
          />
        </Link>
        <Link href="https://www.instagram.com/artofflowpodcast/" target="_blank">
          <Image
            className=""
            src="/insta-icon.png"
            alt="instagram"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
    </main>
  );
}
