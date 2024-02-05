import { useState } from 'react'
import logo from './assets/gpt.png'
import { LinearProgress } from '@mui/material';
function App() {
  const [query,setquery]=useState("")
  const [loding,setloding]=useState(false)
  const [res,setres]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(query)
    try {
      setloding(true); 
  
      const response = await fetch("https://ai-chatgpt-jra8.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: query,
        }),
      });
  
      if (response.ok) {
        const data = await response.json(); 
        setres(data.data); 
        console.log(data.data);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setloding(false);
    }
  }
  return (
    <div className='flex'>
      <img className='imagelogo' src={logo}/>
      <div className='card'>
        <h2>Ai Text Generator</h2>
        <div className='flex'>
        <textarea placeholder='Enter Your Query' className='textarea' value={query} onChange={(e)=>setquery(e.target.value)}></textarea>
        <button className='btn' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
        </div>
        <div style={{borderRadius: '12px'}}>
          {loding?<LinearProgress />:""}
        <p className='ans' >{res}
</p></div>
      </div>
    </div>
  )
}

export default App
