import './styles/global.scss'
import { PageNotFound } from 'components/pages/PageNotFound'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer'
import { ProductCard } from './components/ProductCard'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <PageNotFound /> */}
      <ProductCard />
      {/* <Footer /> */}
    </div>
  )
}

export default App
