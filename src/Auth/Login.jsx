import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Login = () => {
  const initial = {
    email: "",
    password: "",
  };
  const [auth, setAuth] = useState(initial);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);

  const changehandler = (e) => {
    e.preventDefault();
    setAuth((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   console.log("auth", auth);

//   useEffect(() => {
//     setInterval(() => {
//       setShow(!show);
//     }, 1000);
//   });

  return (
    <>
      <div className="login_main">
        <form action="">
          <div>
            <label htmlFor="">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="Enter Email Here"
              value={auth.email}
              onChange={(e) => changehandler(e)}
            />
          </div>
          <div>
            <label htmlFor="">Password</label> <br />
            <input
              type="text"
              name="password"
              placeholder="Enter Password Here"
              value={auth.password}
              onChange={(e) => changehandler(e)}
            />
          </div>
        </form>
        <button onClick={() => setOpenModal(true)}>Sign Up</button>
        {show && <h5 className="text">Hello connection</h5>}
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Login;
