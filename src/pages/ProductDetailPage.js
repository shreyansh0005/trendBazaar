import Navbar from '../features/navbar/navbar'
import ProductDetail from '../features/product/components/ProductDetail'
import Footer from '../features/common/Footer'
function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
      <Footer></Footer>
    </div>
  )
}
export default ProductDetailPage
