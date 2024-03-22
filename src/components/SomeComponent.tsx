import React, { useState } from "react";
import { useModalStack } from "../hooks/useModalStack";
import TestModal1 from "./modal/TestModal1";

function SomeComponent() {
  const { openModal, closeModal } = useModalStack();
  const [receivedData, setReceivedData] = useState("");
  const handleOpenModal = () => {
    openModal({
      title: "TestModal1",
      element: <TestModal1 />,
      handleConfirm: (data) => {
        closeModal();
        setReceivedData((prev) => {
          // When Modal is called from a regular component, the internal update logic is executed normally.
          console.log("data received from TestModal1:", data);
          return data;
        });
      },
    });
  };

  return (
    <div>
      <div>{`received data from TestModal1:${receivedData}`}</div>
      <button onClick={handleOpenModal}>Open TestModal1</button>
    </div>
  );
}

export default SomeComponent;
