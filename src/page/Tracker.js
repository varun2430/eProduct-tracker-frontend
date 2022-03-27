import TrackerProductGrid from "../component/TrackerProductGrid"

const Tracker = () => {
  return (
    <>

        <div className="container-fluid px-3">

            <input className="form-control my-4" type="text" placeholder="URL..." />

            <TrackerProductGrid />

        </div>

    </>
  )
}

export default Tracker