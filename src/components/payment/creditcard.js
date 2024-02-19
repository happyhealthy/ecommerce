import { Button, Divider } from "antd";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = (props) => {
  const { onOk, onCancel } = props;
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //todo: get the form value from form instead of state
    //todo: early return if the form is empty
    //todo: validate field

    onOk();
    //todo: clear the state and reset form
    //todo: notify success (antd component / react hot toast)
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    //todo: clear the state and reset form
    onCancel();
  };

  return (
    <>
      <Divider />
      <div className="flex flex-row gap-4">
        <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="tel"
            name="number"
            className="form-control border-2 border-neutral-950"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
          <input type="text" name="name" className="form-control" placeholder="Name" required onChange={handleInputChange} onFocus={handleInputFocus} />
          <input type="tel" name="expiry" className="form-control" placeholder="Valid Thru" pattern="\d\d\d\d" required onChange={handleInputChange} onFocus={handleInputFocus} />
          <input type="tel" name="cvc" className="form-control" placeholder="CVC" pattern="\d{3,4}" required onChange={handleInputChange} onFocus={handleInputFocus} />
          <div className="flex flex-row gap-4">
            <Button danger onClick={handleCancel}>
              Cancel
            </Button>
            <Button htmlType="submit">Pay</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
