/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T08Index: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Mag88</title>
        <meta name="description" content="ストアサイト練習ページ" />
        <meta property="og:title" content="Mag88" />
        <meta property="og:description" content="ストアサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t08/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t08/favicon.ico" />
      </Head>

      <header className="relative mb-20 h-screen bg-center bg-no-repeat bg-cover bg-[url('/img/t08/mainvisual.jpg')]">
        <h1 className="absolute top-[30px] right-[30px]">
          <Image src="/img/t08/logo.svg" alt="Mag88" width={120} height={40} />
        </h1>
      </header>

      <main>
        <section className="px-[5%] mx-auto mb-20 max-w-7xl text-center">
          <h2 className="mb-5 text-2xl font-bold">A special, long article in a newspaper or magazine</h2>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>

          <div className="md:flex flex-col md:flex-row justify-between mt-10">
            <Link href="#">
              <a className="block relative mb-[30px] md:mb-0 md:w-[49%] hover:opacity-70" href="#">
                <Image
                  src="/img/t08/magazine-archive.jpg"
                  alt="テキストテキストテキストテキスト"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-[40%] right-0 left-0 py-[15px] mx-auto max-w-[290px] font-bold text-white bg-black/50">
                  <p className="mb-0.5 text-xl">Archive</p>
                  <p>
                    テキストテキストテキストテキスト
                    <br />
                    テキストテキストテキスト
                  </p>
                </div>
              </a>
            </Link>

            <Link href="#">
              <a className="block relative md:w-[49%] hover:opacity-70" href="#">
                <Image
                  src="/img/t08/magazine-new.jpg"
                  alt="テキストテキストテキストテキスト"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-[40%] right-0 left-0 py-[15px] mx-auto max-w-[290px] font-bold text-white bg-black/50">
                  <p className="mb-0.5 text-xl">New</p>
                  <p>
                    テキストテキストテキストテキスト
                    <br />
                    テキストテキストテキスト
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>

        <section className="pt-[35px] md:pt-14 mb-12 md:mb-20 h-[520px] text-center bg-center bg-no-repeat bg-cover bg-[url('/img/t08/fashion.jpg')]">
          <div className="px-[5%] mx-auto max-w-7xl">
            <h2 className="mb-5 text-2xl font-bold">Fashion & Style</h2>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <Link href="#">
              <a className="inline-block py-[14px] px-9 mt-7 text-xs text-gray-800 border border-gray-800 hover:opacity-70">
                Read more
              </a>
            </Link>
          </div>
        </section>

        <section className="py-7 md:py-[60px] bg-gray-50">
          <div className="md:flex justify-between items-center px-[5%] mx-auto max-w-7xl">
            <div className="md:w-[48%] text-center">
              <Image src="/img/t08/catalog.jpg" alt="catalog" width={1000} height={1000} />
            </div>

            <div className="md:w-[48%] text-center">
              <h2 className="mt-10 md:mt-0 mb-5 text-2xl font-bold">Catalog</h2>
              <p className="mb-16 md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section className="py-[60px] bg-gray-50">
          <div className="md:flex justify-between items-center px-[5%] mx-auto max-w-7xl">
            <div className="md:w-[48%] text-center">
              <h2 className="mb-5 text-2xl font-bold">Antique</h2>
              <p className="mb-16 md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <Link href="#">
                <a className="inline-block py-[14px] px-9 mt-7 mb-14 md:mb-0 text-xs text-gray-800 border border-gray-800 hover:opacity-70">
                  Read More
                </a>
              </Link>
            </div>

            <div className="md:w-[48%] text-center">
              <Image src="/img/t08/antique.jpg" alt="antique" width={1000} height={1000} />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-xs bg-[#333]">
        <div className="md:flex justify-between py-7 md:py-24 px-[5%] mx-auto max-w-7xl text-white">
          <div className="py-14 mb-7 md:mb-0 md:w-1/3 leading-loose text-center">
            <Link href="/t08/">
              <a className="hover:opacity-70">
                <Image src="/img/t08/logo.svg" alt="Mag88" width={120} height={40} />
              </a>
            </Link>
          </div>

          <div className="mb-7 md:mb-0 md:w-1/3 leading-loose">
            <p className="mb-[10px] text-base font-bold">タイトル</p>
            <ul>
              {[...Array(5)].map((item, i) => (
                <li key={i} className="before:mr-[5px] before:content-['-']">
                  テキストテキストテキスト
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7 md:mb-0 md:w-1/3 leading-loose">
            <p className="mb-[10px] text-base font-bold">タイトルタイトルタイトル</p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <p className="py-8 text-center bg-white">&copy; Mag88</p>
      </footer>
    </div>
  )
}

export default T08Index
