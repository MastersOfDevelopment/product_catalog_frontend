/* eslint-disable import/no-unresolved */
import { Phone } from 'types/Phone'
import { PhoneDetails } from 'types/PhoneDetails'
import { PhonesData } from 'types/PhonesData'
import { client } from 'utils/fetch'

export const getPhoneDetails = async (phoneId: string) => client.get<PhoneDetails>(`/phones/${phoneId}`)
export const getAllPhones = async (searchParams: string) => {
  return client.get<PhonesData>(`/products?${searchParams}`)
}
export const getProductsWithDiscount = async () => client.get<Phone>('/products/discount')
