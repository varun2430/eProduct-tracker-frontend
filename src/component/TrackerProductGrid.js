import TrackerProduct from "./TrackerProduct"

const TrackerProductGrid = () => {
  return (
    <>

        <div className="container-fluid">

            <div className="row row-cols-1 row-cols-md-1 m-4">

                <div className="col p-3">
                    <TrackerProduct />
                </div>

                <div className="col p-3">
                    <TrackerProduct />
                </div>

                <div className="col p-3">
                    <TrackerProduct />
                </div>

                <div className="col p-3">
                    <TrackerProduct />
                </div>

                <div className="col p-3">
                    <TrackerProduct />
                </div>

                <div className="col p-3">
                    <TrackerProduct />
                </div>

            </div>

        </div>

    </>
  )
}

export default TrackerProductGrid