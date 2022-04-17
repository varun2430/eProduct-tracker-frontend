import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>

        <div className="container-fluid px-3">

            <div className="card m-5">
      
              <div className="card-body">
                <h5 className="card-title">Search</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
                <Link to="/search">
                  <div className="text-center">
                    <button className="btn btn-primary">Find Best Deal</button>
                  </div>
                </Link>
      
              </div>
      
            </div>

            <div className="card m-5">

              <div className="card-body">

                <h5 className="card-title">Product Price Tracker</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link to="/tracker">
                  <div className="text-center">
                    <button className="btn btn-primary">Track Price Now</button>
                  </div>
                </Link>

              </div>

            </div>

            <div className="card m-5">

              <div className="card-body">
                <h5 className="card-title">Deals</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

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