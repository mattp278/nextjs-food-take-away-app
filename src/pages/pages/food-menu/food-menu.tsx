import { Main, Navbar, Menu } from '@/components'
import { apiCall } from '@/utils/apiUtil'
import { MeneuItems } from '@/ts/interfaces'

export default function FoodMenuPage({ menuItems }: MeneuItems) {
  return (
    <>
      <Navbar />
      <Main>
        <Menu menuItems={menuItems} />
      </Main>
    </>
  )
}

FoodMenuPage.getInitialProps = async () => {
  const foodItems = await apiCall({
    httpMethod: 'GET',
    route: 'http://localhost:3000/api/v1/food-item/food-item',
  })
  const { data } = foodItems
  return { menuItems: data }
}
