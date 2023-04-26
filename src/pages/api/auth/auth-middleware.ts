import { getServerSession } from 'next-auth/next'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

interface AuthenticatedNextApiRequest extends NextApiRequest {
  session?: Session
}

export default function authMiddleware(handler: NextApiHandler) {
  return async function (
    req: AuthenticatedNextApiRequest,
    res: NextApiResponse
  ) {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      res.status(401).json({
        success: false,
        status: 401,
        errors: [
          {
            msg: 'User is not authorised. Please login to access this route.',
          },
        ],
      })
      return
    }

    req.session = session
    return handler(req, res)
  }
}
