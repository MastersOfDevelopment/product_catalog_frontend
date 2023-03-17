import './styles/global.scss'
import { Navigate, Route, Routes } from 'react-router'

import { useState } from 'react'
import { Header } from 'components/Header'
// import { ProductCard } from 'components/ProductCard'
import { BurgerMenu } from 'components/BurgerMenu'
import { Footer } from 'components/Footer'
import { HomePage } from 'components/pages/HomePage'
import { PhonesPage } from 'components/pages/PhonesPage'
import { PageNotFound } from 'components/pages/PageNotFound'
import { useWindowSize } from 'utils/helper'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const screenWidth = useWindowSize().width

  return (
    <div className="App">
      <div className="container">
        {isBurgerMenuOpen && screenWidth < 641 ? (
          <BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
        ) : (
          <>
            <Header setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/phones" element={<PhonesPage />}>
                <Route index />
                <Route path=":phoneId" element={<PhonesPage />} />
              </Route>
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}

export default App
