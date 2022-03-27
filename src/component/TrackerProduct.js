import React from 'react'

const TrackerProduct = () => {
  return (
    <>

        <div className="card" >
            
            <div class="card-body">

                <h5 class="card-title">product name</h5>
                
                <ul className="list-group list-group-flush">
                    <li class="list-group-item">amazon product details</li>
                    <li class="list-group-item">flipkart product details</li>
                    <li class="list-group-item">myntra product details</li>
                </ul>

            </div>

            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>

        </div>

    </>
  )
}

export default TrackerProduct