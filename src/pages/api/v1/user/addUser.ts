import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  try {
    if (method === 'POST') {
      const { name, email } = req.body

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
        },
      })

      res.status(201).json({
        success: true,
        status: 201,
        msg: 'New user added to database',
        data: newUser,
      })
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
