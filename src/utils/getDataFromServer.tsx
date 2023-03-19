import { ProductCardPhone } from '../types/ProductCardPhoneType'

const BASE_URL = 'https://product-catalog-backend-q6uq.onrender.com'

export async function getAll(): Promise<ProductCardPhone[]> {
  const data = await fetch(`${BASE_URL}/products`)
  return data.json()
}
