import ProductCard from './ProductCard'

const ProductGrid = () => {
  return (
    <>
        <div className="container-fluid">

            <div className="row row-cols-1 row-cols-md-3 m-4">

                <div className="col p-3">
                    <ProductCard />
                </div>

                <div className="col p-3">
                    <ProductCard />
                </div>

                <div className="col p-3">
                    <ProductCard />
                </div>

                <div className="col p-3">
                    <ProductCard />
                </div>

                <div className="col p-3">
                    <ProductCard />
                </div>

                <div className="col p-3">
                    <ProductCard />
                </div>

            </div>

        </div>
    </>
  )
}

export default ProductGrid