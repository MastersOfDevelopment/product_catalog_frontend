import { Phone } from 'types/Phone'
import { PhoneDetails } from 'types/PhoneDetails'
import { PhonesData } from 'types/PhonesData'
import { client } from 'utils/fetch'

export const getPhoneDetails = async (phoneId: string) => client.get<PhoneDetails>(`/phones/${phoneId}`)
export const getAllPhones = async (searchParams: string) => {
  return client.get<PhonesData>(`/products?${searchParams}`)
}
export const getNewProducts = async () => client.get<Phone>('products/new')
export const getRecommendedPhones = async (phoneId: string) => client.get<Phone>(`/phones/${phoneId}/recommended`)
export const getProductsWithDiscount = async () => client.get<Phone>('/products/discount')
