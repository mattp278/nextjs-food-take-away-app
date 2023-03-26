import axios from 'axios'
import { ApiOptions } from '../ts/interfaces'

export const apiCall = async (apiOptions: ApiOptions) => {
  const { apiCallType, route, body } = apiOptions

  try {
    let response: any

    switch (apiCallType) {
      case 'POST':
        response = await axios.post(route, body)
        break
      case 'GET':
        response = await axios.get(route)
        break
      case 'PUT':
        response = await axios.put(route)
        break
      case 'DELETE':
        response = await axios.delete(route)
        break
      default:
        console.log('Api call type not recognised')
    }

    const { data } = response
    return data
  } catch (err: any) {
    console.log('apiUtil error ---', err.response.data.errors[0].msg)
    const errorMessage = err.response.data.errors[0].msg
    throw Error(errorMessage)
  }
}
