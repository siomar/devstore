import AddToCartButton from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import currencyFormatter from '@/helpers/currencyFormatter'
import Each from '@/helpers/each'
import { Metadata } from 'next'
import Image from 'next/image'

type ProductProps = {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const { title } = await getProduct(params.slug)

  return {
    title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map(({ slug }) => ({ slug }))
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          quality={100}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {currencyFormatter(product.price)}
          </span>
          <span className="text-sm text-zinc-400">
            Em até 12x s/ juros
            {currencyFormatter(product.price / 12, {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <Each
              of={['p', 'm', 'g', 'gg'] as Array<string>}
              render={(item) => (
                <button
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
                >
                  {item.toUpperCase()}
                </button>
              )}
            />
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
