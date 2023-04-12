import { apiCall } from '@/utils/apiUtil'
import Image from 'next/image'
import { Main, FoodPageItem, Navbar } from '@/components'

export default function FoodItemPage({ foodItem }) {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main>{foodItem && <FoodPageItem foodItem={foodItem} />}</Main>
    </>
  )
}

export async function getStaticPaths() {
  const foodItemRequest = await apiCall({
    httpMethod: 'GET',
    route: 'http://localhost:3000/api/v1/food-item/food-item',
  })

  const paths = foodItemRequest.data.map((foodItem) => {
    return { params: { foodId: [foodItem.id.toString()] } }
  })

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const foodId = context.params.foodId
  const foodItemRequest = await apiCall({
    httpMethod: 'GET',
    route: `http://localhost:3000/api/v1/food-item/${foodId}`,
  })

  const foodItem = foodItemRequest.data.foodItem

  return {
    props: { foodItem },
    revalidate: 60,
  }
}
