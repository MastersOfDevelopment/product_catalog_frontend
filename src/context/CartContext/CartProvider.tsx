/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'
import { useLocalStorage } from '../../hooks'

export interface CartItem {
  id: string
  count: number
}

interface ContextType {
  cartItems: CartItem[]
  addOne: (productId: string) => void
  removeOne: (productId: string) => void
  isAdded: (productId: string) => boolean
  getCount: (productId: string) => number
  removeItem: (productId: string) => void
  removeAll: () => void
}

const defaultValue: ContextType = {
  cartItems: [],
  addOne: () => {},
  removeOne: () => {},
  isAdded: () => false,
  getCount: () => 0,
  removeItem: () => {},
  removeAll: () => {},
}

export const CartContext = createContext<ContextType>(defaultValue)

interface Props {
  children: React.ReactNode
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', [])

  const addOne = (productId: string): void => {
    setCartItems((currentItems) => {
      let cartItem = currentItems.find(({ id }) => id === productId)

      if (!cartItem) {
        cartItem = { id: productId, count: 1 }

        return [...currentItems, cartItem]
      }

      cartItem.count++

      return [...currentItems]
    })
  }

  const removeOne = (productId: string): void => {
    setCartItems((currentItems) => {
      const cartItem = currentItems.find(({ id }) => id === productId)

      if (!cartItem) {
        return [...currentItems]
      }

      cartItem.count--

      if (cartItem.count <= 0) {
        return currentItems.filter(({ id }) => id !== productId)
      }

      return [...currentItems]
    })
  }

  const getCount = (productId: string): number => {
    return cartItems.find((item) => item.id === productId)?.count ?? 0
  }

  const removeItem = (productId: string): void => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== productId)
    })
  }

  const isAdded = (productId: string): boolean => cartItems.some(({ id }) => id === productId)

  const removeAll = (): void => {
    setCartItems([])
  }

  const contextValue = {
    cartItems,
    setCartItems,
    addOne,
    removeOne,
    isAdded,
    getCount,
    removeItem,
    removeAll,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}
