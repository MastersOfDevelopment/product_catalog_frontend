/* eslint-disable @typescript-eslint/no-empty-function */
import React, { SetStateAction, useState } from 'react'
import { Phone } from 'types/Phone'

type ContextType = {
  favourites: Phone[]
  setFavourites: React.Dispatch<SetStateAction<Phone[]>>
  cart: Phone[]
  setCart: React.Dispatch<React.SetStateAction<Phone[]>>
}

export const ProductsContext = React.createContext<ContextType>({
  favourites: [],
  setFavourites: () => {},
  cart: [],
  setCart: () => {},
})

type Props = {
  children: React.ReactNode
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState<Phone[]>([])
  const [cart, setCart] = useState<Phone[]>([])

  const contextValue = {
    favourites,
    setFavourites,
    cart,
    setCart,
  }

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}
