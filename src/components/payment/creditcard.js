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

  return (
    <>
      <Divider />
      <div className="flex flex-row gap-4">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="flex flex-col gap-4">
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
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            className="form-control"
            placeholder="CVC"
            pattern="\d{3,4}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="flex flex-row gap-4">
            <Button danger onClick={onCancel}>
              Cancel
            </Button>
            <Button onClick={onOk}>Pay</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;