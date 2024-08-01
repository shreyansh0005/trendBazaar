import Navbar from '../features/navbar/navbar'
import ProductList from '../features/product/components/ProductList'
import Footer from '../features/common/Footer'
function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  )
}
export default Home
