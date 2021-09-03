
import Container from "./components/container"

import React,{useState} from "react"

const url = new Request("https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test")

const getdata = async (cb) => {
  const first = await fetch(url) 
  const parse = await first.json()
  cb(parse)
  return parse
  // console.log(parse)
} 



  
  function App() {
    const [data, setData] = useState([])

      getdata((data)=>{
        setData(data)
      })

    return (
      <div className="App">

      <Container data={data}/>
    </div>
  );
}

export default App;
