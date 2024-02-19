import PaymentForm from "../components/payment/creditcard";
import { Button, Modal } from "antd";
import { useState } from "react";

const PaymentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal}>Confirm</Button>
      <Modal
        title="Payment"
        open={isModalOpen}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        style={{ width: "100%" }}
      >
        <PaymentForm onOk={handleOk} onCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default PaymentPage;
