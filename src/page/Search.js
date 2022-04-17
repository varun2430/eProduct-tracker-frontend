import { useState, useEffect } from "react"
import SearchProduct from "../component/SearchProduct"

const Search = () => {

  const [search_str, setSearch_str] = useState("")
  const [res_data_flp, setRes_data_flp] = useState([])
  const [res_data_amz, setRes_data_amz] = useState([])
  const [data, setData] = useState([])

  const get_data = () => {

    setRes_data_amz([])
    setRes_data_flp([])
    setData([])

    const requestOptions = {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    };

    fetch('http://127.0.0.1:8000/api/search/amazon/' + search_str, requestOptions)
        .then(res => res.json())
        .then(data => setRes_data_amz(data))

    fetch('http://127.0.0.1:8000/api/search/flipkart/' + search_str, requestOptions)
      .then(res => res.json())
      .then(data => setRes_data_flp(data))
  }


  const handleKeyDown = (e) => {
    if(e.key === "Enter")
    {
      get_data()
    }
  }

  useEffect(() => {

    const curr_data = [].concat(res_data_amz, res_data_flp)
    curr_data.sort( function(a, b) { return (a.product_price - b.product_price) } )
    setData(curr_data)

  }, [res_data_amz, res_data_flp]);

    return (
      <>
  
          <div className="container-fluid px-3">

            <div className="row">

              <div className="col-md-11">
                <input  className="form-control mt-4"
                        type="text" 
                        placeholder="Search Product..." 
                        onChange={(e) => setSearch_str((e.target.value).replace(" ", "+"))} 
                        onKeyDown={handleKeyDown} />
              </div>

              <div className="col-md text-center">
                <button className="btn btn-primary mt-4"
                        onClick={() => {get_data()}}>
                  Get Best Deals
                </button>
              </div>

            </div>

            {data.map((e) => {
              let img_src = ""

              switch (e.store) {
                case "amazon":
                  img_src = "amazon_logo.jpg"
                  break;
                case "flipkart":
                  img_src = "flipkart_logo.jpg"
                  break;
                default:
                  break;
              }
              return (
                <SearchProduct  key={e.product_id}
                                base_url={e.base_url}
                                img_src={img_src} 
                                name={e.product_name} 
                                price={e.product_price}
                                datetime={e.dt}         />
              );
            })}

            

          </div>
  
      </>
    )
  }
  
  export default Search