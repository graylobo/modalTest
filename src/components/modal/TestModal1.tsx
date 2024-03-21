import React, { useEffect, useState } from "react";
import { useModalStack } from "../../hooks/useModalStack";
import TestModal2 from "./TestModal2";

function TestModal1() {
  const [inputData, setInputData] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const { currentModal, openModal, closeModal } = useModalStack();

  const handleOpenModal = () => {
    openModal({
      title: "출고지 설정2",
      element: <TestModal2 />,
      handleConfirm: (data) => {
        closeModal();
        setReceivedData(() => {
          // Modal에서 Modal을 호출한 경우에 업데이트 로직자체가 수행이 안됨
          return data;
        });
      },
    });
  };

  return (
    <div>
      <div>{`수신값2:${receivedData}`}</div>
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <button onClick={() => currentModal.handleConfirm?.(inputData)}>
        확인
      </button>
      <button onClick={handleOpenModal}>모달2열기</button>
    </div>
  );
}

export default TestModal1;
