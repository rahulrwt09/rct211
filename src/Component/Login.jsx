
import React, { useState, useRef } from "react";

function LoginForm() {
    const emailref = useRef();
    const passref = useRef();
    const [data, setdata] = useState({});
    const [login, setlogin]= useState(false)
  
    function handleSubmit(e) {
      e.preventDefault();
      const email = emailref.current.value;
      const password = emailref.current.value;
      const data = { email, password };
      setdata(data);
      setlogin(true);
      emailref.current.value = "";
      passref.current.value = "";
      console.log(data);
    }
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <lable>
              Email:
              <input type="text" ref={emailref} required />
            </lable>
  
            <lable>
              Password:
              <input type="password" ref={passref} required />
            </lable>
            <button type="submit">Submit</button>
          </form>
          {login && (<div>
          <h2>Login details</h2>
          <p>Email:{data.email}</p>
          <p>password{data.password}</p>  

          </div>)}
        </div>
      </>
    );
  }

export default LoginForm
