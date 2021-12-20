import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

type LpCardProps = {
  href: string
  imgSrc: string
  title: string
  description: string
}
const LpCard = ({ href, imgSrc, title, description }: LpCardProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <Link href={href}>
        <a>
          <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60 hover:opacity-75">
            <div className="relative w-full md:h-36 lg:h-48">
              <Image src={imgSrc} alt="profile" layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h1 className="mb-3 text-lg font-medium text-gray-900">{title}</h1>
              <p className="mb-3 leading-relaxed">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="py-2 min-h-screen bg-gray-50">
      <Head>
        <title>ランディングページの練習一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full text-center">
          <h1 className="mb-2 text-2xl sm:text-3xl font-medium text-gray-900">ランディングページの練習一覧</h1>
          <p className="w-full lg:w-1/2 leading-relaxed text-gray-500">Next.js + Tailwindcss にて制作しています。</p>
        </div>
      </div>

      <section className="text-gray-600">
        <div className="container py-12 px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 各LPカードここから */}
            <LpCard
              href="/t05/"
              imgSrc="/img/t05/summary.jpg"
              title="Recipe Diary2"
              description="レシピサイト練習ページ2"
            />

            <LpCard
              href="/t04/"
              imgSrc="/img/t04/summary.jpg"
              title="Recipe Diary"
              description="レシピサイト練習ページ1"
            />

            <LpCard
              href="/t03/"
              imgSrc="/img/t03/summary.jpg"
              title="PHOTO BOOK 2"
              description="フォトサイト練習ページ2"
            />

            <LpCard
              href="/t02/"
              imgSrc="/img/t02/summary.jpg"
              title="PHOTO BOOK"
              description="レシピサイト練習ページ"
            />

            <LpCard
              href="/t01/"
              imgSrc="/img/t01/summary.jpg"
              title="Profile"
              description="プロフィールサイト練習ページ"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
