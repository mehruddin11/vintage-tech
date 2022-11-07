import React from "react";
import { useHistory } from "react-router-dom";
// strap fuction
import LoginUser from "../strapi/loginUser";
import RegisterUser from "../strapi/registerUser";
import { useGlobalUserProvider } from "../context/user";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// handle users
// set up user context
export default function Login() {
  // login context
  const { userLogin, alert, ShowAlert } = useGlobalUserProvider();
  // end of login context
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setusername] = React.useState("default");
  const [member, setMenmber] = React.useState(false);
  const history = useHistory();
  let isEmpty = !email || !password || !username || alert.show;
  const ToggleMember = (e) => {
    e.preventDefault();
    setMenmber(!member);
  };
  const handleSubmit = async (e) => {
    ShowAlert({
      msg: "Accessing user data please wait...",
    });
    // alert
    let response;
    e.preventDefault();
    if (member) {
      // login user
      response = await LoginUser({ email, password });
    } else {
      // register user
      response = await RegisterUser({ email, password, username });
    }
    if (response.data !== null) {
      const token = response.jwt;
      const username = response.user.username;
      const newuser = { token: token, username: username };
      userLogin(newuser);
      ShowAlert({
        msg: `you are logged in ${username} happy shopping `,
      });
      history.push("/products");
    } else {
      // console.log("else condition")
      ShowAlert({
        msg: "there was and error. please try again...",
        type: "danger",
      });
    }
  };
  return (
    <Form className="form section ">
      <h2 className="section-title"> {member ? "Signin" : "Register"} </h2>
      <Form.Group className="mb-3 login-form form-control">
        {/* single input  */}
        
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
          <Form.Control type="email" placeholder="Enter email"  
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        {/* end of single input  */}
        {/* single input  */}
      </Form.Group>
      

      <Form.Group className="mb-3 form form-control">
      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3">
          <Form.Control type="password" placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        </Form.Group>

        {/* end of single input  */}
        {/* start  */}
        {!member && (
          <Form.Group className="mb-3 form-control">
            <FloatingLabel controlId="floatingInput" label= "Username" > 
            <Form.Control
              type="Username"
             placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            </FloatingLabel>
          </Form.Group>
        )}
        {/* end */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty"> pls fill out all form fields </p>
        )}
        {/* submit btn  */}
        {!isEmpty && (
          <Button className="btn btn-block btn-primary" onClick={handleSubmit}>
            
            Sumbit
          </Button>
        )}

        {/* register link  */}
        <p className="register-link">
          {" "}
          {member ? "need to resgiter " : "Already memeber"}
          <Button className="" onClick={ToggleMember}>
            {" "}
            click here{" "}
          </Button>{" "}
        </p>
      
    </Form>
  );
}
