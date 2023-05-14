import { Main, Navbar, FoodMenu } from '@/components'
import { apiCall } from '@/utils/apiUtil'
import { TSFoodMenuItems } from '@/ts/interfaces'
import { OrderFooter } from '@/components/OrderFooter/OrderFooter'
import { CartSection } from '@/components'

export default function FoodMenuPage({ menuItems }: TSFoodMenuItems) {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main bgColorProp="bg-secondaryWhite">
        <FoodMenu menuItems={menuItems} />
        <OrderFooter />
      </Main>
    </>
  )
}

export async function getStaticProps() {
  try {
    const foodItems = await apiCall({
      httpMethod: 'GET',
      route: `api/v1/food-item/food-item`,
    })
    const { data } = foodItems
    return {
      props: { menuItems: data },
      revalidate: 60,
    }
    //----------------------------------
  } catch (error) {
    console.log(error)
  }
}
