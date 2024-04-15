import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/header.png"
        alt="Art of Flow header"
        width={1920}
        height={480}
        priority
      />
      <p className="text-white text-7xl">Coming soon!</p>
    </main>
  );
}
