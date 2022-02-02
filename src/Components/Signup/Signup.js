import React,{useState}from 'react';
import './Signup.css';
function Signup() {
    const [name,setname]=useState("")
    const [password,setPassword]=useState("")
    const [email,setemail]=useState("")
    function sign(){
       
        let item={name,password,email}
        console.warn(item)
    }
  return (
    <>
    <div className='col-sm-6 offset-sm-3 mb-10'> 
        <h1 className='text-center'>Registration Page</h1>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className='form-control'placeholder='name' />
        <br/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'placeholder='password' />
        <br/>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className='form-control'placeholder='email' />
        <br/>
        <button  onClick={sign} className='btn btn-primary'>Sign up</button>
    </div>
      
    </>
  );
}

export default Signup;