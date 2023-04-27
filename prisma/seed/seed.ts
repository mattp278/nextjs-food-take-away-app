import { prisma } from '../db/client'
import { foodItemSeeds } from './foodItemSeeds'

async function main(): Promise<void> {
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.user.deleteMany()
  await prisma.foodItem.deleteMany()

  const foodItems = await prisma.foodItem.createMany({
    data: foodItemSeeds.map((foodItem) => ({
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      category: foodItem.category,
    })),
  })

  console.log({ foodItems })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
