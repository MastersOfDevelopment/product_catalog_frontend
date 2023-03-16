import './styles/global.scss'
import { PageNotFound } from 'components/pages/PageNotFound'

import { Header } from 'components/Header/Header'
// import { Footer } from 'components/Footer'
// import { ProductCard } from 'components/ProductCard'
import { Route, Routes, useLocation } from 'react-router'
import { BurgerMenu } from 'components/Header/BurgerMenu'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/burger-menu' && <Header />}
      <Routes>
        <Route path="/burger-menu" element={<BurgerMenu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <ProductCard /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
