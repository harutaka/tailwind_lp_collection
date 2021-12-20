import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

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
            <div className="p-4 md:w-1/3">
              <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60">
                <div className="relative w-full md:h-36 lg:h-48">
                  <Image src="/img/t05/summary.jpg" alt="profile" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900">Recipe Diary2</h1>
                  <p className="mb-3 leading-relaxed">レシピサイト練習ページ2</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60">
                <div className="relative w-full md:h-36 lg:h-48">
                  <Image src="/img/t04/summary.jpg" alt="profile" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900">Recipe Diary</h1>
                  <p className="mb-3 leading-relaxed">レシピサイト練習ページ</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60">
                <div className="relative w-full md:h-36 lg:h-48">
                  <Image src="/img/t03/summary.jpg" alt="profile" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900">PHOTO BOOK 2</h1>
                  <p className="mb-3 leading-relaxed">フォトサイト練習ページ2</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60">
                <div className="relative w-full md:h-36 lg:h-48">
                  <Image src="/img/t02/summary.jpg" alt="profile" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900">PHOTO BOOK</h1>
                  <p className="mb-3 leading-relaxed">フォトサイト練習ページ</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 border-opacity-60">
                <div className="relative w-full md:h-36 lg:h-48">
                  <Image src="/img/t01/summary.jpg" alt="profile" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900">Profile</h1>
                  <p className="mb-3 leading-relaxed">プロフィールサイト練習ページ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
