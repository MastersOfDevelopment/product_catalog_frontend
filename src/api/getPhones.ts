import { Phone } from 'types/Phone'
import { client } from 'utils/fetch'

export const getAllPhones = async () => client.get<Phone[]>('/products')
