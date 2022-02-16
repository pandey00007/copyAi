import React,{useState}from 'react';
import './Signup.css';
import {Container, Row, Col} from 'react-bootstrap';
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
    <div className="wrapper"> 
      <Container>
        <Row>
        <Col xs={12} md={12}> 
        <div className="login">
          <div className='form-group'>
              <h1 className='text-center'>Registration Page</h1>
              <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className='form-control'placeholder='name' />
            </div>
            <div className='form-group'>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'placeholder='password' />
            </div>
            <div className='form-group'>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className='form-control'placeholder='email' />
            </div>
            <button  onClick={sign} className='btn btn-primary'>Sign up</button>
            </div>
        </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Signup;