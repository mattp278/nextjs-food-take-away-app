import { GetStaticProps } from 'next'
import { Main, Navbar, FoodMenu } from '@/components'
import { apiCall } from '@/utils/apiUtil'
import { TSFoodMenuItems } from '@/ts/interfaces'
import { OrderFooter } from '@/components/OrderFooter/OrderFooter'

export default function FoodMenuPage({ menuItems }: TSFoodMenuItems) {
  return (
    <>
      <Navbar />
      <Main>
        <FoodMenu menuItems={menuItems} />
        <OrderFooter />
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const foodItems = await apiCall({
    httpMethod: 'GET',
    route: 'http://localhost:3000/api/v1/food-item/food-item',
  })
  const { data } = foodItems

  return {
    props: { menuItems: data },
    revalidate: 60,
  }
}
