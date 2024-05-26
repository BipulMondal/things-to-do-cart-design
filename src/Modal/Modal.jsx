import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal_main">
      <div className="modal_form_main">
        <form action="">
          <label htmlFor=""></label>
         
        </form>
      </div>
      <div className="btn_div">
        <button onClick={() => setOpenModal(false)}>x</button>
      </div>
    </div>
  );
};

export default Modal;
