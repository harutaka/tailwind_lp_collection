import Image from "next/image"
import Link from "next/link"

type ItemProps = {
  title: string
  itemId: string
}
const ItemDetailMain = ({ title, itemId }: ItemProps) => {
  const fileName = itemId
  return (
    <main>
      <div className="px-10 pt-28 pb-40 mx-auto w-full max-w-7xl">
        <h1 className="mb-8 text-lg font-bold">{title}</h1>
        <div id="item" className="flex justify-between mb-16 w-[800px]">
          <div className="w-1/2">
            <Image src={`/img/t12/${fileName}.jpg`} alt="" width={800} height={800} />
          </div>
          <div className="w-[42%]">
            <p className="mb-8 text-justify">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="mb-8 text-justify">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="mb-8 text-justify">&yen;99,999 +tax</p>
            <dl className="flex flex-wrap">
              <dt className="w-[30%]">SIZE：</dt>
              <dd className="w-[70%]">W999 × D999 × H999</dd>
              <dt className="w-[30%]">COLOR：</dt>
              <dd className="w-[70%]">テキスト</dd>
              <dt className="w-[30%]">MATERIAL：</dt>
              <dd className="w-[70%]">テキストテキストテキスト</dd>
            </dl>
          </div>
        </div>
        <Link href="/t12/products">
          <a className="block text-center hover:opacity-70">Back To Products</a>
        </Link>
      </div>
    </main>
  )
}

export default ItemDetailMain
