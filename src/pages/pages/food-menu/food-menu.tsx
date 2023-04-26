import { useEffect } from 'react'
import { Main, Navbar, FoodMenu } from '@/components'
import { apiCall } from '@/utils/apiUtil'
import { TSFoodMenuItems } from '@/ts/interfaces'
import { OrderFooter } from '@/components/OrderFooter/OrderFooter'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getAuthUser } from '@/redux/slices/userSlice'

export default function FoodMenuPage({ menuItems }: TSFoodMenuItems) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUser = async () => {
      const user = await dispatch(getAuthUser())
      console.log('user', user)
    }
    getUser()
  }, [dispatch])

  return (
    <>
      <title>Curry Club</title>
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
