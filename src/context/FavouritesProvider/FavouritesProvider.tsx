/* eslint-disable @typescript-eslint/no-empty-function */
import { useLocalStorage } from '../../hooks'
import React, { SetStateAction } from 'react'
import { Phone } from '../../types/Phone'

type ContextType = {
  favourites: Phone[]
  setFavourites: React.Dispatch<SetStateAction<Phone[]>>
}

export const FavouritesContext = React.createContext<ContextType>({
  favourites: [],
  setFavourites: () => {},
})

type Props = {
  children: React.ReactNode
}

export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage<Phone[]>('favourites', [])

  const contextValue = {
    favourites,
    setFavourites,
  }

  return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>
}
