import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../../auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  try {
    switch (method) {
      case 'POST':
        console.log('post route not live')
        break
      case 'GET':
        await getAuthUser(req, res)
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

const getAuthUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  const email = session?.user?.email

  if (!email) {
    return res
      .status(401)
      .send({ success: false, status: 401, errors: [{ msg: 'Unauthorized' }] })
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return res.status(404).send({
      success: false,
      status: 404,
      errors: [{ msg: 'User not found' }],
    })
  }

  res.status(200).send({ success: true, status: 200, data: user })
}
