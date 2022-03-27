
const ProductCard = () => {
  return (
    <>
        <div className="card" >

            <img src="..." class="card-img-top" alt="..." />

            <div class="card-body">

                <h5 class="card-title">product name</h5>
                <p class="card-text">amazom product details</p>
                <p class="card-text">flipkart product details</p>
                <p class="card-text">myntra product details</p>

            </div>

            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>

        </div>
    </>
  )
}

export default ProductCard