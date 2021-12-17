import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const T02Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>PHOTO BOOK</title>
      </Head>

      <body className="bg-blue-50 font-meiryo">
        <main className="max-w-[1000px] mx-auto">
          <h1 className="mt-12 my-2 text-2xl font-bold">PHOTO BOOK</h1>
          <Image src="/img/t02/mainvisual.jpg" alt="main" width={1000} height={400} />

          {/* <!-- INDEX --> */}
          <section className="bg-white mt-16">
            <div className="w-[600px] mx-auto">
              <h2 className="text-lg font-bold pt-8 my-2">INDEX</h2>
              <ol className="list-decimal pb-6">
                <li className="leading-10 mx-4 text-sm">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li className="leading-10 mx-4 text-sm">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li className="leading-10 mx-4 text-sm">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li className="leading-10 mx-4 text-sm">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li className="leading-10 mx-4 text-sm">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
              </ol>
            </div>
          </section>

          {/* <!-- DETAIL --> */}
          <section className="w-[600px] mx-auto mt-16 mb-28">
            <h2 className="font-bold text-lg mb-4">DETAIL</h2>
            <div className="flex">
              <div className="w-1/2 pr-5">
                <Image src="/img/t02/detail.jpg" alt="detail" width={270} height={270} />
              </div>
              <div className="w-1/2 ml-5">
                <h3 className="text-lg font-bold mb-4">タイトルタイトルタイトル</h3>
                <hr className="border-gray-300" />
                <div className="grid grid-cols-4 my-4">
                  <div className="text-sm">著者</div>
                  <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
                  <div className="text-sm">出版社</div>
                  <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
                  <div className="text-sm">発行年</div>
                  <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
                </div>
                <hr className="border-gray-300" />
                <p className="my-4 text-sm">
                  テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
                </p>
                <a href="#" className="underline">
                  オンラインストアで見る
                </a>
              </div>
            </div>
          </section>

          <footer className="w-[600px] mx-auto my-4 text-[10px]">© 2020 PHOTO BOOK</footer>
        </main>
      </body>
    </>
  )
}

export default T02Index
