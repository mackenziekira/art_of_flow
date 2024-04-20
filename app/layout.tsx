import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Art of Flow",
  description: "A podcast about fire dancing, flow arts, and prop manipulation",
};

const Header = () => {
  return <div>
    <Link href="/">
      <Image
        className=""
        src="/header.png"
        alt="Art of Flow header"
        width={1920}
        height={480}
        priority
      />
    </Link>
    <div className="flex flex-row justify-center bg-white gap-x-4 p-1 border-orange-500 border-y-2">
      <Link href="/"><p className="text-xl text-black">About</p></Link>
      <Link href="/episodes"><p className="text-xl text-black">Episodes </p></Link>
    </div>
  </div>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Header />
        {children}
      </body>
    </html >
  );
}
