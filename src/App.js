import React,{useState,useEffect} from "react";

function App() {
  const api="https://api.nasa.gov/planetary/apod?api_key=kVxgNdG9gsqjweHfDRTAKCmcHOFkyNaifXcrbaKA";
  const[date,setDate]=useState("2022-09-19");
  const[data,setData]=useState([]); 
  
  const ap =useEffect(()=>{
    fetch(api+"&date="+date)
    .then(data=>data.json())
    .then(data=>setData(data))
  },[date]);
  console.log(data);
  return (
   <div>

    <section className='my-5 border bg-light'>
      <section className='container'>
        <div className="row my-5 justify-content-center">
          <div className="col col-lg-4">
          <h2>Picture of the day</h2>
          <form>
            <label for="date" className="form-label lead fw-bold">Try different date</label>
            <input type="date" class="form-control" id="date1" onChange={(e)=>{setDate(e.target.value)}}/>
          </form>
          <div className="d-grid gap-2 col-5">
            <button className="btn btn-outline-primary btn-md my-3" type="submit" id="submit" onClick={ap}>Submit</button>
          </div>
          </div>
        </div>
      </section>
    </section>
    
    <section className="my-5">
      <section className="container justify-content-around">
        <div className="row my-5 justify-content-center align-items-center gap-3">
          <div className="col-lg-5">
            <img src={data.url} alt="nasa image" className="img-fluid shadow-lg"/>
          </div>
          <div className="col-lg-5 justify-content-center">
              <h3>{data.title}</h3>
              <p>{data.explanation}</p>
              <p>{data.copyright}</p>
          </div>

        </div>

      </section>
    </section>

   </div>
  );
}

export default App;
