import { prisma } from './db/client'
import { FoodMenuItemInterface } from '@/ts/interfaces'
import { FoodCategory } from '@prisma/client'

interface FoodItemInterface {
  name: string
  price: string | number
  image: string
  category: FoodCategory
}

const foodItem: FoodItemInterface[] = [
  {
    name: 'Samosa',
    price: 5.5,
    image: './samosa.jpg',
    category: 'starters',
  },
  {
    name: 'Onion Bhaji',
    price: 5.5,
    image: './onionbhaji.jpg',
    category: 'starters',
  },
  {
    name: 'Popadoms',
    price: 0.75,
    image: './poppadum.webp',
    category: 'starters',
  },
  {
    name: 'Lamb Dhansk',
    price: 9.5,
    image: './dhansak.jpg',
    category: 'mains',
  },
  {
    name: 'Chicken Korma',
    price: 7.5,
    image: './korma.jpg',
    category: 'mains',
  },
  {
    name: 'Chicken Tikka Masala',
    price: 7.5,
    image: './tikka.jpg',
    category: 'mains',
  },
  {
    name: 'White Rice',
    price: 5.25,
    image: './whiterice.jpg',
    category: 'sides',
  },
  {
    name: 'Pilau Rice',
    price: 5.25,
    image: './pilaurice.jpg',
    category: 'sides',
  },
  {
    name: 'Coke',
    price: 5.25,
    image: './coke.jpg',
    category: 'drinks',
  },
  {
    name: '7up',
    price: 5.25,
    image: './7up.webp',
    category: 'drinks',
  },
]

async function main() {
  await prisma.order.deleteMany()
  await prisma.user.deleteMany()
  await prisma.foodItem.deleteMany()

  const foodItems = await prisma.foodItem.createMany({
    data: foodItem.map((foodItem) => ({
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
