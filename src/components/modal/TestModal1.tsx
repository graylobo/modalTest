import { useState } from "react";
import { useModalStack } from "../../hooks/useModalStack";
import TestModal2 from "./TestModal2";

function TestModal1() {
  const [inputData, setInputData] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const { currentModal, openModal, closeModal } = useModalStack();

  const handleOpenModal = () => {
    openModal({
      title: "TestModal2",
      element: <TestModal2 />,
      handleConfirm: (data) => {
        closeModal();
        setReceivedData(() => {
          // When calling Modal from Modal, the update logic itself is not execute.
          console.log("data received from TestModal2:", data);
          return data;
        });
      },
    });
  };

  return (
    <div>
      <div>{`received data from TestModal2:${receivedData}`}</div>
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <button onClick={() => currentModal.handleConfirm?.(inputData)}>
        Confirm
      </button>
      <button onClick={handleOpenModal}>Open TestModal2</button>
    </div>
  );
}

export default TestModal1;
