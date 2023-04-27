import { apiCall } from '@/utils/apiUtil'
import { Main, FoodPageItem, Navbar } from '@/components'
import { GetStaticPropsContext } from 'next'
import { TSFoodMenuItem } from '@/ts/interfaces'

interface TSFoodItemResponse {
  foodItem: TSFoodMenuItem
}

export default function FoodItemPage(foodItem: TSFoodItemResponse) {
  const foodItemObj = foodItem.foodItem

  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main>{foodItem && <FoodPageItem foodItem={foodItemObj} />}</Main>
    </>
  )
}

export async function getStaticPaths() {
  const foodItemRequest = await apiCall({
    httpMethod: 'GET',
    route: 'http://localhost:3000/api/v1/food-item/food-item',
  })

  const paths = foodItemRequest.data.map((foodItem: any) => {
    return { params: { foodId: [foodItem.id.toString()] } }
  })

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const foodId = context.params?.foodId
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
