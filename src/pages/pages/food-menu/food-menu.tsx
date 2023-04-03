import { GetStaticProps } from 'next'
import { Main, Navbar, FoodMenu } from '@/components'
import { apiCall } from '@/utils/apiUtil'
import { FoodMenuItemsInterface } from '@/ts/interfaces'
import { FoodCategory } from '@prisma/client'

export default function FoodMenuPage({ menuItems }: FoodMenuItemsInterface) {
  return (
    <>
      <Navbar />
      <Main>
        <FoodMenu menuItems={menuItems} />
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const foodSections = []

  for (const [key, foodCategory] of Object.entries(FoodCategory)) {
    const foodItems = await apiCall({
      httpMethod: 'GET',
      route: `http://localhost:3000/api/v1/food-item/${foodCategory}`,
    })
    const { data } = foodItems
    foodSections.push(data)
  }

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
