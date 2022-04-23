import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const delete_product = (product_store, product_id) => {

    const requestOptions = {
      method: 'DELETE',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    };

    fetch(`http://127.0.0.1:8000/api/product/${product_store}/${product_id}`, requestOptions)
      .then(res => res.json())
  }

const TrackerProduct = (props) => {

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
              position: 'bottom',
            },
          },
      };

    const labels = props.dt_list;

    const data = {
        labels,
        datasets: [
          {
            label: 'price',
            data: props.price_list,
            borderColor: props.graph_color,
            backgroundColor: props.graph_color,
          },
        ],
      };

  return (
    <>
        <div className="col p-3">

        <div className="card" >
            
            <div className="card-body">

                <div className="row">

                    <div className="col-md-2">
                        <img src={props.img_src} alt="store logo"></img>
                    </div>

                    <div className="col-md">
                        <div className="text-end">
                            <button className="btn btn-danger px-2 py-0"
                                    onClick={() => {  delete_product(props.store, props.product_id);
                                                      setTimeout( () => {props.get_data()}, 1000);
                                                    }}>X</button>
                        </div>
                    </div>

                </div>  

                <div className="row">

                    <div className="col-md-10">
                        <h4>{props.name}</h4>
                    </div>

                    <div className="col-md">
                        <h4 className="text-end">₹{props.price}</h4>
                    </div>

                </div>


                <div className="row">

                    <Line options={options} data={data} />

                </div>  

                <div className="row">

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
                <small className="text-muted">Last updated on {props.dt}</small>
            </div>

        </div>
        </div>

    </>
  )
}

export default TrackerProduct