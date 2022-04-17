import { useState, useEffect } from "react"
import TrackerProduct from "../component/TrackerProduct"

const Tracker = () => {

  const [search_url, setSearchUrl] = useState("")
  const [res_data_amz, setRes_data_amz] = useState([])
  const [res_data_flp, setRes_data_flp] = useState([])
  const [data, setData] = useState([])

  const get_data = () => {

    setRes_data_amz([])
    setRes_data_flp([])

    const requestOptions = {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    };

    fetch("http://127.0.0.1:8000/api/product/amazon", requestOptions)
      .then(res => res.json())
      .then(data => setRes_data_amz(data["products"]))
    
    fetch("http://127.0.0.1:8000/api/product/flipkart", requestOptions)
      .then(res => res.json())
      .then(data => setRes_data_flp(data["products"]))

  }

  const track_product = () => {

    let body_store = ""
    if (search_url.includes("https://www.amazon.in/")) {
      body_store = "amazon"
    }
    else if (search_url.includes("https://www.flipkart.com/")) {
      body_store = "flipkart"
    }
    else {
      alert("Invalid URL!!")
    }

    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({store: body_store, url: search_url}),
    };

    fetch("http://127.0.0.1:8000/api/product/", requestOptions)
      .then(res => res.json())
      .then(() => {get_data()})

  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter")
    {
      track_product()
    }
  }

  useEffect(() => {
    get_data()
  }, [])

  useEffect(() => {
    const curr_data = [].concat(res_data_amz, res_data_flp)
    setData(curr_data)
  }, [res_data_amz, res_data_flp])

  return (
    <>

        <div className="container-fluid px-3">

          <div className="row">

            <div className="col-md-10">
              <input  className="form-control mt-4" 
                      type="text" 
                      placeholder="URL..."
                      onChange={(e) => {setSearchUrl(e.target.value)}}
                      onKeyDown={handleKeyDown} />
            </div>

            <div className="col-md text-center">
              <button className="btn btn-primary mt-4" 
                      onClick={() => {
                        const price_list = data[0]["product_price"]
                        console.log(data[0]) } }>
                Start Tracking
              </button>
            </div>

          </div>


          <div className="row row-cols-1 row-cols-md-1 m-2">

            {data.map((e) => {
                const price = e.product_price[e.product_price.length-1].p
                const dt = e.product_price[e.product_price.length-1].dt
                const price_list = e.product_price.map((item) => {return item.p})
                const dt_list = e.product_price.map((item) => {return item.dt})

                let img_src = ""
                let graph_color = "rgb(255, 99, 132)"
                switch (e.store) {
                  case "amazon":
                    img_src = "amazon_logo_small.jpg"
                    graph_color = "rgb(236,169,57)"
                    break;
                  case "flipkart":
                    img_src = "flipkart_logo_small.jpg"
                    graph_color = "rgb(22,126,187)"
                    break;
                  default:
                    break;
              }

              return(
                  <TrackerProduct key={e.product_id}
                                  product_id={e.product_id}
                                  store={e.store}
                                  base_url={e.base_url}
                                  img_src={img_src}
                                  graph_color={graph_color}
                                  name={e.product_name}
                                  price={price}
                                  dt={dt}
                                  price_list={price_list}
                                  dt_list={dt_list} />
              )
            })}

          </div>

        </div>

    </>
  )
}

export default Tracker