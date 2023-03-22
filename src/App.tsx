/* eslint-disable */
import './styles/global.scss'
import { Navigate, Route, Routes } from 'react-router'

import { useState } from 'react'
import { BurgerMenu } from 'components/BurgerMenu'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer'
import { HomePage } from 'pages/HomePage'
import { PhonesPage } from 'pages/PhonesPage'
import { PageNotFound } from 'pages/PageNotFound'
import { useWindowSize } from 'utils/helper'
import { FavouritesProvider } from 'context/FavouritesProvider'
import { FavouritesPage } from 'pages/FavouritesPage'
import { CartPage } from 'pages/CartPage'
import { PhoneItem } from 'pages/PhoneItem'
import { CartProvider } from 'context/CartContext'
import { TabletsPage } from 'pages/TabletsPage'
import { AccessoriesPage } from 'pages/AccessoriesPage'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const screenWidth = useWindowSize().width

  return (
    <FavouritesProvider>
      <CartProvider>
        <div className="App">
          {isBurgerMenuOpen && screenWidth < 640 ? (
            <BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
          ) : (
            <>
              <Header setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
              <div className="container">
                <Routes>
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />
                  <Route path="/phones">
                    <Route index element={<PhonesPage />} />
                    <Route path=":phoneId" element={<PhoneItem />} />
                  </Route>
                  <Route path="/favourites" element={<FavouritesPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/tablets" element={<TabletsPage />} />
                  <Route path="/accessories" element={<AccessoriesPage />} />
                </Routes>
              </div>

              <Footer />
            </>
          )}
        </div>
      </CartProvider>
    </FavouritesProvider>
  )
}

export default App
