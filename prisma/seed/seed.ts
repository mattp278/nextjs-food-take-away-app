import { prisma } from '../db/client'
import { foodItemSeeds } from './foodItemSeeds'

async function main() {
  await prisma.order.deleteMany()
  await prisma.user.deleteMany()
  await prisma.foodItem.deleteMany()

  const foodItems = await prisma.foodItem.createMany({
    data: foodItemSeeds.map((foodItem) => ({
      name: foodItem.name,
      price: Number(foodItem.price),
      image: foodItem.image,
      category: foodItem.category,
    })),
  })

  const testUser1 = await prisma.user.upsert({
    where: { email: 'test@email.com' },

    update: {},

    create: {
      email: 'test@email.com',
      name: 'Matt Powell',
      password: 'password',
    },
  })

  console.log({ testUser1, foodItems })
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
