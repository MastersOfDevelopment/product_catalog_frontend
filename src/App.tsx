import './styles/global.scss'
import { Navigate, Route, Routes, useLocation } from 'react-router'

import { Header } from 'components/Header'
// import { ProductCard } from 'components/ProductCard'
import { BurgerMenu } from 'components/Header/BurgerMenu'
import { Footer } from 'components/Footer'
import { HomePage } from 'components/pages/HomePage'
import { PhonesPage } from 'components/pages/PhonesPage'
import { PageNotFound } from 'components/pages/PageNotFound'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <div className="container">
        {location.pathname !== '/burger-menu' && <Header />}
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<PhonesPage />}>
            <Route index />
            <Route path=":phoneId" element={<PhonesPage />} />
          </Route>
        </Routes>
      </div>

      {location.pathname !== '/burger-menu' && <Footer />}
    </div>
  )
}

export default App
