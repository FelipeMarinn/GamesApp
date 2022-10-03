import HeadBanner from '@components/HeadBanner/HeadBanner'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps = async () => {
  const res = await fetch('https://games-app-eight.vercel.app/api/avo')
  const { data: productList }: APIResponse = await res.json()

  return { props: { productList } }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <HeadBanner />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
