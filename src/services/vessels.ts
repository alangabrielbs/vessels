import axios from 'axios'

const url =
  process.env.NEXT_PUBLIC_API_URL || 'https://vessels-mock.herokuapp.com/'

export const getVessels = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}
