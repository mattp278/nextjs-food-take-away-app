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
        await authUser(req, res)
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

const authUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const userIsAuthorised = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  if (!userIsAuthorised) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [
        {
          msg: 'User is not authorised. Incorrect email password combination.',
        },
      ],
    })
  }

  res.status(200).json({
    success: true,
    status: 200,
    msg: 'User is authorised',
    data: userIsAuthorised,
  })
}
