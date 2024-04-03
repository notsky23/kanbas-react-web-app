import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  }
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  }
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  }

  useEffect(() => {
    fetchWelcome();
  }, []);
  
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a} className="form-control mt-3"
        onChange={(e) => setA(parseInt(e.target.value, 10))}/>
      <input type="number" className="form-control mt-3"
        onChange={(e) => setB(parseInt(e.target.value, 10))} value={b}/>
      <input value={result} type="number" className="form-control mt-3" readOnly />
      <h3 className="mt-3">Fetch Result</h3>
      <button className="btn btn-primary me-3 mt-3" onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button className="btn btn-danger me-3 mt-3" onClick={() => fetchSubtraction(a, b)} >
        Fetch Sum of {a} - {b}
      </button>

      <h3 className="mt-3">Path Parameters</h3>
      <div className="mt-3">
        <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
          <button className="btn btn-primary me-3">
            Add {a} + {b}
          </button>
        </a>
        <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
          <button className="btn btn-danger me-3">
            Substract {a} - {b}
          </button>
        </a>
        <a href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
          <button className="btn btn-success me-3">
            Mulitply {a} * {b}
          </button>
        </a>
        <a href={`http://localhost:4000/a5/divide/${a}/${b}`}>
          <button className="btn btn-warning me-3">
            Divide {a} / {b}
          </button>
        </a>
      </div> <br />

      <h3>Query Parameters</h3>
      <div className="mb-5">
        <a className="btn btn-primary me-3"
          href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <a className="btn btn-danger me-3"
          href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Substract {a} - {b}
        </a>
        <a className="btn btn-success me-3"
          href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} * {b}
        </a>
        <a className="btn btn-warning me-3"
          href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} / {b}
        </a>
      </div>
      
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6 className="list-group-item">{welcome}</h6>

    </div>
  );
}

export default EncodingParametersInURLs;