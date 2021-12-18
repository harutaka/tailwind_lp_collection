import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const T04Index: NextPage = () => {
  const imgArr = ["/img/t04/recipe1.jpg", "/img/t04/recipe2.jpg", "/img/t04/recipe3.jpg"]
  return (
    <>
      <Head>
        <title>Recipe Diary</title>
      </Head>

      <div className="bg-gray-100">
        <main>
          <div className="object-cover relative mb-20 w-full h-screen">
            <Image src="/img/t04/mainvisual.jpg" alt="" layout="fill" objectFit="cover" />
          </div>

          <div className="py-0 px-5 text-center">
            <h1 className="mb-5 text-3xl font-bold">Recipe Diary</h1>
            <p>
              日々の料理レシピをまとめています。
              <br />
              和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、
              <br />
              みなさんの献立にお役立てくださいね！
            </p>
          </div>

          <ul className="flex my-[60px]">
            {imgArr.map((item, i) => (
              <li className="relative w-1/3 h-[500px]" key={i}>
                <Image src={item} alt="" layout="fill" objectFit="cover" />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}

export default T04Index
