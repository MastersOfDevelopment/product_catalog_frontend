/* eslint-disable @typescript-eslint/no-empty-function */
import { useLocalStorage } from 'hooks'
import React, { SetStateAction } from 'react'
import { Phone } from 'types/Phone'

type ContextType = {
  favourites: Phone[]
  setFavourites: React.Dispatch<SetStateAction<Phone[]>>
  cart: Phone[]
  setCart: React.Dispatch<SetStateAction<Phone[]>>
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
  const [favourites, setFavourites] = useLocalStorage<Phone[]>('favourites', [])
  const [cart, setCart] = useLocalStorage<Phone[]>('cart', [])

  const contextValue = {
    favourites,
    setFavourites,
    cart,
    setCart,
  }

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}
