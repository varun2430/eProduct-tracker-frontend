import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>

        <div className="container-fluid px-3">

            <div className="card m-5">
      
              <img src="..." className="card-img-top" alt="..."></img>
      
              <div className="card-body">
                <h5 className="card-title">Search</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
                <Link to="/search">
                    <button className="btn btn-primary">Find Best Deal</button>
                </Link>
      
              </div>
      
            </div>

            <div className="card m-5">

              <img src="..." className="card-img-top" alt="..."></img>

              <div className="card-body">

                <h5 className="card-title">Product Price Tracker</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link to="/tracker">
                    <button className="btn btn-primary">Track Price Now</button>
                </Link>

              </div>

            </div>

            <div className="card m-5">

              <img src="..." className="card-img-top" alt="..."></img>

              <div className="card-body">
                <h5 className="card-title">Deals</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link to="/deals">
                    <button className="btn btn-primary">Get Best Deals</button>
                </Link>

              </div>

            </div>

        </div>

    </>
  )
}

export default Home