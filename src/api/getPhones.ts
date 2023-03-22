/* eslint-disable import/no-unresolved */
import { Phone } from 'types/Phone'
import { PhoneDetails } from 'types/PhoneDetails'
import { PhonesData } from 'types/PhonesData'
import { client } from 'utils/fetch'

type ProductsObject = {
  products: Phone[]
}

export const getPhoneDetails = async (phoneId: string) => client.get<PhoneDetails>(`/phone/${phoneId}`)
export const getAllPhones = async (searchParams: string) => {
  return client.get<PhonesData>(`/products?${searchParams}`)
}
export const getProductsByCategory = async (category: string) => client.get<ProductsObject>(`/products/${category}`)
