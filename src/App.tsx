import './styles/global.scss'
import { Navigate, Route, Routes } from 'react-router'

import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer'
import { HomePage } from 'components/pages/HomePage'
import { PhonesPage } from 'components/pages/PhonesPage'
import { PageNotFound } from 'components/pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header />

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
    </div>
  )
}

export default App
