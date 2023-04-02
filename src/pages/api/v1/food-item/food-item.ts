import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  try {
    switch (method) {
      case 'POST':
        await addFoodItem(req, res)
        break
      case 'GET':
        await getFoodItems(req, res)
        break
      case 'PUT':
        await updateFoodItemWithId(req, res)
        break
      case 'DELETE':
        await deleteFoodItemWithId(req, res)
        break
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

//----------------------------------------------------------------------------------

const addFoodItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, image, category } = req.body
  const price = Math.round(req.body.price * 100) / 100

  const newFoodItem = await prisma.foodItem.create({
    data: {
      name,
      price,
      image,
      category,
    },
  })

  return res.status(201).json({
    success: true,
    status: 201,
    msg: 'New food item added to database',
    data: newFoodItem,
  })
}

//----------------------------------------------------------------------------------

const getFoodItems = async (req: NextApiRequest, res: NextApiResponse) => {
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

//----------------------------------------------------------------------------------

const updateFoodItemWithId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id, name, image, category } = req.body
  const price = Math.round(req.body.price * 100) / 100

  const foodItemToUpdate = await prisma.foodItem.findUnique({
    where: { id: id },
  })

  if (!foodItemToUpdate) {
    return res.status(500).send({
      success: false,
      status: 500,
      errors: [
        {
          msg: 'Server Error. Unable to find food item with the id provided.',
        },
      ],
    })
  }
  const updatedFoodItem = await prisma.foodItem.update({
    where: {
      id: id,
    },
    data: {
      name,
      price,
      image,
      category,
    },
  })

  return res.status(200).json({
    success: true,
    status: 200,
    msg: 'Food item updated in database',
    data: {
      updatedEntry: updatedFoodItem,
    },
  })
}

//----------------------------------------------------------------------------------

const deleteFoodItemWithId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.body

  const foodItemToDelete = await prisma.foodItem.findUnique({
    where: { id: id },
  })

  if (!foodItemToDelete) {
    return res.status(500).send({
      success: false,
      status: 500,
      errors: [
        {
          msg: 'Server Error. Unable to find food item with the id provided.',
        },
      ],
    })
  }

  const updatedFoodItem = await prisma.foodItem.delete({
    where: {
      id: id,
    },
  })

  return res.status(200).json({
    success: true,
    status: 200,
    msg: 'Food item deleted from database',
    data: {
      deletedItem: updatedFoodItem,
    },
  })
}
