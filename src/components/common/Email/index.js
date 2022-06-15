import React from 'react'
import './styles.css'
import { useEffect,useState} from 'react'

function Email() {
  const [inputset, setinputset]= useState("");
  const [error, seterror]=useState(null);
  
  const handlesubmit = (e)=>{
      e.preventDefault();
      if(inputset != '' ){
          alert("Email has been sent successfully");
          setinputset("")
      }
      else{
          alert("Input is empty, check")
      }
  }
  return (
    <div className='EmailContainer' >
    < div className='EmailContent'>
        <h1>Get Access to our Exclusive updates</h1>
        <p>Sign up for your newsletter below to get a free offer on our first update</p>
        <form onSubmit={handlesubmit}>
            <div className='FormWrap' >
                <label>
                    <input type="email" placeholder="Enter Email" id="email" value={inputset} onChange={(e)=>setinputset(e.target.value)}/>
                </label>
                <button>Subscribe</button>
                
               
            </div>
        </form>
    </div>
</div>
  )
}

export default Email