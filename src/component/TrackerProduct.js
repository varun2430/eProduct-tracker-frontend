import React from 'react'

const TrackerProduct = () => {
  return (
    <>

        <div className="card" >
            
            <div className="card-body">

                <h5 className="card-title">product name</h5>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">amazon product details</li>
                    <li className="list-group-item">flipkart product details</li>
                    <li className="list-group-item">myntra product details</li>
                </ul>

            </div>

            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>

        </div>

    </>
  )
}

export default TrackerProduct