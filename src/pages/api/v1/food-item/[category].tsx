import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  try {
    if (method === 'GET') {
      await getFoodItemsByCategory(req, res)
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

const getFoodItemsByCategory = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const category = req.query.category?.toString()

  if (!category)
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [
        {
          msg: 'Bad Request. Please provide a category.',
        },
      ],
    })

  const foodItems = await prisma.foodItem.findMany({
    where: {
      category: category,
    },

    select: { id: true, name: true, price: true, image: true, category: true },
  })
  const numberOfFoodItems = foodItems.length

  return res.status(200).json({
    success: true,
    status: 200,
    msg: `There are ${numberOfFoodItems} food items returned from the database.`,
    data: foodItems,
  })
}
