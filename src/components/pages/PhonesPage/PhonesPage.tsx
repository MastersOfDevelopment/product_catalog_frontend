import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'
import React, { useEffect, useState } from 'react'
import { getAll } from '../../../utils/getDataFromServer'
import { ProductCardPhone } from '../../../types/ProductCardPhoneType'
import '../../../styles/grid.scss'

export const PhonesPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<ProductCardPhone[]>([])

  const getAllProducts = async () => {
    const data = await getAll()
    setAllProducts(data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])

  console.log(allProducts)

  return (
    <>
      <div className="container grid">
        {allProducts.map(() => (
          <ProductCard />
        ))}
      </div>
      <Pagination />
    </>
  )
}
