import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>

        <div className="container-fluid px-3">

            <div className="card m-5">
      
              <div className="card-body">
                <h5 className="card-title">Search</h5>
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

                <h5 className="card-title">Product Tracker</h5>
                <p className="card-text">Track products from top ecommerce websites with price chart.</p>

                <Link to="/tracker">
                  <div className="text-center">
                    <button className="btn btn-primary">Track Product Now</button>
                  </div>
                </Link>

              </div>

            </div>

            <div className="card m-5">

              <div className="card-body">
                <h5 className="card-title">Deals</h5>
                <p className="card-text">Here are some of the best deals we have compiled for you.</p>

                <Link to="/deals">
                  <div className="text-center">
                    <button className="btn btn-primary">Get Best Deals</button>
                  </div>
                </Link>

              </div>

            </div>

        </div>

    </>
  )
}

export default Home