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

  res.status(201).json({
    success: true,
    status: 201,
    msg: 'New food item added to database',
    data: newFoodItem,
  })
}

//----------------------------------------------------------------------------------

const getFoodItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const foodItems = await prisma.foodItem.findMany()
  const numberOfFoodItems = foodItems.length

  res.status(200).json({
    success: true,
    status: 200,
    msg: `There are ${numberOfFoodItems} food items in the database`,
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
    res.status(500).send({
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

  res.status(200).json({
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
    res.status(500).send({
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

  res.status(200).json({
    success: true,
    status: 200,
    msg: 'Food item deleted from database',
    data: {
      deletedItem: updatedFoodItem,
    },
  })
}
