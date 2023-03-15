import './styles/global.scss'
import { PageNotFound } from 'components/pages/PageNotFound'

import { Footer } from 'components/Footer'
import { ProductCard } from 'components/ProductCard'

function App() {
  return (
    <div className="App">
      <PageNotFound />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default App
