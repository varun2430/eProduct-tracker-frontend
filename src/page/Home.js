import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>

        <div className="container-fluid px-3">

            <div className="card m-5">
      
              <div className="card-body">
                <h3 className="card-title"><i class="fa-magnifying-glass"></i>Search</h3>
                <p className="card-text">Search product from top ecommerce websites and get the best deals.</p>
      
                <Link to="/search">
                  <div className="text-center">
                    <button className="btn btn-primary">Find Best Deal</button>
                  </div>
                </Link>
      
              </div>
      
            </div>

            <div className="card m-5">

              <div className="card-body">

                <h3 className="card-title">Product Tracker</h3>
                <p className="card-text">Track products from top ecommerce websites with price chart.</p>

                <Link to="/tracker">
                  <div className="text-center">
                    <button className="btn btn-primary">Track Product Now</button>
                  </div>
                </Link>

              </div>

            </div>

        </div>

    </>
  )
}

export default Home