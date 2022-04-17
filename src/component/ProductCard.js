
const ProductCard = () => {
  return (
    <>
        <div className="card" >

            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">

                <h5 className="card-title">product name</h5>
                
                <p className="card-text">amazom product details</p>
                <p className="card-text">flipkart product details</p>
                <p className="card-text">myntra product details</p>

            </div>

            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>

        </div>
    </>
  )
}

export default ProductCard