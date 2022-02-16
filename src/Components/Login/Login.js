import React from 'react';
import './Login.css';
import { Container, Row, Col } from "react-bootstrap";


class Login extends React.Component {
  // const history = useNavigate();

  //  function handleSubmit(e) {
  //       e.preventDefault();

  //       history('/home');
  //   }
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      nameError: "",
      passwordError: "",
    }
  }
  valid() {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState(
        { nameError: "Invalid Name", passwordError: "Password length should be more than 5" }
      )
    }
    else if (!this.state.name.includes("@")) {
      this.setState(
        { nameError: "Invalid Name" }
      )
    }
    else if (this.state.password.length < 5) {
      this.setState(
        { passwordError: "Password length should be more than 5" }
      )
    }
    else {
      return true
    }


  }
  submit() {
    this.setState(
      { nameError: "", passwordError: "" }
    )
    if (this.valid())
      alert(" form has been submited")
  }
  render() {

    return (
      <>
        <div className="wrapper">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <div className="login">
                  <h4 className="mb-5 text-center">Login User</h4>
                  {/* <form onSubmit={handleSubmit}> */}
                  <div className="form-group">
                    <label>Email ID</label>
                    <input type="text" className="form-control" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    <p style={{ color: "red", fontSize: "14px" }} >{this.state.nameError}</p>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    <p style={{ color: "red", fontSize: "14px" }} >{this.state.passwordError}</p>
                  </div>
                  <div className="form-group">
                  
                    <button  className="btn btn-success" onClick={() => this.submit()}>Submit</button>
                    
                  </div>
                  {/* </form> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </>
    );
  }
}

export default Login;