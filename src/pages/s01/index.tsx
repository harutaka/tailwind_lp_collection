/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const S01Index: NextPage = () => {
  return (
    <div className="font-noto tracking-wider leading-relaxed text-blue-800 bg-gray-100">
      <Head>
        <title>FLOWER｜かわいいが届くお花便</title>
        <meta name="description" content="あなた好みのお花がポストに届く定期便アプリ" />
        <meta name="twitter:card" content="summary" />
        <link
          rel="stylesheet"
          media="screen"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=optional"
        />
        <link rel="icon" href="/img/s01/favicon.ico" />
      </Head>

      <header className="relative pt-12 h-screen min-h-[660px] text-center bg-center md:bg-bottom md:bg-no-repeat bg-cover bg-[url('/img/s01/bg_header_pink_sp.jpg')] md:bg-[url('/img/s01/bg_header_pink.jpg')]">
        <div className="my-4 mx-auto md:mt-[15vh] w-[131px] h-[116px] bg-center bg-no-repeat bg-contain duration-200 bg-[url('/img/s01/header_logo.png')]"></div>

        <div className="pb-6 mx-auto mt-4 md:mt-6 md:text-xl md:font-normal text-white duration-200">
          かわいいが届くお花便
        </div>

        <div className="absolute right-0 bottom-6 left-0 pt-[260px] md:pt-6 mx-auto text-center duration-200">
          <div className="py-6 px-4 w-full">
            <div className="flex justify-center">
              <Link href="https://flowr.page.link/88Lt">
                <a className="mr-8">
                  <Image src="/img/s01/Badge_Appstore.png" alt="" width={164} height={49} />
                </a>
              </Link>
              <Link href="https://flowr.page.link/19mT">
                <a className="">
                  <Image src="/img/s01/Badge_Googleplaystore.png" alt="" width={164} height={49} />
                </a>
              </Link>
            </div>

            <div className="my-6 mx-auto">
              <p className="mb-1 text-sm text-white">* 北海道、沖縄、離島エリアは現在対象外です</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default S01Index
