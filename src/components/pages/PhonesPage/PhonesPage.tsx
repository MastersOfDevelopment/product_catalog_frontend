import { getAllPhones } from 'api/getPhones'
import { ProductCard } from 'components/ProductCard'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  console.log(phones)

  const fetchAllPhones = async () => {
    try {
      const phonesFromServer = await getAllPhones()

      // setIsLoading(true)
      setPhones(phonesFromServer)
    } catch (error) {
      console.log(error)
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPhones()
  }, [])

  return <div className="container">{phones.length > 0 && <ProductCard />}</div>
}
