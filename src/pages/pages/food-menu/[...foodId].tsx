import { apiCall } from '@/utils/apiUtil'

export default function FoodItemPage({ foodItem }) {
  const { name } = foodItem
  return <div>{name}</div>
}

export async function getStaticPaths() {
  const foodItemRequest = await apiCall({
    httpMethod: 'GET',
    route: 'http://localhost:3000/api/v1/food-item/food-item',
  })

  const paths = foodItemRequest.data.map((foodItem) => {
    return { params: { foodId: [foodItem.id.toString()] } }
  })

  return { paths, fallback: false }
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
