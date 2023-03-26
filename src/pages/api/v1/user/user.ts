import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'

//THIS IS NOT A SECURE AUTHENTICATION METHOD. THIS IS FOR DEMONSTRATION PURPOSES ONLY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  try {
    switch (method) {
      case 'POST':
        await addNewUser(req, res)
        break
      case 'GET':
        console.log('get route not live')
        break
      case 'PUT':
        console.log('put route not live')
        break
      case 'DELETE':
        console.log('delete route not live')
        break
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

const addNewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password, password2 } = req.body

  if (password !== password2) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'Passwords do not match' }],
    })
  }

  const userExists = await prisma.user.findUnique({
    where: { email: email },
  })

  if (userExists) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'User email already exists' }],
    })
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })

  res.status(201).json({
    success: true,
    status: 201,
    msg: 'New user added to database',
    data: newUser,
  })
}
