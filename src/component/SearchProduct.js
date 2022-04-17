const SearchProduct = (props) => {
  return (

    <>

        <div className="card my-3">

          <div className="row g-0">

            <div className="col-md-1">
              <img src={props.img_src} className="img-fluid rounded-start" alt="product" />
            </div>

            <div className="col-md">
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p>{props.details}</p>
              </div>
            </div>

            <div className="col-md">
              <div className="card-body">
                <h5 className="card-title text-end">₹{props.price}</h5>
              </div>
              <div className="text-end">
                <a  className="btn btn-primary mb-2 me-2" 
                    role="button" 
                    href={props.base_url}
                    target="_blank"
                    rel="noreferrer">
                  Buy Now
                </a>
              </div>
            </div>

          </div>

          <div className="card-footer text-end">
            <small className="text-muted">last updated on {props.datetime}</small>
          </div>

        </div>

    </>

  )
}

export default SearchProduct