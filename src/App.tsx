import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(1);

  const [result, setResult] = useState(2);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("http://fibonacci-env.eba-ka6ku2iu.us-east-1.elasticbeanstalk.com/fibonacci-service/fibonacci-numbers/next-highest?currentFibonacciNumber=" + number)
      .then((response) => {
        response.json().then((data) => {
          setResult(data.fibonacciNumber);
        });
      });
  };


  return (
    <>
      <h1>Generate the next highest fibonacci number</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Generate</button>
      </form>
      <p>Result: {result}</p>
    </>
  );
}

export default App
